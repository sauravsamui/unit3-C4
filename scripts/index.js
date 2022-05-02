// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
 import {navbar,sidebar} from '../components/navbar.js'
import { append, searchFunc } from './fetch.js';

 let nav = document.getElementById('navbar')
 nav.innerHTML=navbar();
 let side = document.getElementById('sidebar')
 side.innerHTML=sidebar()

 let container = document.getElementById('results')

// const url =`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`

let default1 =async()=>{
    let d ="in";

    let data1 = await searchFunc(d)
    append(data1,container)
}
default1()
let search= async(e)=>{
   
     if(e.key == "Enter"){
        let query = document.getElementById('search_input').value
        localStorage.setItem("query",query);
    window.location.href="search.html"
     }
}


document.getElementById('search_input').addEventListener("keydown",search)



let side_bar =document.getElementById('sidebar').children

console.log(side_bar)

async function sideFunction(){
    let data = await searchFunc(this.id);
    append(data,container)
}

for(let el of side_bar){
    el.addEventListener("click",sideFunction)
}