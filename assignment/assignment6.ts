/*Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself.

Examples :
Input: n = 7
Output: true
Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.

Input: n = 25
Output: false
Explanation: 25 has more than two divisors: 1, 5, and 25, so it is not a prime number.

Input: n = 1
Output: false
Explanation: 1 has only one divisor (1 itself), which is not sufficient for it to be considered
prime. */









function isPrime(n:number): boolean {
    if(n<=1) return false ;
    if(n == 2) return true ;
    if (n%2===0) return false;
    for (let i = 3; i<= Math.sqrt(n); i+=2 ){
        if(n%i==0){
            return false
        }

    }
     return true;
}

console.log(isPrime(1))
console.log(isPrime(27))
console.log(isPrime(7))
console.log(isPrime(2))