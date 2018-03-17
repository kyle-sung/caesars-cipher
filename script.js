$('#text, #offset').on('keyup', function() {
  var text = $('#text').val();
  var offset = $('#offset').val();
  
  text = cleanText(text);
  var codes = toCharacterCodes(text);
  codes = shiftCodes(codes, +offset || 0);
  var output = fromCharacterCodes(codes);
  
  $('#output').text(output);
})


function cleanText(text) {
  return text.toUpperCase().replace(/ /g, '');
}

function fromCharacterCodes(codes) {
  var str = "";

  for (var i = 0; i < codes.length; i ++) {
    str += String.fromCharCode(codes[i]);
  }
  
  return str;
}

function toCharacterCodes(text) {
  var codes = [];
  for (var i = 0; i < text.length; i ++) {
    codes.push(text.charCodeAt(i));
  }
  
  return codes;
}

function shiftCodes(codes, offset) {
  var newCodes = [];
  offset = offset % 26;


  for (var i = 0; i < codes.length; i ++) {
    var value = codes[i] + offset;

    if (value > 90)
      value -= 26;

    if (value < 65)
      value += 26;

    newCodes.push(value)

  }

  return newCodes;
}