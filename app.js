$(function(){
    var player = '<div id="player"></div>';
    $('body').append(player);
    var positionX = 0;
    var positionY = 0;
    $(document).keydown(function(e){
        var windowWidth = $(window).width() -300;
        var windowHeight = $(window).height() -220;
        
        // alert(e.keyCode);
        var position = $('#player').position();
        //in positions we only have top and left == (x and y)
        // alert(position.top);
        switch(e.keyCode){
            case 37: // left 
            positionX = positionX - 20;
            if (positionX > 0){
                $('#player').css("margin-left", positionX );
            }else if (positionX < 0){
                positionX = windowWidth;
            };
            break;
            case 38: // up 
            positionY = positionY - 20; 
            if(positionY > 0){
                $('#player').css("margin-top" , positionY);
            }else if (positionY < 0){
                positionY = windowHeight;
            };
            break;

            case 39: // right 
            positionX = positionX + 20; 
            if(positionX < windowWidth){
                $('#player').css("margin-left" ,  positionX);
            }else if ( positionX > windowWidth){
                positionX = 0;
            };     
            break;
            case 40: // down 
            positionY = positionY + 20;
            if(positionY < windowHeight){
                $('#player').css("margin-top" , positionY);
            }else if(positionY > windowHeight){
                positionY = 0;
            };  
            break;
        };
    });
});



