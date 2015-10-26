 ////could use toggle which is show/hide but that would not allow for the graphics

  $(document).ready(function() {

        $("p.answer").hide();
        $("h2.open").show();



        $( "#main" )
    .queue( "steps", function( next ) {
        $('#main').accordion(); //accordion
    } )
    .queue( "steps", function( next ) {
        $("h2").animate({
                rotate: "+=90deg",},300); //rotate
    } )
    .dequeue( "steps" );


 //    $('.menulink').click(function(e){
 //     e.preventDefault();
 //   $(".open").attr('src',"assets/close.png");
 // });

    $(function() {
  $('.open').click(function(){
    $(".open").attr('src',"assets/close.png");
  });
});

    }); // end of ready()

