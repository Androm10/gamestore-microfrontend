import { createBrowserRouter } from "react-router-dom";
import { App } from "..";
import { GameCatalogPage, GameDetailsPage } from "@/pages/game";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <GameCatalogPage />,
      },
      {
        path: "/game/:id",
        element: <GameDetailsPage />,
      },
    ],
  },
]);
