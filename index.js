const ratingEls = document.querySelectorAll(".rating");
const btnEl=document.getElementById("btn");
const container =document.getElementById("container");
letselectedRating="";

ratingEls.forEach(ratingEl=>{
    ratingEl.addEventListener("click",(event)=>{
        removeClass();
        selectedRating=event.target.innerText||event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add('active');

    })
})
 
btnEl.addEventListener("click",()=>{
    if(selectedRating!==""){
        
        container.innerHTML=`
        <strong>Thank you!!!!!</strong>
        <br>
        <br>
        <strong>${selectedRating}</strong>
        <p>we will use your feedback to improve customer support</p>
        `
    }
})


function removeClass(){
    ratingEls.forEach(ratingEl=>{
        ratingEl.classList.remove("active");
    })
}