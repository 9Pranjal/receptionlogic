let visitor;
let purpose;

console.log("===== welcome to the reception =====");
reception: do{
  visitor = prompt("enter your name:");
  if(!visitor) {
    console.log("enter valid name and try again");
    continue;
  }
  if(visitor.toLowerCase() == "exit"){
    console.log("have a good day");
    break;
  }
  while (true){
    purpose = prompt("please enter the purpose of your visit  : 1.meeting  2.delivery  3.interview):");

    if(purpose.toLowerCase() == "meeting" || purpose.toLowerCase() == "delivery" || purpose.toLowerCase() == "interview"){
      console.log(`You may proceed with ${purpose}.`);
      break; 
    } 
    else{
      console.log("invalid purpose. please enter a valid input");
      continue; 
    }
  }
}
while (true);