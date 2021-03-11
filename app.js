const calcScreen = document.querySelector('#calcScreen');
const clearBtn = document.querySelector('.clear');
const btnNum = document.querySelectorAll('.btnNum');
const backspace = document.querySelector('.backspace');

for (let btn of btnNum) {
  btn.addEventListener('click', function(){
    calcScreen.value += btn.innerText;
  })
}

backspace.addEventListener('click', function(){
  calcScreen.value = (calcScreen.value).slice(0, -1);
})

clearBtn.addEventListener('click', function(){
  calcScreen.value = '';
})

document.addEventListener('keydown', function(e){
  switch (e.code) {
    case 'Digit1':
      calcScreen.value += '1';
      break;
    case 'Digit2':
      calcScreen.value += '2';
      break;
    case 'Digit3':
      calcScreen.value += '3';
      break;
    case 'Digit4':
      calcScreen.value += '4';
      break;
    case 'Digit5':
      calcScreen.value += '5';
      break;
    case 'Digit6':
      calcScreen.value += '6';
      break;
    case 'Digit7':
      calcScreen.value += '7';
      break;
    case 'Digit8':
      calcScreen.value += '8';
      break;
    case 'Digit9':
      calcScreen.value += '9';
      break;
    case 'Digit0':
      calcScreen.value += '0';
      break;
    case 'Slash':
      calcScreen.value += '/';
      break;
    case 'KeyX':
      calcScreen.value += 'X';
      break;
    case 'Period':
      calcScreen.value += '.';
      break;
    case 'Minus':
      calcScreen.value += '-';
      break;
    case 'Equal':
      calcScreen.value += '+';
      break;
    default:
      break;
  }
})