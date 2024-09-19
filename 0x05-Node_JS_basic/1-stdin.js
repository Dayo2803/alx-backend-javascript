process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const usrInput = process.stdin.read();

  if (usrInput) {
    process.stdout.write(`Your name is: ${usrInput}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
