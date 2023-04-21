import React from "react";
import "../Css-Carpeta/Clon.css";

/*----------------------------------*/
/*Creando componentes de testimonios*/
/*----------------------------------*/
function Clon(props) {
    return ( 
        <div className="contenedor-clon">
            <img
                className="imagen-clon"
                src={require(`../Imagenes/${props.imagen}.png`)}
                alt="foto de contenido" />
            <div className="contenedor-texto">
                <p className="Nombre">{props.nombre} en {props.pais}</p>
                <p className="Cargo">{props.cargo} en {props.empresa}</p>
                <p className="Testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Clon;