let cipherText = [..."YZOGUT QGMORTZ MTRHTILS"];
let plainText = "";

for (let [index, value] of cipherText.entries()) {
  plainText += index % 2 === 0 ? value : "";
}

console.log(plainText);
