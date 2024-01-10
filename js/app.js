let elBody = document.querySelector("body")
let elModeBtn = document.querySelector("#modeBtn") 


elModeBtn.addEventListener("click", function(){
    elBody.classList.toggle("mode")
})