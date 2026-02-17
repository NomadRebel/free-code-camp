function printSquare(n) {
  let output = "";
  
  for (let i = 0; i < n; i++) {      // Outer loop (Rows)
    for (let j = 0; j < i; j++) {  // Inner loop (Columns)
      output += "* ";
    }
    output += "\n"; // Add a new line after finishing a row
  }
  
  console.log(output);
}

printSquare(5);