let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(function(item){ return item.length;});
alert(lengths); // 5,7,6

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(indexItem  );
alert(lengths); // 0:5, 1: 7, 2:6

function indexItem(item, index){ 
    return "" + index + ":" + item.length;
}

const o1 = {name: 'fed', age: 10};
const o2 = {name: 'rrr', age: 70};

if (o1.age > o2.age) {return 1};