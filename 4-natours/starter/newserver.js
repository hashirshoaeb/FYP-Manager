class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return true;
    } else {
      let current = this.root;
      while (true) {
        if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return true;
          } else {
            current = current.right;
          }
        } else if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return true;
          } else {
            current = current.left;
          }
        } else {
          return false;
        }
      }
    }
  }
}

var tree = new BinarySearchTree();
// console.log(tree.insert(6));

str = 'abacaacbbbcdd';
value = [];
count = [];
str = str.split('');

for (let i of str) {
  if (!value.includes(i)) {
    value.push(i);
  }
}
console.log(value);

for (let i of value) {
  counter = 0;
  for (let j of str) {
    if (i === j) {
      counter++;
    }
  }
  count.push(counter);
}
console.log(count);

output = 0;
for (let i of count) {
  var temp = i;
  while (!tree.insert(temp)) {
    temp--;
    output++;
  }
}
console.log(output);
