let userInput = process.argv.slice(2);

const alarm = userInput.forEach(input => {
  if (input === null) {
    return;
  } else if (input < 0) {
    return;
  } else if (input != input) {
    return;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, input * 1000);
});