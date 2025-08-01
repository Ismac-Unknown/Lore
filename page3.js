let failedAttempts = 0;

function checkCode() {
  const input = document.getElementById('codeInput').value.trim().toLowerCase();
  const result = document.getElementById('resultMessage');
  const correct = "seraphim"; // correct answer

  if (input === correct) {
    result.innerHTML = "Access granted. Proceed to Page 4.";
    result.style.color = "green";
    setTimeout(() => {
      window.location.href = "page4.html";
    }, 2000);
  } else {
    failedAttempts++;
    result.innerHTML = "Wrong name. They approach.";
    result.style.color = "crimson";

    if (failedAttempts >= 3) {
      alert("She grows bored of your ignorance.");
      window.close(); // Only works if page opened by script
    }
  }
}
