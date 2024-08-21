import { Outlet } from "react-router-dom";
import Menu from "./routes/Menu";
import Footer from "./components/Rodape/Footer";

export default function App() {

  return (
    <div>
      <Menu/>
      <Outlet />
      <Footer/>
    </div>
  );
}


