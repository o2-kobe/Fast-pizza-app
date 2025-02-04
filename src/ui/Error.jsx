import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  // if we want to get access to the Error from the route then we use the useRouteError
  const { data, message } = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{data || message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
