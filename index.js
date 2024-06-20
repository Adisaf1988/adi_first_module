console.log("This is my first module");
function adiModule() {
    const adi = {name:"Adi", age:36, state:"israel"}
    if (adi.age>30) {
        console.log("Hi Adi, your age is over 30");
    }else{
        console.log("Hi Adi, your age is less than 30");
    }
}

adiModule.export={adiModule}