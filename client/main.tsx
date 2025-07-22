import React from "react";
import { initThemeMode } from "flowbite-react";
import { Meteor } from "meteor/meteor";
import { createRoot } from "react-dom/client";
import { App } from "/imports/ui/App";
// import { ThemeInit } from "../.flowbite-react/init";

Meteor.startup(() => {
  const container = document.getElementById("react-target");
  const root = createRoot(container!);
  root.render(
    <>
      {/* TODO: Uncaught Error: Cannot find module '../.flowbite-react/init' */}
      {/* <ThemeInit /> */}
      <App />
    </>,
  );
  initThemeMode();
});
