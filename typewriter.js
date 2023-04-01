const sentence = "Hello there from Lighthouse Labs";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); 
  }, delay);
  delay += 50 //increase delay by 50ms
};

setTimeout(() => {
  console.log(); //prints newline after the animation is finished.
}, delay);