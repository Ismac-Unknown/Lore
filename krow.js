function typeWriter() {
  if (i < entry.length) {
    output.innerHTML += entry.charAt(i);
    i++;
    setTimeout(typeWriter, 15);
  } else {
    document.getElementById("nextBtn").style.display = "inline-block";
  }
}

function skipText() {
  output.innerHTML += entry.substring(i);
  i = entry.length;
  document.getElementById("nextBtn").style.display = "inline-block";
}
function nextEntry() {
  window.location.href = "page4.html"; // or wherever the ARG goes after this log
}
