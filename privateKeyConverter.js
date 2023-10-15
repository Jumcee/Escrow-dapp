const privateKeyHex = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f";
const privateKeyBytes = Buffer.from(privateKeyHex.slice(2), "hex");

console.log(privateKeyBytes);
