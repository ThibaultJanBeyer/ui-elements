// see https://gitlab/billing/billing-ui/tree/mainline for tonis examples and https://github.com/tonis2/customElement-app

import Router from "./modules/router.js";

var router = new Router();
/// Create a router for the application, when route is landed fire the function,
//  which tells our App engine, to remove old rendered component and then render a new one.

router
  .on("/", params => {
    document.body.innerHTML = "";
    let test = document.createElement("div");
    test.innerHTML = "Test";
    test.addEventListener('click', () => {
        router.navigate('/bla');
    });
    document.body.appendChild(test);
  })
  .on("/bla", params => {
    document.body.innerHTML = "";
    const test = document.createElement("div");
    test.innerHTML = "TOLOLO";
    document.body.appendChild(test);
  })
  .resolve();
