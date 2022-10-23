import { Fragment } from "react";

import MainNavagation from "./main-navigation/main-navigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavagation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
