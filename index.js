function fib(n){
  return n <= 1 ? n : fib(n-1) + fib(n-2)
}

console.log(fib(5))

function theme(){
  console.log("theme")
}