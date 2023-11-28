import { FC } from "react";
import "./index.scss";
import { Outlet } from "react-router-dom";

export const App: FC = () => {
  return (
    <div>
      Hello app
      <div>
        <Outlet />
      </div>
    </div>
  );
};
