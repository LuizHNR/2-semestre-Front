import { Link } from "react-router-dom";
import { listaProdutos } from "../../listaProdutos";
import styled from "styled-components";

const MinhaTabela = styled.table`
  border-collapse: collapse;
  width: 70%;
  margin: 0 auto;
  
`

export default function Produtos(){

    return(
      <div>
        <h1>Produtos Eletrônicos</h1>

        <MinhaTabela>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Marca</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Foto</th>
              <th>Editar | Excluir</th>
            </tr>
          </thead>
        
        <tbody>
        {listaProdutos.map((prod)=>(
          <tr key={prod.id}>
            <td>{prod.nome}</td>
            <td>{prod.marca}</td>
            <td>{prod.desc}</td>
            <td>{prod.preco}</td>
            <td><img src={prod.foto} alt={prod.nome}/></td>
            <td><Link to={`/editar/produtos/${prod.id}`}>Editar</Link></td>
          </tr>
        ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={6}>
            Total de produtos <span>{listaProdutos.length}</span>  
            </td>
          </tr>
        </tfoot>
      </MinhaTabela>
      </div>
    );
  }
  // id:number;
  // nome:string;
  // marca:string;
  // desc:string;
  // preco:number;
  // foto:string;