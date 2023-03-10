const keys=document.querySelectorAll(".key");
const textarea=document.getElementById("textarea");
const space=document.getElementById("space");
const del=document.getElementById("delete");
const shift=document.getElementById("shift");
        
keys.forEach(btn => {
    btn.addEventListener("click", () => {
        navigator.vibrate(200);
        textarea.value+=btn.innerText;
    })
});

del.addEventListener("click", () => {
    navigator.vibrate(200);
    textarea.value=textarea.value.slice(0, textarea.value.length - 1);
});

space.addEventListener("click", () => {
    navigator.vibrate(200);
    textarea.value+=" ";
});

shift.addEventListener('click', () => {
    navigator.vibrate(200);
    keys.forEach(btn => {
        btn.classList.toggle('upper')
    })
});
