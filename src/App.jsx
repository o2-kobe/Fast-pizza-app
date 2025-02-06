import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Error from "./ui/Error";
import { loader as menuLoader } from "./features/menu/loader";
import { loader as orderLoader } from "./features/order/loader";
import Cart from "./features/cart/Cart";
import { action as UpdateOrderAction } from "./features/order/updateAction";
import CreateOrder from "./features/order/CreateOrder";
import { action as createOrderAction } from "./features/order/action";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />, //best we place it here so that the error page is loaded within the Applayout and where data is being fetched
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
        errorElement: <Error />, //placing this here too means it is the convention that wherever we can get errors, that's where we put them
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        action: UpdateOrderAction,
        errorElement: <Error />, //placing this here too means it is the convention that wherever we can get errors, that's where we put them
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
