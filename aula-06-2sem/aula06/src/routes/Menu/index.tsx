import { Link } from "react-router-dom";

export default function Menu(){

    return(
        <>
            <h1>Teste Rotas</h1>
            <nav className="Menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/produtos/editar/0">Editar Produtos</Link></li>
            </nav>
        </>
    );
}