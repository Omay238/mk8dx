for(var i = 0; i < Object.keys(abbrs).length; i++){
  let label = document.createElement("p");
  let slider = document.createElement("input");
  let value = document.createElement("p");
  label.innerHTML = abbrs[Object.keys(abbrs)[i]];
  label.classList.add("inline");
  slider.id = Object.keys(abbrs)[i];
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
