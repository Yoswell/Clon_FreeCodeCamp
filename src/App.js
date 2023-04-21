import "./App.css";
import Clon from "./Componentes/Clon";
import Marcas from "./Componentes/Marcas";
import Cursos from "./Componentes/Cursos";
import Botones from "./Componentes/Botones";
import Intro from "./Componentes/Intro";
import Footer from "./Componentes/Footer";

function App() {
    return (
        <div className="App">
            <div className="contenedor-intro">
                <Intro 
                    info="Desde el 2014, sumamos más de 40,000 graduados de freeCodeCamp.org que han conseguido trabajo en compañías de tecnología, como:"
                    imagen1="google"
                    imagen2="microsoft"
                    imagen3="spotify"
                    imagen4="amazon" />
            </div>
            <div className="cont-botones">
                <Botones />
            </div>
            <div className="contenedor-marcas">
                <Marcas 
                    imagen="marcas" />
            </div>
            <div className="cont-titulos">
                <h1 className="tittle">Esto es lo que dicen nuestros ex alumnos sobre freeCodeCamp</h1>
                <div className="barra"></div>
            </div>
            <div className="contenedor-principal">
               <Clon 
                    nombre="Shawn Wang"
                    pais="Singapur"
                    imagen="Shawn"
                    cargo="Ingeniero de Software"
                    empresa="Amazon"
                    testimonio="Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida." />
                <Clon 
                    nombre="Sarah Chima"
                    pais="Nigeria"
                    imagen="Sarah"
                    cargo="Ingeniera de Software"
                    empresa="ChatDesk"
                    testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación de un nivel principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollo en una empresa increíble." />
                <Clon 
                    nombre="Emma Bostian"
                    pais="Suecia"
                    imagen="Emma"
                    cargo="Ingeniera de Software"
                    empresa="Spotify"
                    testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify." />
            </div>
            <div className="cont-titulos">
                <h1 className="tittle">Obtenga certificaciones verificadas de cursos gratuitos en</h1>
                <div className="barra"></div>
            </div>
            <div className="contenedor-principal-cursos">
                <div className="pad-cursos">
                    <Cursos />
                </div>
            </div>
            <div className="cont-botones">
                <Botones />
            </div>
            <div className="contenedor-footer">
                <Footer 
                    primerText="freeCodeCamp es una organización benéfica 501 (c) (3) exenta de impuestos respaldada por donantes (Número de identificación fiscal federal de los Estados Unidos: 82-0779546)"
                    segundoText="Nuestra misión: ayudar a las personas a aprender a codificar de forma gratuita. Logramos esto creando miles de videos, artículos y lecciones de codificación interactivas, todos disponibles gratuitamente para el público. También tenemos miles de grupos de estudio freeCodeCamp en todo el mundo."
                    tercerText="Las donaciones a freeCodeCamp se destinan a nuestras iniciativas educativas y ayudan a pagar los servidores, los servicios y el personal."
                />
            </div>
        </div>
    );
}

export default App;