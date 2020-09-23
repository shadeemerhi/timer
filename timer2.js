const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


console.log('Enter a timer value between 1 and 9!');
stdin.on('data', (key) => {

  // Exiting the program if the user input is ctrl + C
  if (key === '\u0003') {
    console.log();
    console.log('Thanks for using me! Caio!');
    process.exit();
  }

  // Beeping if the user input is 'b'
  if(key === 'b') {
    process.stdout.write('\x07');
  } else {
    // Turnig the input into an integer
    key = parseInt(key);
    // Error handling
    if(Number.isNaN(key) || key < 0 || key  > 9) {
      console.log('Invalid input. Please enter a value between 1 and 9');
    } else {
      // Creating a setTimeout function using the valid user input as the delay
      console.log('Setting timer for', key, 'seconds');
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write('\x07');
        process.stdout.write('\x07');
        console.log('TIMER DONE!');
      }, key*1000);
    }
  }
});