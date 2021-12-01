const spinners = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let delay = 0;
for (let line of spinners) {
  setTimeout(() => {
    if (line !== '\n') { line += '   '}
    process.stdout.write('\r' + line)
  }, delay);
  delay += 50;  
}