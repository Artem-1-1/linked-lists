class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}


class LinkedList {
  constructor() {
    this.headList = null;
  }

  append(value) {
    if (this.headList == null) this.prepend(value); 
    else {
      let tmp = this.headList;
      while(tmp.nextNode != null) tmp = tmp.nextNode;
      tmp.nextNode = new Node(value);
    }
  }

  prepend(value) {
    let tmp = null;
    if (this.headList != null) tmp = this.headList;
    this.head = new Node(value);
    this.headList.nextNode = tmp;
  }

  size() {
    let tmp = this.headList;
    let counter = 0;
    while(tmp != null) {
      counter++;
      tmp = tmp.nextNode;
    }
    return counter;
  }

  head() {
    return this.headList;
  }

  tail() {
    let tmp = this.headList;
    while(tmp.nextNode != null) tmp = tmp.nextNode;
    return tmp; 
  }

  at(index) {
    let tmp = this.headList;
    for (let i = 0; i < index; i++) {
      if (tmp == null) return "There is no item for this index."
    }
    return tmp;
  }

  pop() {
    let current = this.headList;
    let previous = null;
    while (current.nextNode != null) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }

  contains(value) {
    let tmp = this.headList;
    while (tmp != null) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }
    return false;
  }
  
  find(value) {
    let tmp = this.headList;
    let index = 0;
    while (tmp != null) {
      if (tmp.value === value) return index;
      tmp.tmp.nextNode;
      index++;
    }
    return null
  }

  toString() {
    let tmp = this.headList;
    let string = "";
    while (tmp != null) {
      string += `(${tmp.value}) -> `;
      tmp = tmp.nextNode;
    }
    return (string += "null");
  }
}