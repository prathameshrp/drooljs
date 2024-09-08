const dropDowns = document.querySelectorAll(".dropDown");

dropDowns.forEach(dropDown => {
    
const btn = dropDown.firstElementChild;
const list = dropDown.lastElementChild;
let toggle = false;

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
        toggle = !toggle;
    }
})

});