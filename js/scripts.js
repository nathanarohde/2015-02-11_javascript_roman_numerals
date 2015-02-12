var romanNumeral = function(input) {
  var number = input;
  var thousand, five_hundred, one_hundred, fifty, ten, five, one;
  var roman_numeral_arrays = [[thousand, 1000, 'M'], [five_hundred, 500, 'D'], [one_hundred, 100, 'C'], [fifty, 50, 'L'], [ten, 10, 'X'], [five, 5, 'V'], [one, 1, 'I']];
  var replacement_array = [['DCCCC','CM'], ['CCCC', 'CD'], ['LXXXX', 'XC'], ['XXXX', 'XL'], ['VIIII', 'IX'], ['IIII', 'IV']];
  var used_roman_numeral_array = [];
  var final_roman_numeral = ""

  if (number>= 4000) {
    return "This number can not be a roman numeral."
  }

  else {
    roman_numeral_arrays.forEach(function(roman_numeral_array) {
      roman_numeral_array[0]= Math.floor(number/roman_numeral_array[1])
      number -= (roman_numeral_array[0]*roman_numeral_array[1]);
      for(var i = roman_numeral_array[0]; i > 0; i--) {
        used_roman_numeral_array.push(roman_numeral_array[2]);
      }
    });
    var roman_numeral = used_roman_numeral_array.join('');

    replacement_array.forEach(function(replacement){
      roman_numeral = roman_numeral.replace((replacement[0]), (replacement[1]));
    });
    return roman_numeral;
  }
};

$(document).ready(function(event) {
  $('form#number').submit(function(event) {
    var input =[parseInt($('input#number_input').val())];
    var final_roman_numeral = romanNumeral(input);

      $('.output').text(final_roman_numeral);

     $('#result').show();
     event.preventDefault();

  });
});
