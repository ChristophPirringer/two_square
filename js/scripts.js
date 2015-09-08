var factorialize = function(number) {

  var result = 1;
  for (var counter = number; counter >0; counter -=1) {

  result = result*counter;
    //   console.log(result)
  }
  return result;

};

$(document).ready(function() {
  $("form#factorialize").submit(function(event) {
    var number = parseInt($("input#number").val());

    var total = factorialize(number);
    $(".factorial").text(total);

    event.preventDefault();
  });
});
