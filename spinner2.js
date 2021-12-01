const spinners = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let delay = 0;
for (let spinner of spinners) {
  setTimeout(() => {
    if (spinner !== '\n') { spinner += '   '}
    process.stdout.write('\r' + spinner)
  }, delay);
  delay += 50;  
}