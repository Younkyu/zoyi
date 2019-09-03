function Node (i) {
  this.num = i
  this.parent = null
  this.child = []
  this.sp = 0
}

const findKingNode = (list) => {
  return list.find(v => v.parent === null)
}

const findOrCreateNode = (i, list) => {
  const node = list.find(v => v.num === i)
  if(node === undefined) {
    const newNode = new Node(i)
    list.push(newNode)
    return newNode
  } else {
    return node
  }
}

let max = 0;

const bfs = (node) => {
  let result = 0
  if(node.child.length === 0) {
    max += 1
    node.sp = 1
    return 1
  }
  else {
    node.child.forEach(v => {
      result += bfs(v)
    })
  }
  max += result
  node.sp = result
  return result
}

function solution(total_sp, skills) {
  let nodeList = [];
  skills.forEach(v => {
    const parent = findOrCreateNode(v[0], nodeList)
    const child = findOrCreateNode(v[1], nodeList)
    child.parent = parent
    parent.child = [...parent.child, child]
  })
  const kingNode = findKingNode(nodeList)
  bfs(kingNode)
  nodeList.sort((a, b) => b.sp - a.sp)
  return nodeList.map(v => v.sp * (total_sp/max));
}

console.log(solution(121, [[1, 2], [1, 3], [3, 6], [3, 4], [3, 5]]))
