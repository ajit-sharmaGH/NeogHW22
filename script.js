 var val = 3;

 function Name() {




     var val = 10;
     console.log(val);
 }
 Name();

 const obj = {
     name: "Ajit",
     lastName: "Sharma "
 };
 console.log(`${obj.name + obj.lastName}`);
 //nullish coalescing operator and logical || (or) operator

 function chargeAmount() {
     return 10;
 }


 let message = chargeAmount() || "we are here to learn";
 console.log(message);