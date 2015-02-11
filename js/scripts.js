var coinCombo = function(input) {

  var change_total = input;
  var quarter, dime, nickel, penny;
  var change_combos = [ [quarter, 25, 'quarter'], [dime, 10, 'dime'] , [nickel, 5, 'nickel'], [penny, 1, 'penny'] ]

  change_combos.forEach(function(change_combo) {
    (change_combo[0]) = Math.floor(change_total/(change_combo[1]));
    change_total -= ((change_combo[0])*(change_combo[1]));
  });

  // quarter = Math.floor(change_total/25);
  // change_total -= (quarter * 25);
  // dime = Math.floor(change_total/10);
  // change_total -= (dime * 10);
  // nickel = Math.floor(change_total/5);
  // change_total -= (nickel*5);
  // penny = change_total;
  // change_total -= penny;

  return change_combos;
};

$(document).ready(function(event) {
  $('form#change-total').submit(function(event) {
    var input =[parseInt($('input#change').val())];
    var change_results = coinCombo(input);

    change_results.forEach(function(result) {
      var coin_total = result[0];
      $('.' + (result[2])).text(coin_total);
    });

     $('#result').show();
     event.preventDefault();

  });
});
