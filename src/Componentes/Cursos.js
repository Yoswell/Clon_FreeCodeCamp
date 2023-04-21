/*-------------------------------------------------*/
/*Importando iconos de react previamente instalados*/
/*-------------------------------------------------*/
import { MdComputer } from "react-icons/md";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { HiEye } from "react-icons/hi";
import { ImDatabase } from "react-icons/im";
import { FaServer } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { FaPython } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { HiLockClosed } from "react-icons/hi";
import { TbSettingsAutomation } from "react-icons/tb";


import { AiOutlinePlus } from "react-icons/ai";

import React from "react";
import "../Css-Carpeta/Cursos.css";
/*--------------------------------------*/
/*Creando componentes de certificaciones*/
/*--------------------------------------*/
function Cursos() {
    return (
        <div className="contenedor-cursos">
            <div className="contenedores">
                <div className="cont-certificaciones">
                    <div className="icono"><MdComputer /></div>
                    <p className="info-cursos">(New) Certificación de Diseño Web Responsivo</p>
                    <div className="link"><AiOutlinePlus /></div>
                </div>

                <div className="cont-certificaciones">
                    <div className="icono"><SiJavascript /></div>
                    <p className="info-cursos">Certificación de algoritmos JavaScript y estructuras de datos</p>
                    <div className="link"><AiOutlinePlus /></div>
                </div>

                <div className="cont-certificaciones">
                    <div className="icono"><FaReact /></div>
                    <p className="info-cursos">Certificación de bibliotecas de desarrollo Front-End</p>
                    <div className="link"><AiOutlinePlus /></div>
                </div>

                <div className="cont-certificaciones">
                    <div className="icono"><HiEye /></div>
                    <p className="info-cursos">Certificación de visualizacion de datos</p>
                    <div className="link"><AiOutlinePlus /></div>
                </div>

                <div className="cont-certificaciones">
                    <div className="icono"><ImDatabase /></div>
                    <p className="info-cursos">Certificación de base de datos relacional (beta)</p>
                    <div className="link"><AiOutlinePlus /></div>
                </div>

                <div className="cont-certificaciones">
                    <div className="icono"><FaServer /></div>
                    <p className="info-cursos">Desarrollo Back-End y Certificación de APIs</p>
                    <div className="link"><AiOutlinePlus /></div>
                </div>

                <div className="cont-certificaciones">
                    <div className="icono"><ImCalendar /></div>
                    <p className="info-cursos">Certificación de garantia de calidad</p>
                    <div className="link"><AiOutlinePlus /></div>
                </div>

                <div className="cont-certificaciones">
                    <div className="icono"><FaPython /></div>
                    <p className="info-cursos">Computación científica con certificación Python</p>
                    <div className="link"><AiOutlinePlus /></div>
                </div>

                <div className="cont-certificaciones">
                    <div className="icono"><SiGoogleanalytics /></div>
                    <p className="info-cursos">Análisis de datos con certificación Python</p>
                    <div className="link"><AiOutlinePlus /></div>
                </div>

                <div className="cont-certificaciones">
                    <div className="icono"><HiLockClosed /></div>
                    <p className="info-cursos">Certificación de Seguridad de la Información</p>
                    <div className="link"><AiOutlinePlus /></div>
                </div>

                <div className="cont-certificaciones">
                    <div className="icono"><TbSettingsAutomation /></div>
                    <p className="info-cursos">Aprendizaje automático con Python</p>
                    <div className="link"><AiOutlinePlus /></div>
                </div>
            </div>
        </div>
    );
}

export default Cursos;