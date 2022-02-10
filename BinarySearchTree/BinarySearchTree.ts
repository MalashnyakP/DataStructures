class BinaryTreeNode<T> {
  public left: BinaryTreeNode<T>;
  public right: BinaryTreeNode<T>;
  constructor(public value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree<T> {
  public root: BinaryTreeNode<T>;
  constructor() {
    this.root = null;
  }

  public insert(value: T) {
    const newNode = new BinaryTreeNode<T>(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;
    while (curr) {
      if (value === curr.value) return null;
      if (value < curr.value) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      }
    }
  }

  public remove(value: T) {
    this.root = this.removeRec(this.root, value);
  }

  private removeRec(root: BinaryTreeNode<T>, value: T): BinaryTreeNode<T> {
    if (root === null) return root;
    if (value < root.value) {
      root.left = this.removeRec(root.left, value);
    } else if (value > root.value) {
      root.right = this.removeRec(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      root.value = this.minV(root.right);
      root.right = this.removeRec(root.right, root.value);
    }

    return root;
  }

  private minV(root: BinaryTreeNode<T>) {
    let minV = root.value;
    while (root.left) {
      minV = root.left.value;
      root = root.left;
    }
    return minV;
  }

  public find(value: T): BinaryTreeNode<T> {
    if (!this.root) return null;

    let curr = this.root;
    let found = null;
    while (curr && !found) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        found = curr;
      }
    }

    return found;
  }

  public print() {
    const output = this.inorder(this.root);
    return output;
  }

  public inorder(root: BinaryTreeNode<T>) {
    let output = "";
    if (root) {
      output += `${root.value} `;
      output += this.inorder(root.left);
      output += this.inorder(root.right);
    }
    return output;
  }
}
