window.onload = () => {
    const item = document.querySelectorAll("span"), em = document.querySelectorAll(".em"),border = document.querySelectorAll("ul") ,itemImg = document.querySelectorAll(".forup");
    item.forEach((item,i)=>{
        item.addEventListener('click',()=>{
            em[i].classList.toggle("hello");
            border[i].classList.toggle("main");
            itemImg[i].classList.toggle("up");
        })});}