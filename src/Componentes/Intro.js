import React from "react";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "../Css-Carpeta/Intro.css";

function Intro(props) {
    return (
        <div className="cont-intro">
            <div className="nav">
                <h3 className="free">freeCodeCamp
                    <span className="icono">
                        <FaFreeCodeCamp />
                    </span>
                </h3>
                <div className="cont-menu">
                    <span className="user">
                        <FaUserCircle />
                    </span>
                    <button className="menu">Menú</button>
                </div>
            </div>
            <div className="cont-text-tittle">
                <h1 className="titulo">Aprende a codificar, gratis. <br />
                    Construir proyectos.<br />
                    Obtenga certificaciones.
                </h1>
            </div>
            <div className="cont-text">
                <p>{props.info}</p>
            </div>
            <div className="empresas">
                <img
                    className="image-empresas"
                    src={require(`../Imagenes/${props.imagen1}.png`)}
                    alt="Imagenes de colaborativas" />
                <img
                    className="image-empresas"
                    src={require(`../Imagenes/${props.imagen2}.png`)}
                    alt="Imagenes de colaborativas" />
                <img
                    className="image-empresas"
                    src={require(`../Imagenes/${props.imagen3}.png`)}
                    alt="Imagenes de colaborativas" />
                <img
                    className="image-empresas"
                    src={require(`../Imagenes/${props.imagen4}.png`)}
                    alt="Imagenes de colaborativas" />
            </div>
        </div>
    );
}

export default Intro;