import LinkedList from "./index.js";

const linkedList = new LinkedList();

linkedList.prepend('dog');
linkedList.append('cat');
linkedList.append('bird');
console.log(linkedList.size());
console.log(linkedList.toString());