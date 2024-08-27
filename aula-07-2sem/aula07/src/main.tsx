import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// --------------------Importes utilizadas nas Rotas-------------------------
import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Home from './routes/Home/index.tsx';
import Error from './routes/Error/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';

//---------------------Construindo o array de objetos de rotas----------------
const router = createBrowserRouter([
  {path:"/",element:<App/>,errorElement:<Error/>,children:[
    {path:"/",element:<Home/>},
    {path:"/produtos",element:<Produtos/>},
    {path:"/editar/produtos/:id",element:<EditarProdutos/>},
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
