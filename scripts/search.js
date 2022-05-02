// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar} from "../components/navbar.js";

let nav = document.getElementById('navbar')
nav.innerHTML= navbar()

let query = localStorage.getItem("query")
let container=document.getElementById('results')

import { searchFunc1,append } from "./fetch.js";

let searchShow = async()=>{
 let data = await searchFunc1(query)
  append (data,container)
}
searchShow()


let search= async(e)=>{
   
    if(e.key == "Enter"){
       let query = document.getElementById('search_input').value
       localStorage.setItem("query",query);
   window.location.href="search.html"
    }
}

document.getElementById('search_input').addEventListener("keydown",search)