let i = 0;
const output = document.getElementById('text');
const skipBtn = document.getElementById('skipButton');
const nextBtn = document.getElementById('nextButton');

const text = `Hey... you may be wondering who I am? or not, it doesnt matter. 
I'm Lydia, for formalities sake, you may know me as Pride in the future, but thats alright, as the youngest member in my family I have chosen to be the one to host her for the coming years, especially in the predicament my father has put the cabnet in.
We are no longer at peace, at least that's what we are told out here in the front lines, back home the children are lied to, told that the regiem of our great bloodline is thriving, yet here we are, dying, with no end to this war in sight.
At first it was all sin, now it's all grief, we are loosing numbers, we cant hold the front lines forever, why WHY MUST WE FIGHT?
Pride never fought for their position, it was clear from the moment you heard their name called in the halls of hell. Yet here we are, challenged and loosing.
The hell do I start... listen, I dont have much time... and I'll be persecuted for this... but I'll take Pride in the truth.


T̴̢̡̯̖͓̲͈̩̣͍̟̲͖̈́̅́̈́h̸̛̞̬̣̓̿̇̈̓͐͒e̶̢̻̯̩̮͕̬͖͎͑̉͝͝ͅẙ̵̧̯̣̊͗́'̷̼̬̙̓̀̆̊̿̋̽͋̅͒̈́̀v̵̡̬̭͈̱̥̹̳̙̱͖̮̽̋͆̓̊̏͐͊̉̑̍̒͝ê̷͎̯͊̆̐̎͘ ̵̧̣̻̻̫̪̔̃̓͂̀͌́̀̈́̆͘͠͝f̷͉̺̖̘̻̔͆o̷̧̤̰͇̞̝̬̾̋͑͒͝ũ̵̢̢̧̮͎͓̲̥̫̜̝̳̒͆n̴͓̄̀̔̆̉͗̚̚͠d̶̝̩̣̬͕̫̬̘̓̎́̒̆͝ͅ ̷̲͔̖̺͍̥̘̽̉͑́̍̋̈́͝m̸̡̧̡̻̪̙̞̘̤͒̂̔̄͋̈̋̏̓e̵̺̿̒̓͛́̒̃͒̇͒́͘̚,̵̖͍̩̗̻̣̾̾͘ ̸̡̬̝̼̫͈̣̤̣̮͘͝ͅá̷̩̿̀́̈́̀̿͂̂̕̕n̸͍̖̖͇̣̰̟̈́́̌̂́͝͠ḓ̴̫̗̖̽ ̷͎̮͙̾͗̀͑̓̽͊̐̔͛̀̈́̾Ỉ̵̺̼͜ ̶̱̱̞̺̹̥̼̖̫̰͔͇̈́̏̓̓̒͐͐͂͘͝ͅć̴̹͙͕̖̱͇̫̝̦̫̩̂̂́̔̄̃͘̚͝a̵͎͍͋̑̋̈̚͜͜͠ņ̵̨̰͕̝̖͓͙̇̔̎̌̀̿͠t̵̨̞̭̺̫̫̬̤̦͚̤̊͒͑̈́̓̄̕͘ ̶̡̧̤̙̦̪̩̠͈̥͌̋̊͌ͅr̵̨̼͔̤̝̲̜͆͑̌̎͒̉̉͌̈́͝ų̸̝͙̤͉̤̤̠̪͙͂̀̍n̶̙̱͔̰̳̘̿̈́.̵̛͙̈́̉͒̒̈́͗͠ ̵̢̭̲̼͈̟̗̠͂̽͒̆̋͑F̷̮͇͚͈̰͐͆̐̅͋͆̈́̽͒̑̀̎͌ơ̵̞̩̘̺̼͎̘̬̼͙̯̊́̽̈͘l̴̨͍͙̦̱̖̤̳̓͌́ḽ̶̄͊́͂o̸͖̰̣̦͈͉̞͍̼̬͉̟͐͌̋ͅw̷̝͌́͗͂̓̈́͘͘ͅ ̶̰͔̝̯̝̺̙͐̃̀̒̔̂̎͛̋̍̎͊̚ͅm̴̢̡͔͉̘͇̎̏̈́͛̂̎͆̃y̴̡̡̥̰͚̲̰̱̝̙͒̆͂̽͛̀̾̍͘͘͝ ̶̧̺̣̉͒̃̏̀͠ṭ̵̱͈̫̖͉̥̩̄̀͗͛͌̍r̷̡̦͖̦͚̺̰̜͔̱̩̺͙͂͒̇͌͛͌̈́̀̎͋́̚͝a̷̜͉͍̙͈͉̤͓̮̖͙͎̒̾ĭ̶̪̣̂̍̍̀̀̋̓̀̈̔̃l̵͎̤̰̺̣̜̀ͅ,̷̩̮̼̺̪͔̤̺̹̄̔̎̌̓͘ ̸͔͋̄̾̐f̶̢̣̮̟̺͖̩̠̉̌̉̍͜į̶̛͈̳̹̝̦̬̹̺̔̈́̈́̇̔̈̑̒̿̂͠͠n̵͖͓̎̊̇̈̈̊̊̊͝d̴̢͙̺̯̮͍̹̪̯̭̬̣͗̊̋̓̊̓̃̕̕͝ ̶̝͉̰͈͋́̓ḩ̷̛̱̞̟͖͎͖̜̩͖̖͇̖̽̀̃́͑ë̶̝̲̜̼̹̬̮̬̜́̍͑̊ŗ̴̼̻͔̿̈͌̚͜ͅ ̷̦̠̟̱͇͇͓͇̭̜̬͋̇̓̌͒͠c̷̛̞͍̬̈́̌͂̓̒̄̽̐̈͂̊̚ṷ̸̡̰͙̪͙̊͝ͅr̴̤̗͚͇̮͚̦̪̟̬͙̈́̔̈̐̆̉̕ͅȩ̸̧̧̭̖̟̟͍̤̝͉͎̎̒,̷̨̧͕͚̣̳̞̞͖̉ ̶͖̻̣̻͔̬̌̐̀́̓́̚͝ḅ̷̨̼̟̹̰̪̗͓̳̮̺̬̇̔̑̾̕u̶̡͚̠͖̐̋͊͐t̵͔̜͊͒̓̓̓́̃̈̌ ̸̻̠̞͍̭̦̩̰̏w̷̨̥͙̤͈̱̥̜͍̍̓a̷͈̲̮̩̲͈̮̓͛̋̐t̷̢̢̳͍̯̘̼͈̠̾̃̾̃̐̔̉͌̀̔̇̚c̸̢̗͇̖̬̯͉̠̹̣̟̻̋̋͜h̶̛̤̊͛͗̊͗͝͝͠͠ ̶̙̹̔̓̓͐̅͛̆̏͘͝ͅờ̶̱͓̬̯̖̹͓̪̠̏̌͆̆͑́̕͝͝ͅų̸̛̛͕̙̲͍̦͚̇̄͊̌̈́̆̎͆t̸̨̛̲͙̲̼͎̞͙̥̰̟̏̋̄̿̃̈́͋̅͝͝.̸͓̠̣̟̞̲̬̪́͊̉̓͗͗͝ ̶̺̗̤̯͎͈̤̞̭͂̈́̓͂͐T̶̡̢͔͎͈̪̩͍̜̣̗̼̾̈́̑̈́̑̈̀̀̕h̸̨̜͉͔̣̗͈͈̉ͅe̷̱̜̳̮͌̆̉̇͊͑͐̓͑͜͝͝ͅy̵̺̠̹̠̰̻̑͗͆̈́̑͑̎̚ͅ ̷̱̙̣̗̬̦̜͎̇͂̑͜͠ͅẘ̸̛͙͚̱͔͔̔̀̎͒̒͆͐̑͘a̷̧̺͍̦̘̤̯̩̹͓̝̟̽̇t̸̢̛͖̃̽͋̌ç̸̧̡̳̯̝̠͎̪͕̥̞͍̑̉͑̿͑̋̎̈h̵̝͚̖͎̜̼̜̼͙̀͌,̸̧̡̭̮̮̪̬̠̩̞̐͜͜ ̸̛̝̟̓̃́͂̑̇͒̒̚̕a̸̦̟͌̓̏͛̈̒͐̀͋͒̇̇̔ņ̸̹͉̪̼̘̺̘͓͖̈̄̄͝d̴͙̏͋̈͂̐̍ ̷̱͇͗̊̈́̒͠ḧ̵͉̑̑́́̎̌͊̓̈̽͘i̷͍̺͋͌̿͂͛̅̂̐͜͝d̷̡̩̘̫̦̺̺͙͈̾̋͒͗̂͠ë̵̛͚̉̈̚ ̶͔͈̑̓͊̏̓̀ë̶̮̯̜̬̖̮̙̠͈́̿́͑̃͠͝͝v̷͉̻̘̦͒̒ͅe̴͙̻͚̠̼̦̪̣͍̭̪̿̀͘r̸̗̜̥͇͆̂̈͑̈͑͛̎̓̕y̸̭̘͓̟̗̮̘͖̱̭͈̎̀ͅͅẃ̶̳̺̮̒̓͊̔̍̇̋̎͆͘͝h̵̗͖̝̥̟͔̞̺̲̭̍͋̇̈̑̽̊̋̽̑̏́͜ͅḛ̸̡͚̔̽̽͘͜ŗ̶̧̫̱͍̝̙̩̙̩̮̈͝ë̸̛͉͚̤͉̎̑̈̃̉̈́̏́̔̇.̴̦̻̫̻͓͎̪͇̜̑́̂̏̏̉.̶̗̗̰͔͙̞̟̩̘̰̳̌̎̈́́̾̑͆̐̐͒̈́͝͝.̶̨̲̯̘̗̣̼̲̙̮̼̅̍̇́͘ ̴̰̆̆̀̀̈́͂y̴̝̩̭͍͈͔̲̩̘̙͉̋ȯ̸̡̧̻̗̼̟̙̤̤̺̝ͅų̷͓̩͌͊̈̉͂̍̉̌̿̿̕ȓ̸̖̐͗̎̎̈́͌͘ ̴̻̭̤̭̗͋͋̈̾ş̶̨̝̝̳̣͙͊̃͆͌͒̚͝i̵̡̙͔͓̬͖̻͍͕͓̭̽͋͝ͅl̵̮̖̤̹̦̗̜̾̔̎̿̃͊̃̿̄͆̚͝͝l̴̢̑͋̅̏̅̓̇͊͆̍̕͠y̶̢̟̦̖͎̳̰͊͑̈͗̏̀̋̈́̀̏̋͝ ̵̢̛̛̲͚̦̲̫̤̬̊̏̋͛̑̍͌̓̌̿̈f̶͕̤̠͕͎̮͇̫̜̠̩̈̍̋͜ơ̷͎̯̳͇̠̺̓̐̌͒͗̅͗ͅụ̵͕̲̯̜̪̯͔͛́͛͊͂̍̃̾̽̕ͅͅr̵̨̛̬͙̪̳̪̭͌͆̈́̚ṱ̷̠̹͉̼̣̳͆̊̐̈́́̈̃̈̍̋̂̚ḩ̸̫̭̘̻͐͂̀̇̐̊͊̈́̍͒̀̌̉ ̶̢̮̜̲̼̩̭̘̬̳͊̊̾̀͗͝͝ͅw̷̧̝̼͎̯̖̤̍͋͋̈́̈̈́̇͂̄͌a̷̰̝̬̱͓͊͒̍̍͌̇͌̈́̑̌̊͘ļ̷̬̩̯͓͙͖̻̈́͐̌̏l̶̨̼̞̠͓̞̺̥̲̬̤̲̓ ̸̜̣̻̘͚̭͔͙̰̐́́̈̆̀ͅw̵͔̙̩̺̯̻͔͕̯̬̐́̈́͆̂̎͒͆͑͛̀̆͐o̶̭͎̠̞̬͔̓n̴̛̛̠̩͙̦͚̤͚̞̻͔̈̒̆̔t̶̨̨͚͕͔̻͕̜̙͎̺͉̺̀͋̓̀̿͋͐̀̕͝ ̴̛͓̹̟͇͓̮̩̼̓͐͂̾s̶̨̡̫̪̙̮̩̒̽̎a̵̠̹̥͌͛̏̽̀̊̅̇̀̂̽̕͘v̴͔̫̙͖͓͇̠̯̋́̈́͑ͅͅe̸̯͉̝̪͛̆̂̈́͠͝ ̴̦̹̻̮̖͇̌̃̕y̴̖̼̘̗̑͑o̴̢̾̐u̷̪͒͑̓.̴̢̛̛̯̠̗̒̓̂̇̏͒͌͝͝.̷̮͆̎̈́̎͛̃͛̅͛̾͘͠.̶̪̻̯͎̽̾̀́̚̚ ̵̨̛̞̯̖̮͖͕͎̻̪̌̍̎̒̾͗̓̃͘͘͜͝W̴̝̩̠̫̞͚̤̝̤̏̐͛͛̔̄Ë̶̝̦̘͓̘̥͇́̂̆͆̚͠'̵͖̱̗̊̀͂͝V̴̪̺́͊̂̍͌̀̏̔͑́͗̇͝Ė̸̖ ̷̡͖̘̲͎̍͗̍̀͊͌͂͜ͅA̴̪̱͌̔̈̑̚͝͠͝L̵͈̹̻͔͒̅ͅȐ̸̛̫̥̰͒̍́͠E̸̪̿̆̾͌̄͘ͅA̸̘̝͈̓̈́D̸̨͈̗͕̮̤̘̎̐̆̊̓͌̉̔̈́͂̚͠Y̸̨͈̻͙̤͍̻̹̲̘̟͑̎͒̈́̽͠ ̵̨͖̟̝̩̟̭̄̏̏̃̚͜ͅB̵̧̭͍͕̬̰̦̙̮͚̌́̈́̇͋̏̀͆̽̌͘ͅR̵̠̾͋̈̏͊͛̅̓̐͘͝͠͝E̸͖̅̅͑̏͐̂͆͜͠A̴̢̘̯͍̯̹̘̥̯̪͖̐̌̊C̷̯̞̻̲̱͌̈̋̆̄͗̿͘̚̚Ḧ̷͓̦͕͓͚́̾̈́͊̐́͝Ę̴̮̺̻̯̦͓̣̫̜̼̹̬̏̄̃̈̀͌͝͠D̸̛̠̦͙͕̗͐̎͌̓̽̽́̿͜ ̸̫͕̂̃̅̈́̀͗́͊̀̾̑͘͠Î̶̛͚͎̗̙̀̇̊͂͐̌́̈́̊̄͠T̶̢̡̲͔̰͎̲̉͋̂.̴̖̈̃̓̅͒̉̈́͠`;

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

    let speed = 30;
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
  window.location.href = 'krow-entry.html'; // adjust filename if needed
});

window.onload = typeWriter;
