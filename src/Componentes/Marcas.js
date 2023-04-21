import React from "react";
import "../Css-Carpeta/Marcas.css";

/*----------------------------------*/
/*Creando componentes de testimonios*/
/*----------------------------------*/
function Marcas(props) {
    return ( 
        <div className="contenedor-marcas">
            <h1 className="marc">Como se ve en:</h1>
            <img
                className="imagen-marcas"
                src={require(`../Imagenes/${props.imagen}.png`)}
                alt="foto de las marcas" />
        </div>
    );
}

export default Marcas;