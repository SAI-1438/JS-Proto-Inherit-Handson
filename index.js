// Q1.Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.
const parent = {
    Name:"saikiran",
    Age:"age-25",
    person : function abc(){
        console.log(this.Name+" "+this.Age);
    }
}
const child = {
    __proto__: parent
}
child.person();

// Q2.Write code to explain prototype chaining.
const obj1 = {
    name:"saikiran"
}
const obj2 = {
    __proto__:obj1,
    age:25
}
const obj3 = {
    __proto__:obj2
}
console.log(obj3.name)
console.log(obj3.age)

// Q3.Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.
const Add = {
    sum : function(arr){
        let ans = 0;
        for(let i=0; i<arr.length; i++){
            ans += arr[i];
        }
        console.log(ans);
    }
}
Add.sum([1,2,3])

// Q4.Write a JavaScript function to retrieve all the names of object's own and inherited properties.
const user = {
    name: 'Alex',
    age: 30
  }
  
  const props = Object.getOwnPropertyNames(user)
  
  console.log(props);
