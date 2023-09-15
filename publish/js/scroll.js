const btn = document.querySelectorAll(".btn>ul>li");


btn.forEach((el, index) =>{
    el.addEventListener('click',()=>{
        for(el of btn){
            el.classList.remove("on");
            btn[index].classList.add("on");
        }           
    })
})