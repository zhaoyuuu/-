const arr = [1,2,3]

const cloneArr = JSON.parse(JSON.stringify(arr))
console.log(cloneArr instanceof Array);  // object   问题：改变了构造函数（Array => Object）