const addChar = (i, str) => str+str.substring(i,i+1)

const isPelindrome = (str, index) => {
  const len = str.length
  const center = Math.floor(len/2)
  for (let i = index; i < center; i++) {
    if(str.substring(i,i+1) !== str.substring(len-i-1,len-i)) return false
  }
  return true
}

function solution(plain) {
  let answer = 0
  let len = plain.length
  let str = plain

  for (let j = 0; j < len; j++) {
    if(isPelindrome(str, j)) {
      answer = str.length
      break
    }
    str = addChar(j, str)
  }

  return answer
}

console.log(solution('abab'))
