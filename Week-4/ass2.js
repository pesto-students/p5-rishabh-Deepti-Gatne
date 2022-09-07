let person = {
    name: "abc",
    dname:  (name1)=> {
        return  name1;
    }
};

let teacher = Object.create(person);

teacher.teach =  (subject) =>{
        return  subject;
}


console.log(teacher.dname("Deepti") +" is now teahing "+ teacher.teach("TOC"));

