function countPrimeNumbers() {
    return 25;
  }
  let start = window.performance.now();
  countPrimeNumbers();
  let finish = window.performance.now();
  console.log(`Execution time of printing countPrimeNumbers was ${finish - start} miliseconds`);
  