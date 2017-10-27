result = function () {
 wordHolder = document.getElementById('hold');
 correct = document.createElement('ul');

 for (var i = 0; i < word.length; i++) {
   correct.setAttribute('id', 'my-word');
   guess = document.createElement('li');
   guess.setAttribute('class', 'guess');
   if (word[i] === "-") {
     guess.innerHTML = "-";
     space = 1;
   } else {
     guess.innerHTML = "_";
   }

   geusses.push(guess);
   wordHolder.appendChild(correct);
   correct.appendChild(guess);
 }
}
