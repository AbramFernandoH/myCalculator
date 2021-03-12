const calcScreen = document.querySelector('#calcScreen');
const calcOutput = document.querySelector('#calcOutput');
const clearBtn = document.querySelector('.clear');
const btnNum = document.querySelectorAll('.btnNum');
const backspace = document.querySelector('.backspace');
const btnOperator = document.querySelectorAll('.btnOperator');
const btnCalculate = document.querySelector('.equal');
const btnDecimal = document.querySelector('.decimal');

for (let btn of btnNum) {
  btn.addEventListener('click', function(){
    calcOutput.value += btn.innerText;
  })
}

btnDecimal.addEventListener('click', function(){
  calcOutput.value += btnDecimal.innerText;
})

backspace.addEventListener('click', function(){
  calcOutput.value = (calcOutput.value).slice(0, -1);
})

clearBtn.addEventListener('click', function(){
  calcScreen.value = '';
  calcOutput.value = '';
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

for (let operator of btnOperator) {
  operator.addEventListener('click', function(){
    calcScreen.value += (calcOutput.value += this.innerText);
    calcOutput.value = '';
    let operatorAction = operator.dataset.action;
    if(operatorAction === 'multiply'){
      btnCalculate.addEventListener('click', function(){
        let nums = calcScreen.value += calcOutput.value;
        let numbers = nums.split('X');
        calcScreen.value = '';
        let multiply = parseFloat(numbers[0]) * parseFloat(numbers[1]);
        calcOutput.value = '';
        calcOutput.value += multiply;
      })
    } else if(operatorAction === 'divide'){
      btnCalculate.addEventListener('click', function(){
        let nums = calcScreen.value += calcOutput.value;
        let numbers = nums.split('÷');
        calcScreen.value = '';
        let divide = parseFloat(numbers[0]) / parseFloat(numbers[1]);
        calcOutput.value = '';
        calcOutput.value += divide;
      })
    } else if(operatorAction === 'add'){

    } else if(operatorAction === 'subtract'){

    }
  })
}

