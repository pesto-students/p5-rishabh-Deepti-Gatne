let obj = {
  age:"John",
  gender:"Doe",
  getFullName: function(age, gender){
      console.log(this.name+" "+this.surname+" "+age+" "+gender);
 }
}
const obj2 = {
  name:"Deepti",
  surname:"Gat"
}
obj.getFullName.call(obj2, 21, "female");
const obj3 = {
  name:"Dipali",
  surname:"kul"
}
obj.getFullName.apply(obj3, [21, "female"]);
const obj4 = {
  name:"Jini",
  surname:"Date"
}
let func = obj.getFullName.bind(obj4, 21, "female");
func();