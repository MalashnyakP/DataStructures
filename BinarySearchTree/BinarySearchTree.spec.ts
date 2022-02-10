import { BinarySearchTree } from "./BinarySearchTree";

describe("#find", () => {
  test("find value in empty tree", () => {
    const tree = new BinarySearchTree<number>();
    expect(tree.find(1)).toBeNull();
  });

  test("find value stored in root", () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(1);
    const found = tree.find(1).value;
    expect(found).toBe(1);
  });

  test("find value in left subtree", () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    const found = tree.find(1).value;
    expect(found).toBe(1);
  });

  test("find value in right subtree", () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    const found = tree.find(3).value;
    expect(found).toBe(3);
  });
});

describe("#insert", () => {
  test("insert node into empty tree", () => {
    const tree = new BinarySearchTree<string>();
    tree.insert("a");
    expect(tree.root.value).toBe("a");
  });

  test("insert into left subtree", () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(3);
    tree.insert(2);
    tree.insert(1);
    expect(tree.root.left.left.value).toBe(1);
  });

  test("insert into right subtree", () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    expect(tree.root.right.right.value).toBe(3);
  });

  test("insert already existing node", () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(1);

    expect(tree.insert(1)).toBeNull();
  });
});

describe("#remove", () => {
  test("remove from empty tree", () => {
    const tree = new BinarySearchTree<number>();
    tree.remove(1);
    expect(tree.root).toBeNull();
  });

  test("remove root", () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.remove(2);

    expect(tree.root.value).toBe(3);
  });

  test("remove node without right child", () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(9);
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(4);
    tree.insert(2);
    tree.insert(6);

    tree.remove(7);
    expect(tree.find(7)).toBeNull();
  });

  test("remove node with two or more childs", () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(9);
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(4);
    tree.insert(2);
    tree.insert(6);
    tree.insert(8);

    tree.remove(5);
    expect(tree.find(5)).toBeNull();
  });
});

describe("#print", () => {
  test("inorder print", () => {
    const tree = new BinarySearchTree<number>();
    tree.insert(3);
    tree.insert(2);
    tree.insert(1);
    const output = tree.print();

    expect(output).toBe("3 2 1 ");
  });
});
