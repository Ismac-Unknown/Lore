function typeWriter() {
  if (i < entry.length) {
    output.innerHTML += entry.charAt(i);
    i++;
    setTimeout(typeWriter, 15);
  } else {
    document.getElementById("continueContainer").style.display = "block"; // show Continue
    document.getElementById("skipContainer").style.display = "none"; // hide Skip
  }
}

function skipText() {
  output.innerHTML += entry.substring(i);
  i = entry.length;
  document.getElementById("continueContainer").style.display = "block"; // show Continue
  document.getElementById("skipContainer").style.display = "none"; // hide Skip
}
