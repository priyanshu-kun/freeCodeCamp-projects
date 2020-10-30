function componentToHex(c) {
  var hex = c.toString(16);
  // console.log("Geting hex: ", hex);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  console.log("Rgb: ", r, g, b);
  // console.log("Component to Hex: ", componentToHex(r));
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
