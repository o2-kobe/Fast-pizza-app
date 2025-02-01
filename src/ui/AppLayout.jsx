import Header from "./Header";
import Loader from "./loader";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation(); //this gives us access to the state of the app, thus when it is fetching data then the state is loading else it is idle, it also gives us access to methods like "goback" which is used to go to the previous page
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

{
  /*this outlet component allows us to render the various pages
        conditionally and it is given to us by react-router*/
}

export default AppLayout;
