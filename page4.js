let i = 0;
const output = document.getElementById('text');
const skipBtn = document.getElementById('skipButton');
const nextBtn = document.getElementById('nextButton');

const text = `Heyo, it's Lydia again... The situation here has significantly gotten worse. Oh do I regret the action taken by my father, the dunce of a man he was. We, members of the Pride family Pride ourselves in our position of power. Our balance achieved in our strength over Humility. And how much better we where. Yet his ass (oh shit artillery), chose to betray her, Humility I mean. It spread like a shockwave across our House. Dividing us into factions. Humility was the one, who humbly lost to Pride, she was our benifactor. She benifited, we benifited, and the worst part of it all? Now no one does. We have men dying on both sides, I've seen horrors commited by sins no one should be proud of. Crimes against demonkind, And so... so much more... My uncle has chosen to lead the revolt against my Dad. He finds himself winning. Our men being burned alive, right past the front lines, on Mount Ayr. We can see it, the torchure our family is being put through, The ones who sided with us atleast. We watch as our enemy gains power from the pride of success, and our side demoralizes. J̵̝̈́̈́͝ŭ̵͈̽̀s̵͚̖̋̉̉t̵̫̗̀̏̈ ̸̺̭̼͑y̶̧͚͆e̴̳̤̝͊͝s̸̹͐t̸̮̘̺̚e̶͓̫͒̅͝r̴͛͌͜d̶̼̫͐͛͝a̵͙̥̅̾̀y̸̝̦͒͛ ̶͈̀̅I̴͈͗̈́̓ ̴͕̥̜̂͝s̷͚͍͂̓͛ȃ̸̱w̶̯̋̕͠ ̵̨̈́͊͠m̷͙̘̞͆́͆ÿ̶̫̪́̒ ̶̝̗͇̽͛̚ṉ̵̂̾̈i̸͓̳͗̋̉ę̸̢̮̓c̶̠͑ḙ̸͓̪̆̾,̷̻͔̊̈́̈ ̴̰̈́͜b̸̰̉͑ȇ̶͎́ͅį̸͙̊͒n̶̥̜͛͐͂g̵͙̳̃̈́̑ ̸̤̖̓͑*̸̛̞̭̲̽&̷͔̆^̶̨̮̱̓%̵̱̼̾́̂ ̶̤̌̿ǎ̴͕̝̌̎n̵͚͖̹̓̚d̸̮̳͠ ̷̤̍̐t̶̛͈̣̠͗o̵̪͋͘ṛ̶̦̯̿͗ṅ̴̨͒̽ ̸͉̆̐͝t̸͙͍̫̀o̴̟̦̍̋ ̵̟̤̓s̴̰̼̳̆̀h̵̞̻̆̂ṛ̵̊́̀e̷͚͌ḑ̵̣̋́͛s̵̔̈́͘͜ ̶̪̩́̀b̴̠̈́̈́y̴͇̐̂͂ ̷̯̃̔̒t̵̻̞̒h̴͙͔͊͗ẻ̷̳͐̿ ̴̯̽͒̆m̵̹̑̈̐ë̷͈̭ͅn̸̬͑ ̵̞̻́̒͑o̵̭̅̀f̷̦̜̫̍̌̋ ̴͇̟̦͝ẗ̶̖́̄͘h̵̨̬̺́̊͌e̶͙͉̲̾͛͊ ̷͓̂̌̾e̵̲̦̭̎̆̚n̷̲̟͗e̴̡̥̹͗m̴̱̍̆͠y̶̢̪̰̌̏̉ ̴̮͓̐s̶͖͕̟̓ḯ̶̛̩̗͔d̶̜̓̈́͘e̸͕̍. 
It scares me... someone... anyone? 
If our name is gone 
Will our will continue? 
And will we survive? 
No... I doubt we will 
Thus the end of our family line 
Death to those against us we scream 
Encumber those who fight us And to those who betrayed us 
Tartarus is the only objective waiting you 
Home, is ours... I think?`;

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
  window.location.href = 'soon.html'; // adjust filename if needed
});

window.onload = typeWriter;
