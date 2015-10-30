

    ////could use toggle which is show/hide but that would not allow for the graphics
    $(document).ready(function() {
        $(".answer").hide();

        $('.main h2').click(function(){

        	var $currentAnswer = $(this).next('.answer');

        	if($currentAnswer.is(':hidden')){

        		$('.answer').slideUp();
        			$(this).removeClass('close');
        			$(this).addClass('open');

        		$currentAnswer.slideDown();
        			$(this).removeClass('open');
        			$(this).addClass('close');

        	}else {
        		$currentAnswer.slideUp();
        			$(this).removeClass('close');
        			$(this).addClass('open');
        	}
        }); //end of click function

        // $('.main').find('.open').click(function() {

        //     var $currentAnswer = $(this).next('.answer');
        //     //Expand or collapse this panel
        //     $(this).next().slideToggle('fast');
        //     // if ($currentAnswer.is(':visible')){
        //     // 	$(this).removeClass('close');
        //     // 	$(this).addClass('open');
        //     // }
        //     //Hide the other panels
        //     $(".answer").not($(this).next()).slideUp('fast');

        // });

    }); // end of ready()