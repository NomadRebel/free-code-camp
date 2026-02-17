function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

function getConsonantCount(sentence){
    let count=0;
    let consonants = ["b","c","d","f","g","h","j","k","l","m","n",
        "p","q","r","s","t","v","w","x","y","z"];
    let lowercase = sentence.toLowerCase();
    let nospace = lowercase.replaceAll(" ","");
    for(let char of lowercase){
        if(consonants.includes(char)){
            console.log(char);
            count++;
        }
        }
    return count;
};


function getPunctuationCount(sentence){
    let count = 0;
    let include = ["a","b","c","d","e","f","g","h","i",
        "j","k","l","m","n","o","p","q","r","s","t","u",
        "v","w","x","y","z"];
    let lowercase = sentence.toLowerCase();
    let nospace= lowercase.replaceAll(" ","");
    console.log(nospace);
    for(let char of nospace){
        if(include.includes(char)){
            count;
        }
        else{
            console.log(char);
            count++;
        }
    }
    return count;    
}
function getPunctuationCounts(sentence){
    let count = 0;
    let include = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
    let lowercase = sentence.toLowerCase();
        for(let char of lowercase){
        if(include.includes(char)){
            count;
        }
        else{
            count++;
        }
    }
    console.log(typeof(count));
    return count;    
}

function getWordCount(sentence){
    const trim = sentence.trim();
    console.log(trim);
    if (trim == " " || trim ==""){
        return 0;
    }
    const newArr = sentence.split(" ");
    return newArr.length;
}
// console.log(getVowelCount("Apples are tasty fruits"));    
// console.log(getConsonantCount("Coding is fun"));
//console.log(getPunctuationCounts("What????!"));
console.log(getWordCount("  "));

