const dropDown = document.querySelector("#dropDown");

const btn = dropDown.firstElementChild;
const list = dropDown.lastElementChild;
let toggle = false;

console.log(list)
console.log(btn)

btn.addEventListener("click", (e)=>
{
    e.stopPropagation();
    
    if(toggle)
    {
        list.setAttribute('class', 'hidden');
        toggle = !toggle;
    }
    else
    {
        list.setAttribute('class', 'visible');
        console.log(list.classList)
        toggle = !toggle;
    }
})