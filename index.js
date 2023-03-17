for(var i = 0; i < Object.keys(abbr).length; i++){
  let label = document.createElement("p");
  let slider = document.createElement("input");
  let value = document.createElement("p");
  label.innerHTML = abbr[Object.keys(abbr)[i]];
  label.classList.add("inline");
  slider.id = Object.keys(abbr)[i];
  slider.type = "range";
  slider.min = -10;
  slider.max = 10;
  slider.classList.add("slider");
  slider.onInput = () => {
    value.innerHTML = slider.value;
  };
  value.innerHTML = 0;
  value.classList.add("inline", "val");
}
