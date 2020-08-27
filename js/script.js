//Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
//Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.





$(document).ready(function() {


    var littleSquare = Handlebars.compile('<div class="little-square"><span></span></div>');
    for (var i = 0; i < 36; i++) {
    $('.big-square').append(littleSquare);
    }


    $('.little-square').click(function() {

    thisSquare = $(this);

    $.ajax({
      'url': 'https://flynn.boolean.careers/exercises/api/random/int',
      'method': 'get',
      'success': function(data) {

        var random = data.response;

        thisSquare.children('span').append(random);

        if (random <= 5) {
          thisSquare.addClass('yellow');
        } else {
          thisSquare.addClass('green');
        }
      },
      'error': function() {
        alert('Qualcosa è andato storto');
      }
    })
    })

});
