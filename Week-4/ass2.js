
function Person(name){
    this.name=name;
}

Person.prototype.printname=function()
{
    return(this.name);

}

function Teacher(name,subject)
{
    Person.call(this,name);
    this.subject=subject;
}
Object.setPrototypeOf(Teacher.prototype,Person.prototype);

Teacher.prototype.printsub=function(){
    console.log(this.printname() + " is now teaching " +this.subject);
}
const t=new Teacher("Deepti","TOC");

t.printsub();
