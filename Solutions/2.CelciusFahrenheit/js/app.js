const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");

function celcius2fahrenheit() {
  let c = celcius.value;
  if (c) {
    let f = Math.round((c * 9) / 5) + 32;
    fahrenheit.value = f;
  } else {
    fahrenheit.value = "";
  }
}

function fahrenheit2celcius() {
  let f = fahrenheit.value;
  if (f) {
    let c = Math.round(((f - 32) * 5) / 9);
    celcius.value = c;
  } else {
    celcius.value = "";
  }
}
