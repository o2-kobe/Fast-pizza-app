import Header from "./Header";
import Loader from "./loader";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation(); //this gives us access to the state of the app, thus when it is fetching data then the state is loading else it is idle, it also gives us access to methods like "goback" which is used to go to the previous page
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

{
  /*this outlet component allows us to render the various pages
        conditionally and it is given to us by react-router
        
  also the h-screen class is equivalent to height: 100vh, thus that element shoudld fill the whole screen*/
}

export default AppLayout;
