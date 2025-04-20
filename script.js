function predict() {
  const input = document.getElementById("numbersInput").value;
  const numbers = input.split(",").map(n => parseInt(n.trim())).filter(n => !isNaN(n));
  
  if (numbers.length !== 10) {
    document.getElementById("result").innerText = "Please enter exactly 10 numbers.";
    return;
  }

  const last = numbers[numbers.length - 1];
  const prediction = last > 50 ? "Big" : "Small";
  
  document.getElementById("result").innerText = "Prediction: " + prediction;
}
