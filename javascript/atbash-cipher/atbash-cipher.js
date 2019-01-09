export function encode(code , alphabet = "abcdefghijklmnopqrstuvwxyz"){
  let mirrorCode = ""
  code = code.toLowerCase()
  for(let i = 0; i<code.length; i++){
    if(alphabet.indexOf(code[i]) !== -1){
      mirrorCode += alphabet[(alphabet.length - 1) -alphabet.indexOf(code[i])]
    }
    else if (code[i] === " " || code[i] === "," || code[i] === "."){
      mirrorCode += ""
    }
    else{
      mirrorCode += code[i]
    }
  }
  return mirrorCode.length >= 5 ? mirrorCode.match(/.{1,5}/g).join(" ") : mirrorCode
}

//Input string
// Return string but with letters reversed a - z z-a
//1. Loop through code
//create empty string
//2. if code exists within alphabet find it's reverse position and add it to our empty string
//subtract index of code letter from end of alpbhabet
//3. if mirrocode length is larger or equal to five split it into five lenght string chucks
