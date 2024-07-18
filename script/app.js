/*
    app.js

*/

document.querySelector("#show-popup").addEventListener("click",function(){
   document.querySelector(".popup").classList.add("active");
  });
  
  document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
  });
  
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
