//Итеративно

function hanoiIterative(n) {
    const source = [];
    const auxiliary = [];
    const destination = [];
    let totalMoves = Math.pow(2, n) - 1;
  
    if (n % 2 === 0) {
      [auxiliary, destination] = [destination, auxiliary];
    }
  
    for (let move = 1; move <= totalMoves; move++) {
      if (move % 3 === 1) {
        moveDisk(source, destination);
      } else if (move % 3 === 2) {
        moveDisk(source, auxiliary);
      } else {
        moveDisk(auxiliary, destination);
      }
  
      printState(source, auxiliary, destination); // Опционально: вывод текущего состояния стержней
    }
  }
  
  function moveDisk(source, destination) {
    const disk = source.pop();
    destination.push(disk);
  }
  
  function printState(source, auxiliary, destination) {
    console.log("Source:", source);
    console.log("Auxiliary:", auxiliary);
    console.log("Destination:", destination);
    console.log("------------------");
  }
  hanoiIterative(3);
  ///Рекурсивно

  function hanoiRecursive(n, source, auxiliary, destination) {
    if (n === 1) {
      moveDisk(source, destination);
      printState(source, auxiliary, destination); 
    } else {
      hanoiRecursive(n - 1, source, destination, auxiliary);
      moveDisk(source, destination);
      printState(source, auxiliary, destination); 
      hanoiRecursive(n - 1, auxiliary, source, destination);
    }
  }
  
  function moveDisk(source, destination) {
    const disk = source.pop();
    destination.push(disk);
  }
  
  function printState(source, auxiliary, destination) {
    console.log("Source:", source);
    console.log("Auxiliary:", auxiliary);
    console.log("Destination:", destination);
    console.log("------------------");
  }
  
 
  const n = 3;
  const source = Array.from({ length: n }, (_, i) => n - i);
  const auxiliary = [];
  const destination = [];
  hanoiRecursive(n, source, auxiliary, destination);
  