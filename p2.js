const bfs = (board, y, x, count) => {
  let iLen = board.length
  let jLen = board[0].length
  while (y + count < iLen && x + count < jLen) {
    for(let i = x; i <= x+count; i++) {
      if(board[y+count][i] == 0) return Math.pow(count, 2)
    }
    for(let j = y; j <= y+count; j++) {
      if(board[j][x+count] == 0) return Math.pow(count, 2)
    }
    count = count + 1
  }
  return Math.pow(count, 2)
}

function solution(board)
{
  let answer = 0;
  let iLen = board.length
  let jLen = board[0].length
  for (let i = 0; i < iLen; i++) {
    for(let j = 0; j < jLen; j++) {
      if(board[i][j] === 1) {
        let result = bfs(board, i, j, 1)
        if(result > answer) answer = result
      }
    }
  }

  return answer;
}

console.log(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]))
console.log(solution([[0,0,1,1],[1,1,1,1]]))
