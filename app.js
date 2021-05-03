$(function(){
    var player = '<div id="player"></div>';
    $('#map').append(player);
    $(document).keydown(function(e){
        // alert(e.keyCode);
        var position = $('#player').position();
        //in positions we only have top and left == (x and y)
        // alert(position.top);
        switch(e.keyCode){
            case 37: // left arrow
            $('#player').css('left', position.left - 20 + 'px');
            break;
                case 38: // up arrow
                $('#player').css('top', position.top -20 + 'px');
                break;
                    case 39: // right arrow
                    $('#player').css('left' , position.left +20 + 'px');
                    break;
                        case 40: // down arrow
                        $('#player').css('top' , position.top +20 + 'px');
                        break;
        };
    });

});