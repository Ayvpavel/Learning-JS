let nime = prompt('Привет! Как тебя зовут?');
while (nime == '' || nime == null) {
  nime = prompt('Привет! Как тебя зовут?');
}

alert(nime + ', добро пожаловать на наш сайт, я загадал число от 1 до 100');

let number = Math.ceil(Math.random() * 100);
let guess = prompt('Какое число я загадал?');
let numberOfGuesses = 0;

while (guess != number) {
  if (guess > number) {
    guess = prompt('Много, попробуй ещё раз!');
    numberOfGuesses = numberOfGuesses + 1;
  }
  if (guess < number) {
    guess = prompt('Мало, попробуй ещё раз');
    numberOfGuesses = numberOfGuesses + 1;
  }
}
alert(
  'Ты угадал! Это число' +
    ' ' +
    number +
    '. Тебе понадобтлось ' +
    numberOfGuesses +
    '  попыток.'
);
