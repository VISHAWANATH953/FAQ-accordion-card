window.onload = () => {
    const open = false;
    const [item1, item2, item3, item4, item5] = document.querySelectorAll("span");
    const [em1, em2, em3, em4, em5] = document.querySelectorAll("#em");
    // const main = document.querySelectorAll(".main");
    item1.onclick = () => {
        // main.classList.toggle("weight");
        em1.classList.toggle("hello");
        // item1.classList.toggle("up");
    }
    item2.onclick = () => {
        // main.classList.toggle("weight");
        em2.classList.toggle("hello");
        // item2.classList.toggle("up");
    }
    item3.onclick = () => {
        // main.classList.toggle("weight");
        em3.classList.toggle("hello");
        // item3.classList.toggle("up");
    }
    item4.onclick = () => {
        // main.classList.toggle("weight");
        em4.classList.toggle("hello");
        // item4.classList.toggle("up");
    }
    item5.onclick = () => {
        // main.classList.toggle("weight");
        em5.classList.toggle("hello");
        // item5.classList.toggle("up");
    }

}
console.log("javascript was attached");