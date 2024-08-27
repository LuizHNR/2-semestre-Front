import { Outlet } from "react-router-dom";

export default function App() {


  return(
    <div>
      {/*--------Aqui vamos adicionar o componente OUTLET do router-dom que recebe a props de RouterProvider-------- */}
      <Outlet/>
    </div>
  );
}