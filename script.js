function calculateInterest() {
  let principal = document.getElementById('principal').value;
  let rate = document.getElementById('rate').value;
  let time = document.getElementById('time').value;

  if (principal && rate && time) {
    let interest = (principal * rate * time) / 100;
    document.getElementById('result').innerText = `Simple Interest = ₹${interest}`;
  } else {
    document.getElementById('result').innerText = "Please enter all values.";
  }
}
