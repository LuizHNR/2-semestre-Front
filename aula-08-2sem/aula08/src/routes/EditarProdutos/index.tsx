import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function EditarProdutos(){

    const[count,setCount] = useState<number>(0);
    
    let numero = 0;

    const incrementaNumero = ()=> {
      numero += 1
      console.log(numero);
      return numero;
    }; 

    useEffect(()=>{

      incrementaNumero();
      console.log("Executou");

    },[count]);

    return(
      <div>
        <h1>Valor do usetState - {count}</h1>
        <h1>Valor de let - {numero}</h1>
        <button onClick={()=> setCount(count + 1)}>Contador</button>        
        <button onClick={()=> incrementaNumero()}>Incrementar</button>        
      </div>
    );
  }