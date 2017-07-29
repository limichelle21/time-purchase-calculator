function calculateCost() {
  var itemPrice = document.getElementById('price').value;
  var hourlyWage = document.getElementById('wage').value;
  var cost = itemPrice / hourlyWage;
  var costEl = document.getElementById('cost');
  document.getElementById('cost').innerHTML = cost.toFixed(2) + " hours";
  costEl.style.display = 'block';
}

function hideCost() {
  var costEl = document.getElementById('cost');
  costEl.style.display = 'none';
}
