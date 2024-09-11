function addDrools({class: droolClass, drool: keepItHidden=true}) {
  const dropDowns = document.querySelectorAll(`.${droolClass}`);

  let displayPropertyOption = keepItHidden?'none':'block';
  dropDowns.forEach((dropDown) => {
    const btn = dropDown.firstElementChild;
    const list = dropDown.lastElementChild;

    list.setAttribute('style', `display:${displayPropertyOption}`);
    let toggle = false;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      if (toggle) {
        list.setAttribute("style", "display: none;");
        toggle = !toggle;
      } else {
        list.setAttribute("style", "display: block");
        toggle = !toggle;
      }
    });
  });
}

export default addDrools;
