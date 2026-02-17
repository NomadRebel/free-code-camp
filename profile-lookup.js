let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


function lookUpProfile(person, property){
  let result;
  for (let i = 0; i<contacts.length; i++){
    if(person==contacts[i].firstName){
      for(let j in contacts[i]){
        if(j===property){
          result = contacts[i][property];
          break;
        }
        else{
          result = "No such property";
        }
      }
      break;  
    }
     
    else{
      result = "No such contact";
     }
   }
   
   return result;
}
//console.log(contacts.firstName);
console.log(lookUpProfile("Sherlock", "likes"));