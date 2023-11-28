import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { store } from "./app/store";

const root = document.querySelector("#root");

if (!root) {
  throw new Error("root not found");
}

const container = ReactDOM.createRoot(root);

container.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
