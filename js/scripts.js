var encrypt = function(message) {


//####################
// Step 0: define squares for encryption
//####################
  upper=[['E','X','A','M','P'],['L','B','C','D','F'],
      ['G','H','I','J','K'],['N','O','R','S','T'],['U','V','W','Y','Z']]


  lower=[['N','O','R','S','T'],['U','V','W','Y','Z'],['E','X','A','M','P'],
      ['L','B','C','D','F'],['G','H','I','J','K']]

//####################
// Step 1: get String
//####################
  // var message = self.toUpperCase();
  var message = 'EPICODUS'

//####################
// Step 2: split message into pairs
//####################
  var pairs = message.match(/.{1,2}/g);
  // message to self: what if uneven number of letters?

//####################
// Step 3: split each pair into singles
//####################
    var single_pairs=[]
    pairs.forEach(function(pair) {
      single_pairs.push(pair.toString().split(""))
    });

//####################
// Step 4: find and store coordinates of message
//####################

  var coordinates_message=[];

  //####################
  // Step 4.a: first letter encrypted with upper square
  single_pairs.forEach(function(pair){
      var pair_counter = 0;

      var upper_counter = -1;
      do{
          upper_counter +=1;
      } while(upper[upper_counter].indexOf(pair[0]) === -1 )
    //   coordinates_message.push( [ [upper_counter,  upper[upper_counter].indexOf(pair[0])] ] )
    coordinates_message.push(upper_counter);
    coordinates_message.push( upper[upper_counter].indexOf(pair[0]));

  //####################
  // Step 4.b: second letter encrypted with lower square
      var lower_counter = -1;
      do{
          lower_counter +=1;
      } while(lower[lower_counter].indexOf(pair[1]) === -1 )
        //   coordinates_message[pair_counter].push( [lower_counter, lower[lower_counter].indexOf(pair[1])] )
        coordinates_message.push(lower_counter);
        coordinates_message.push( lower[lower_counter].indexOf(pair[1]));

      pair_counter += 1;
  });

//####################
// Step 5: switch x-coordinates to create coordinates_encryption
//####################

var switch_a = 0;
var switch_b = 2;
var coordinates_encrypted = coordinates_message;

do{
    coordinates_encrypted.splice(switch_a, 1, message[switch_b]);
    coordinates_encrypted.splice(switch_b, 1, message[switch_a]);
    switch_a += 4;
    switch_b += 4;
} while((coordinates_encrypted.indexOf(switch_b) + 2) < coordinates_encrypted.length);

//####################
// Step 6: find encrypted letters
//####################



//####################
// Step 7: compile encrypted message by concatenating encrypted letters
//####################

};

$(document).ready(function() {
  $("form#factorialize").submit(function(event) {
    var number = parseInt($("input#number").val());

    var total = factorialize(number);
    $(".factorial").text(total);

    event.preventDefault();
  });
});
