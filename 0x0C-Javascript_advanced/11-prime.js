function countPrimeNumbers() {
    return 25;
  }
  let start = window.performance.now();
  let i = 0;
  while(i < 100) {
    console.log(countPrimeNumbers());
    i++;
  }
  let finish = window.performance.now();
  console.log(`Execution time of calculating prime numbers 100 times was ${finish - start} miliseconds`);
  