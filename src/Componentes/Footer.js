import React from "react";
import "../Css-Carpeta/Footer.css";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="contenedor-text-footer">
                <p>{props.primerText}</p>
                <p>{props.segundoText}</p>
                <p>{props.tercerText}</p>
                <a className="impuestos-link">Puede hacer una donación deducible de impuestos aquí</a>
            </div>

            <div className="contenedor-tendencias">
                <h3>Guías de tendencias</h3>
                <div className="tendencias">
                    <div className="contenedor-tendencias-1">
                        <p className="tendencias-link">Lista de Python .append()<br></br></p>
                        <p className="tendencias-link">Función Python .zip()<br></br></p>
                        <p className="tendencias-link">¿Qué es un ingeniero de control de calidad?<br></br></p>
                        <p className="tendencias-link">Python Imprimir la misma línea<br></br></p>
                        <p className="tendencias-link">Cambiar el nombre de las ramas en Git<br></br></p>
                        <p className="tendencias-link">¿Qué significa codificación?<br></br></p>
                        <p className="tendencias-link">¿Qué es el análisis de datos?<br></br></p>
                        <p className="tendencias-link">Cómo comentar CSS<br></br></p>
                        <p className="tendencias-link">Doble vs flotador en C++<br></br></p>
                        <p className="tendencias-link">Variables globales de Python<br></br></p>
                    </div>

                    <div className="contenedor-tendencias-2">
                        <p className="tendencias-link">Operadores de C++<br></br></p>
                        <p className="tendencias-link">Fórmulas de Excel<br></br></p>
                        <p className="tendencias-link">Interrupción en Python<br></br></p>
                        <p className="tendencias-link">Alinear texto en CSS<br></br></p>
                        <p className="tendencias-link">Cómo minimizar CSS<br></br></p>
                        <p className="tendencias-link">Cadena dividida de Python<br></br></p>
                        <p className="tendencias-link">Lista de Python insert()<br></br></p>
                        <p className="tendencias-link">Algoritmo de ordenación combinada<br></br></p>
                        <p className="tendencias-link">¿Qué es un archivo SVG?<br></br></p>
                        <p className="tendencias-link">Explicación de los colores RGB<br></br></p>
                    </div>

                    <div className="contenedor-tendencias-3">
                        <p className="tendencias-link">Cómo funcionan los vectores en C++<br></br></p>
                        <p className="tendencias-link">JavaScript .setTimeout()<br></br></p>
                        <p className="tendencias-link">Métodos abreviados de teclado de Excel<br></br></p>
                        <p className="tendencias-link">Referencia absoluta de Excel<br></br></p>
                        <p className="tendencias-link">Insertar casilla de verificación en Excel<br></br></p>
                        <p className="tendencias-link">Cuadrar un número en Python<br></br></p>
                        <p className="tendencias-link">Cómo bloquear celdas en Excel<br></br></p>
                        <p className="tendencias-link">Python Eliminar clave de Dict<br></br></p>
                        <p className="tendencias-link">Ejemplos de trabajos de tecnología para principiantes<br></br></p>
                        <p className="tendencias-link">Notación de patas de gallo<br></br></p>
                    </div>
                </div>

                <div className="contenedor-text-caridad">
                    <h3>Nuestra caridad</h3>
                    <div className="caridades">
                        <p>Acerca de</p>
                        <p>Red de antiguos alumnos</p>
                        <p>Código abierto</p>
                        <p>Tienda</p>
                        <p>Apoyo</p>
                        <p>Patrocinadores</p>
                        <p>Honestidad académica</p>
                        <p>Código de Conducta</p>
                        <p>Política de privacidad</p>
                        <p>Condiciones del servicio</p>
                        <p>Política de derechos de autor</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;