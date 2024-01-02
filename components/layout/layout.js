import MainHeader from "./main-header";

import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
