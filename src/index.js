import React from "react";
import ReactDOM from "react-dom";
/* import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges"; */
import App from "./components/App";
//import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

//const name = 'Sebastian';

//const jsx = <h1>Hello, Platzi Badges</h1>; //__que__
//const element = React.createElement('h1', {}, 'Hello my firend REACT') // __Etiqueta__, __Atributos__, __Contenido__
//const element = React.createElement('h1', {}, `Hello my friend ${name}`) // __Etiqueta__, __Atributos__, __Contenido con JavaScript__
//const jsx = <h1>Hello my friend {name}</h1> //__expresiones {}__
const container = document.getElementById("app"); //__donde__

//ReactDOM.render(__que__, __donde__)
ReactDOM.render(<App />, container);
