function isPrime(n){
  if(n < 2) return false
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0) return false
  }
  return true
}

// TODO sieve prime

function isPrimeFermart(n, iterations = 5) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0) return false;

    for (let i = 0; i < iterations; i++) {
        // Pick a random integer a in [2, n-2]
        let a = 2 + Math.floor(Math.random() * (n - 3));

        // Fermat test: if a^(n-1) % n != 1, n is composite
        if (modPow(a, n - 1, n) !== 1) {
            return false; // definitely composite
        }
    }

    return true; // probably prime

    function modPow(base, exponent, mod) {
    base = base % mod
    let result = 1n

    while (exponent > 0n) {
      if (exponent % 2n === 1n) {
        result = (result * base) % mod
      }
      exponent = exponent / 2n
      base = (base * base) % mod
    }

    return result
  }
}


function arrayEqual(arr1, arr2){
  if(arr1.length != arr2.length) return false
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] != arr2[i]) return false
  }
  return true
}

function isPandigital(n){
  let numOccurences = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  let str = n.toString()
  for(let char of str){
    if(char === "0") return false
    numOccurences[Number(char - 1)] += 1
  }
  
  for(let num of numOccurences){
    if(num != 1) return false
  }
  return true
}

// function primeDivisors(n){
//   let primeDivisors = []
//   let j = 0
//   for(let i = 2; i < n/2; i++){
//     if(isPrime(i)){
//       let k = 1
//       while(true) {
//         if(n % (i**k) === 0){
//           k++
//         }else{
//           break
//         }
//       }
//       //console.log(`${i} divides ${n}, ${k-1} times `)
//       primeDivisors[j] = k-1
//       j++
//     }
//   }
//   return primeDivisors
// }

function nthPermutation(str, n) {
  const chars = str.split("");
  const len = chars.length;

  // compute factorials
  const fact = [1];
  for (let i = 1; i <= len; i++) fact[i] = fact[i - 1] * i;

  if (n < 0 || n >= fact[len]) {
    throw new RangeError("n out of range");
  }

  let result = "";
  let k = n;

  for (let i = len; i > 0; i--) {
    const f = fact[i - 1];
    const index = Math.floor(k / f);
    k = k % f;

    result += chars[index];
    chars.splice(index, 1);
  }

  return result;
}
function getPrimes(n) {
    if (n < 2) return [];

    const size = (n >> 1) + 1 // only odds
    const sieve = new Uint8Array(size)

    const limit = Math.floor(Math.sqrt(n))

    for (let p = 3; p <= limit; p += 2) {
      if (!sieve[p >> 1]) {
        // start at p*p, skip even multiples
        for (let m = p * p; m <= n; m += p << 1) {
          sieve[m >> 1] = 1
        }
      }
    }

    const result = [2]
    for (let i = 3; i <= n; i += 2) {
      if (!sieve[i >> 1]) result.push(i)
    }

    return result
}

export default {isPrime, isPrimeFermart, arrayEqual, isPandigital, nthPermutation, getPrimes}