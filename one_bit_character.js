// We have two special characters:
// The first character can be represented by one bit 0.
// The second character can be represented by two bits (10 or 11).
// Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.

var isOneBitCharacter = function(bits) {
    let str = "0"
  for (let i = 0; i < bits.length; i ++){
    if(bits[i] === 0) str = "0"
    else {
         str = String(bits[i]) + String(bits[i + 1])
         i ++
        }
  }
  if(str === "0") return true

  return false
    
};