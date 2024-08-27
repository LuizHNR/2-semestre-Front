import { useState } from "react";
import { useParams } from "react-router-dom";

export default function EditarProdutos(){

    //Realizando um destructuring para receber o paramtredo do Hook useParams()

    // let nr:number=0;

    // const {id} = useParams();
    // if (id){
    //      nr = parseInt(id);
    // }
    
    // let msg:string = "";
    // if(typeof nr != "number"){
    //     msg = "A informação passada está incorreta";
    // }

    const[count, setCount] = useState(0);

    const incrementaNumero = () => {
        
    }


    return(
        <div>
            <h1>Componente Editar Produtos - {count} </h1>
            <button onClick={()=> setCount(count+1)}>Contador</button>
        </div>
    );
}