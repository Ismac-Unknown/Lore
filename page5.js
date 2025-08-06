let i = 0;
const output = document.getElementById('text');
const skipBtn = document.getElementById('skipButton');
const nextBtn = document.getElementById('nextButton');

const text = `-.. --- / -.-- --- ..- / -... . .-.. .. . ...- . / ..- ... / -- --- .-. - .- .-.. ... --..-- / .-- .. .-.. .-.. / . ...- . .-. / . -..- .--. . .-. .. . -. -.-. . / .. -- -- --- .-. - .- .-.. .. - -.-- ..--.. 
Lydia here... my father is getting desperate... just last night the enemy line made a 20 meter advancement, and are rappidly flanking us from the right wing. So it has been chosen, I get one last entry... and s̵̜̫͕̩͖̚ḫ̷̙́͒͋͝è̴͉̱ gets my body, my consciousness shattered into a billion pieces. Father states it's for the best, yet I can't find myself trusting him, after all, after he saw mother get m̴͙͎̿̿̀̋́͜͜ỹ̷̢̨̦͇̥̊͛́ ̶̲͂̾̾u̶̼̟̒n̶̳̳͆̐́̏̓b̸̗̲͉͙̰́͑̃̑o̵͔̻͎̞̱̔́r̴̨͉͇͗ͅn̵̫̤̈́̔̏̈́͆ ̶̺̗͔̰̔̊̀ͅb̶͖͍̰̎r̸̡̛̪̹͙̽̄͂o̵͙̒̀t̵͕͙͎̗̽́̄ḫ̴̜̎͋͆̂ḛ̸̠̯̳̥̀͑̚r̷̹̖̞̙͋̽̉̔ ̸̣͐̔̃̄t̴̡͎͆̔͌̚͘o̴̭̘̞͗̒̍r̸͇̜̊̋͛̆ņ̷̘͕͖͇͆͋ ̷̱̜͚̪̇r̴̙͎̳̓̒̀i̵͖̜̞̜̓̀͌͗̊ǵ̵̘͒h̴̦̰̊͊̑t̵͓̤̹̼̯͛̈́̔͆͊ ̸̗͆o̵͓̣̤͈̜͊̈͗u̷̮̹͘ţ̵̯̿̈͗̔͗ ̸̧͖͚̙̎͛̇̚ò̷̼͔̖̮̄̃̚f̵̮̦̫͑͑̈̕̚ ̵̡̟̈́̉ȟ̵͈͚͚̪̈ē̵̼̿͌͝r̸̨̤̂͘̚. He never once acted sane again. Though I've learned not to disobay those above me. Humbly accepting my fate. Humility... our guardian saint, the one who checks balance between him and Pride, the humble one who stepped down to let her take her throne among us sinners. Without him, Pride is nothing... and if Pride were to ever collapse... vanish... or ď̸͎̼͉̔͝i̸̙̗̊e̶͓̓, 𝐢𝐭 𝐰𝐨𝐮𝐥𝐝 𝐠𝐫𝐚𝐧𝐭 𝐭𝐡𝐞 𝐩𝐨𝐰𝐞𝐫 𝐬𝐡𝐞 𝐨𝐧𝐜𝐞 𝐡𝐞𝐥𝐝, 𝐛𝐚𝐜𝐤 𝐭𝐨 𝐭𝐡𝐞 𝐡𝐮𝐦𝐛𝐥𝐞 𝐨𝐧𝐞-... oh but that doesnt matter no more. The ceremony has prepared me for this, I know I wont last. And just be a fragment to ḫ̸̢͂é̶̲r̵͍͌̄̽͜ history. We are told to hand our minds over... so she can take full control... but I can't trust these people no more... not after father stabbed our lord in the gut. Virtue of Humility... forgive me for I am the one who will bring you back from your fall, and sit you back on your throne.`;

let isSkipping = false;

function typeWriter() {
  if (isSkipping) {
    output.innerHTML = text;
    showNext();
    return;
  }

  if (i < text.length) {
    output.innerHTML += text.charAt(i);
    i++;

    let speed = 15;
    if (i > text.length * 0.7) speed = 5;
    if (i > text.length * 0.9) speed = 5;

    setTimeout(typeWriter, speed);
  } else {
    showNext();
  }
}

function showNext() {
  nextBtn.style.display = 'inline-block';
}

// Skip button logic
skipBtn.addEventListener('click', () => {
  isSkipping = true;
  typeWriter();
});

// Next button logic
nextBtn.addEventListener('click', () => {
  window.location.href = 'page3.html'; // adjust filename if needed
});

window.onload = typeWriter;
