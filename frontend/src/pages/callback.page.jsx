import React from "react";
import { AuthConsumer } from "../App";

export const Callback = () => (
  <AuthConsumer>
    {({ authStore }) => {
      authStore.mgr
        .signinRedirectCallback()
        .then(function () {
          window.location = "/test";
        })
        .catch(function (e) {
          console.error(e);
        });
      return <span>loading</span>;
    }}
  </AuthConsumer>
);
