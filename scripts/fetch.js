let searchFunc= async(query)=>{
   
    try{
      const url =`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`
       let res = await fetch(url)
       let data = await res.json()
     
       return data.articles
    }
    catch(err){
        console.log(err)
    }
    

}

let searchFunc1= async(query)=>{
    
    try{
        const url1 =`https://masai-mock-api.herokuapp.com/news?q=${query}`
         let res = await fetch(url1)
         let data = await res.json()
       
         return data.articles
      }
      catch(err){
          console.log(err)
      }
      
}


let append =(data,container)=>{
  container.innerText =null;

  data.map(({urlToImage:url,title,description,content})=>{
      let div = document.createElement('div')
        div.setAttribute("class","news")
      let image = document.createElement('img')
      image.src =url;
  let div1 = document.createElement("div")
    
      let title1 = document.createElement("h3");
      title1.innerText=title;
       
      let desc = document.createElement("h3")
      desc.innerText=description
      div1.append(title1,desc)
      div.append(image,div1)
      let details ={
        url,
        title,
       content
    }
     div.addEventListener("click",()=>{
         window.location.href="news.html"
         localStorage.setItem("news",JSON.stringify(details))
     })
      container.append(div)

  })
}
  let append1 =(data,container)=>{
    container.innerText =null;
    let {url,title,content} = data;
        
        let image = document.createElement('img')
        image.src =url;
    
      
        let title1 = document.createElement("h3");
        title1.innerText=title;
         
        let cont = document.createElement("h3")
        cont.innerText=content
       
        container.append(image,title1,cont)
  
    
}
export {searchFunc,append,searchFunc1,append1}