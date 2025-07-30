const text = `I never thought my reign would see an end...
Not to envy.
Not to wrath.
Certainly not to shame.

Yet here I am—day 47 in exile.

They chant in the dark, as if I cannot hear.
As if my glory does not linger in the bones of this dying world.

Let them come.

Let them remember my name.`;

let i = 0;
const speed = 50;
const output = document.getElementById('text');

function typeWriter() {
  if (i < text.length) {
    output.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
