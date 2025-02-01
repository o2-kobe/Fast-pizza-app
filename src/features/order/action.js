import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please input your correct phone number. We might need it to contact you";
  if (Object.keys(errors).length > 0) return errors;

  // if everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

// the redirect is the alternative for navigate but used in function whilst the navigate is used in react components

// this function gives us access to the data from the form in the CreateOrder component
// so it fetches the data in the form and create an object with key value pairs for every label and the value inserted into it
// then it just returns it
