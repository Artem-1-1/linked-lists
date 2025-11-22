import LinkedList from "./index.js";

const linkedList = new LinkedList();

linkedList.prepend('dog');
linkedList.append('cat');
linkedList.append('bird');
console.log(linkedList.size());
console.log(linkedList.toString());
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(2));
console.log(linkedList.contains('dog'));
console.log(linkedList.find('cat'));
linkedList.pop();
linkedList.prepend('lion');
console.log(linkedList.toString());