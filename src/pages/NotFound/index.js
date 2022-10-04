import React from "react";
import {Link} from "react-router-dom";
import { NotFoundArea} from "./styled";
import foto from '../../components/images/foto.png';


const Page = () =>{
    return (
        <NotFoundArea>
        <div className="container">
            <img src={foto}/>
            <h2>Página não Encontrada</h2>
            <div  className="botao">
            <Link to='/'>Voltar para Home</Link>
            </div>
        </div>
        </NotFoundArea>
    )
}

export default Page