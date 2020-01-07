import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";
import './components/styles.css';
import "jquery";
import "popper.js";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.css"



let hour =0;
let min =0;
let sec =0;
let count= setInterval(function(){
    ReactDOM.render(<App name ={"Contador"} num1={sec} num2={min} num3={hour}/>, document.querySelector("#root"))
    sec ++;
    if (sec === 60) {
        sec = 0;
        min++;
    }
    else if(min === 60) {
        min = 0;
        hour++;
    }
    else if(hour === 24){
        hour = 0;
        clearInterval(count)
    }
    
},
1000);
