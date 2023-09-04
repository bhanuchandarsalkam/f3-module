function getsearch(){
const date=document.getElementById("search-input").value;
const apikey="Xvf5EBud2MGyTEl2zay4SFFNqpWTiwCo6LOyDFIp";
console.log(date);
const newdate=new Date(date);
//var arr=[];
//arr.push(newdate);
//let string=json.stringify(arr);
//localStorage.setItem("searches",string);
console.log(newdate);
const url=`https://api.nasa.gov/planetary/apod?&api_key=${apikey}&date=${date}`
fetch(url)
.then((Response)=>Response.json())
.then((data)=>{
    console.log(data);
   searchhistory(data);
   //arr.push(data.date);
//let string=json.stringify(arr);
//localStorage.setItem("searches",string);
    const currentimage=document.getElementById("current-image-container");
   currentimage.innerHTML=`
   <div class="pan">
   <h2>picture on ${data.date}</h2>
   <img id=image src="${data.url}" alt="">
   <h2>${data.title}</h2>
   <p id="exp">${data.explanation}</p>
   </div>`
})
}
const button=document.getElementById("submit");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    getsearch();
});
function searchhistory(data){
    const searchhistory=document.getElementById("search-history");
    const help=document.createElement("li");
    help.innerHTML=data.date;
    help.addEventListener("click",()=>{
        search(help.innerText);
    });
    searchhistory.appendChild(help);
   // help.addEventListener("click",search);
}
function search(date){
    //const date=document.getElementById("search-input").value;
const apikey="Xvf5EBud2MGyTEl2zay4SFFNqpWTiwCo6LOyDFIp";
console.log(date);
const newdate=new Date(date);
console.log(newdate);
const url=`https://api.nasa.gov/planetary/apod?&api_key=${apikey}&date=${date}`
fetch(url)
.then((Response)=>Response.json())
.then((data)=>{
    console.log(data);
    const currentimage=document.getElementById("current-image-container");
   currentimage.innerHTML=`
   <div class="pan">
   <h2>picture on ${data.date}</h2>
   <img id=image src="${data.url}" alt="">
   <h2>${data.title}</h2>
   <p>${data.explanation}</p>
   </div>`
})
}

