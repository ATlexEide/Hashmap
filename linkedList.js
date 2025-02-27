export class LinkedList {
  length = 0;
  head = null;
  tail = null;
  next = null;
  constructor() {}
  append(node) {
    if (typeof node.key !== "string") return
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.next = node;
      this.length++;
      return;
    }
    let tmp = this.next;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    tmp.next = node;
    this.tail = node;
    this.length++;
  }
  prepend(node) {
    if (typeof node !== "string") return;
    node.next = this.next;
    this.head = node;
    this.next = node;
    this.length++;
  }
  get size() {
    return this.length;
  }
  get head() {
    return this.next;
  }
  at(index) {
    if (index > this.length - 1 || index < 0) {
      return "out of bounds";
    }
    let tmp = this.next;
    let x = 0;
    while (x !== index) {
      tmp = tmp.next;
      x++;
    }
    return tmp;
  }
  pop() {
    let secondToLast = this.at(this.length - 2);
    secondToLast.next = null;
    this.tail = secondToLast;
    this.length--;
  }
  hasValue(value) {
    let tmp = this.next;
    while (tmp !== null && tmp.key !== value) {
      tmp = tmp.next;
    }
    if (!tmp) return false;
    if (tmp.key === value) return true;
  }
  hasKey(key) {
    let tmp = this.next;
    while (tmp !== null && tmp.key !== key) {
      tmp = tmp.next;
    }
    if (!tmp) return false;
    if (tmp.key === key) return true;
  }
  find(value) {
    if (this.hasValue(value) || this.hasKey(value)) {
      let tmp = this.next;
      while (tmp !== null && tmp.key !== value && tmp.value !== value) {
        tmp = tmp.next;
      }
      return tmp;
    }
  }
  toString() {
    let string = "";
    let tmp = this.next;
    while (tmp !== null) {
      string += `( ${tmp.key} ) -> `;
      tmp = tmp.next;
    }
    string += "(null)";
    return string;
  }
}

export class Node {
  constructor(key, value = "no value") {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
