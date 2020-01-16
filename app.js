let dice = {
  sides: 6,
  roll: function() {
    let rando = Math.floor(Math.random() * this.sides) + 1;
    return rando;
  }
}

function print(n) {
  let placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = n;
}

let button = document.getElementById('button');

button.onclick = function() {
  let result = dice.roll();
  print(result);
}