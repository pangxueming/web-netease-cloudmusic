import React, { memo } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import routes from "./router";
import store from "./store";

import NMAppHeader from "@/components/app-header";
import NMAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <NMAppHeader />
        {renderRoutes(routes)}
        <NMAppFooter />
      </HashRouter>
    </Provider>
  );
});
