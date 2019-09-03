function solution(s) {
  let answer = 0
  if(!(s.includes('z') || s.includes('a'))) return answer
  const arr = s.split('')
    .filter((v) => (v === 'a' || v === 'z'))
    .reduce((p, v) => {
      if(p !== v) answer++
      return v
    })
  return answer
}

console.log(solution('sdfdsf'))
