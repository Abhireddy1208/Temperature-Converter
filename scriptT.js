function convertTemperature() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unit").value;
  const resultEl = document.getElementById("result");

  if (isNaN(temp)) {
    resultEl.textContent = "❌ Please enter a valid number!";
    return;
  }

  let converted;
  if (unit === "celsius") {
    converted = (temp * 9/5) + 32;
    resultEl.textContent = `${temp}°C = ${converted.toFixed(2)}°F`;
  } else {
    converted = (temp - 32) * 5/9;
    resultEl.textContent = `${temp}°F = ${converted.toFixed(2)}°C`;
  }
}
