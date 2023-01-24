const keys=document.querySelectorAll(".key");
const textarea=document.getElementById("textarea");
const space=document.getElementById("space");
const del=document.getElementById("delete");
const shift=document.getElementById("shift");
        
keys.forEach(btn => {
    btn.addEventListener("click", () => {
    textarea.value+=btn.innerText;
    })
});

del.addEventListener("click", () => {
    textarea.value=textarea.value.slice(0, textarea.value.length - 1);
});

space.addEventListener("click", () => {
    textarea.value+=" ";
});

shift.addEventListener('click', () => {
    keys.forEach(btn => {
        btn.classList.toggle('upper')
    })
});