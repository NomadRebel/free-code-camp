function pyramid(str, rows, bool){
  let final="";
  if(bool==true){
    for(let i=rows; i>=1; i--){
      let space = " ";
      let pyramid = space.repeat((rows-i)) + str.repeat(i*2-1);
      if(i==rows){
        final+= pyramid;
      }
      else{
      final += pyramid+'\n';
      }
    }
    return final;
  }
  else{
    for(let i=1; i<=rows; i++){
      let space = " ";
      let pyramid = space.repeat((rows-i)) + str.repeat(i*2-1);
      
       final+= pyramid+"\n";
      
      // if(i==rows){
      //   break;
      // }
    }
    return "\n"+final;
  }
}


console.log(pyramid("o", 4, false));