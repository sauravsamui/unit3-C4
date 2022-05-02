// Ude Import export (MANDATORY)
import { navbar} from "../components/navbar.js";

let nav = document.getElementById('navbar')
nav.innerHTML= navbar()

import { append1 } from "./fetch.js";

let container = document.getElementById('detailed_news')

let data = JSON.parse(localStorage.getItem("news")) 

let showDetails =()=>{
    append1(data,container)
}

showDetails()

let search= async(e)=>{
   
    if(e.key == "Enter"){
       let query = document.getElementById('search_input').value
       localStorage.setItem("query",query);
   window.location.href="search.html"
    }
}


document.getElementById('search_input').addEventListener("keydown",search)