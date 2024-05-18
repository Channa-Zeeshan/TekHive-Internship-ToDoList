const inputBox=document.getElementById("input-text");
const listContainer=document.getElementById("list-container");
const btn=document.querySelector(".button")
console.log(inputBox.value);

btn.addEventListener('click',(evt)=>{
    evt.preventDefault();
    

    if(inputBox.value=== ''){
        alert('You Must Write Something')
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        inputBox.value=""
        saveData();

        let span=document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
        saveData();

        
       
    }

});
listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData();

    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

});
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

