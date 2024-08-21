import { Outlet } from "react-router-dom";
import Menu from "./routes/Menu";

export default function App() {

  return (
    <div>
      <Menu/>
      <Outlet />
    </div>
  );
}


