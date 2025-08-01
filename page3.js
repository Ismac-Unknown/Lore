function checkCode() {
  const input = document.getElementById('codeInput').value.trim().toLowerCase();
  const result = document.getElementById('resultMessage');
  const correct = "seraphim"; // placeholder — YOU can change this name!

  if (input === correct) {
    result.innerHTML = "Access granted. Proceed to Page 5.";
    result.style.color = "green";
    setTimeout(() => {
      window.location.href = "page5.html"; // or trigger a typewriter
    }, 2000);
  } else {
    result.innerHTML = "Wrong name. She laughs.";
    result.style.color = "crimson";
  }
}
