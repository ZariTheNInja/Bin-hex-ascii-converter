var convert = function(src, output, from, to) () {
  switch (from) {
      case "bin":
      document.getElementById(output).innerHTML = to === "bin" ? binToHex(src) : binToAscii(src);
      break;

      case "hex":
        document.getElementById(output).innerHTML = to === "hex" ? hexToBin(src) : hexToAscii(src);
      break;

      case "ascii":
        document.getElementById(output).innerHTML = to === "bin" ? asciiToBin(src) : asciiToHex(src);
      break;
  }
};

var bintohex = function(src) {
    return src;
};

var bintoascii = function(src) {
    return src;
};

var hextobin = function(src) {
    return src;
};

var bintoascii = function(src) {
    return src;
};

var asciitobin = function(src) {
    return src;
};

var asciitohex = function(src) {
    return src;
};
