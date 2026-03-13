function penceToPounds(priceInPence) {
  
  if (typeof priceInPence !== "string" || !priceInPence.endsWith("p")) {
    throw new Error("Price must be a string like '399p'");
  } 

  const digits = priceInPence.slice(0, -1);
  if (digits.length === 0) {
    throw new Error("Price must be a string like '399p'");
  }

  for (let i = 0; i < digits.length; i++) {
    const char = digits[i];
    if (char < "0" || char > "9") {
      throw new Error("Price must be a string like '399p'");
    }
  }

  if (Number.isNaN(Number(digits))) {
    throw new Error("Price must be a string like '399p'");
  }

  const pence = Number(digits);
  const pounds = Math.floor(pence / 100);
  const remainder = String(pence % 100).padStart(2, "0");

  return "£" + pounds + "." + remainder;
}
// penceToPounds("399p")=>£3.99



function validatePenceString(priceInPence) {
  if (typeof priceInPence !== "string" || !priceInPence.endsWith("p")) {
    throw new Error("Price must be a string like '399p'");
  }
  const digits = priceInPence.slice(0, -1);
  if (digits.length === 0) {
    throw new Error("Price must be a string like '399p'");
  }

  for (let i = 0; i < digits.length; i++) {
    const char = digits[i];
    if (char < "0" || char > "9") {
      throw new Error("Price must be a string like '399p'");
    }
  }
  if (Number.isNaN(Number(digits))) {
    throw new Error("Price must be a string like '399p'");
  }
}

function parsePence(priceInPence) {
  return Number(priceInPence.slice(0, -1));
}

function formatPoundsFromPence(pence) {
  const pounds = Math.floor(pence / 100);
  const remainder = String(pence % 100).padStart(2, "0");
  return "£" + pounds + "." + remainder;
}

function penceToPoundsModular(priceInPence) {
  validatePenceString(priceInPence);
  const pence = parsePence(priceInPence);
  return formatPoundsFromPence(pence);
}
console.log(penceToPoundsModular("399p"));// £3.99
