const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key > 0 && key <= 9) {
    process.stdout.write(`Timer set - ${key} seconds! \n`);
    setTimeout(() => {
      process.stdout.write(`Beep! It has been ${key} seconds, beep! \n`);
    }, 1000 * key);
  }
  if (key === 'b') {
    process.stdout.write("Beep! \n");
  }
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao! \n");
    process.exit();
  }
  
});



