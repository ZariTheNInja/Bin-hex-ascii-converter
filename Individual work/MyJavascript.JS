function bintohex(){
number= document.getElementById('bin').value;
var hexa = parseInt(number, 2).toString(16).toUpperCase();
document.getElementById('hex').value =hexa
}
function hextobin(){
  number= document.getElementById('hex').value;
  var hexa = parseInt(number, 16).toString(2).toUpperCase();
  document.getElementById('bin').value =hexa
}
function hextoascii(){
  var hex = document.getElementById('hex').value.toString();//force conversion
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  document.getElementById('ascii').value= str
}
function asciitohex() {
  var arr = [];
  var str = document.getElementById('ascii').value;
  for (var i = 0, l = str.length; i < l; i ++) {
    var hex = Number(str.charCodeAt(i)).toString(16);
    arr.push(hex);
    document.getElementById('hex').value= arr
  }
}
