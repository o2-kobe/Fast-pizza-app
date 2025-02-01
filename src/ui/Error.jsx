import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  // if we want to get access to the Error from the route then we use the useRouteError
  const { data, message } = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{data || message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
