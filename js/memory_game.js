$(document).ready(function(){

  array = ["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"];

  function fisherYates ( myArray ) {
    var i = myArray.length;
    if ( i === 0 ) return false;
    while ( --i ) {
       var j = Math.floor( Math.random() * ( i + 1 ) );
       var tempi = myArray[i];
       var tempj = myArray[j];
       myArray[i] = tempj;
       myArray[j] = tempi;
     }
  }

  fisherYates(array);

  console.log(array);

  for (var i = 0; i < array.length; i++) {
    var new_box = "<div class='box'><p class='hidden'>" + array[i] + "</p></div>";
    $('#game_space').append(new_box);
  }


  var revealed = [];


  var reveal = function(){
    var children = $(this).children();
    var p = $(children[0]);
    p.removeClass('hidden');

    revealed.push(p.html());

    console.log(revealed);

    if (revealed.length === 2) {
      $('.box').unbind('click');

      if (revealed[0] === revealed[1]) {
        revealed = [];
      } else {
        revealed = [];
        setTimeout(function(){p.addClass('hidden');}, 2000);
      }

    }



  };

    // var one = p.html();
    // var two = p.html();

      // $('.box').unbind('click');

      // if (one === two) {
      //   $('.box').bind('click');
      //   $(one).parent.addClass('green');
      //   $(two).parent.addClass('green');
      // }



  $('.box').on('click', reveal);


});



