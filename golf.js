const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes){
    console.log(par);
    console.log(strokes);

  if (strokes==1){
    return "Hole-in-one!";
  }
  else if (strokes<=(par - 2)){
    return "Eagle";
  }
  else if (strokes==par-1){
    return "Birdie";
  }
  else {
    return "try";
  }
}

console.log(golfScore(3, 2))