/**
 * Created by truemenhale on 16/5/17.
 */
$(function(){
   var playGame = $('.beginBtn');
    playGame.on('tap',function(){
        $.mobile.changePage('#GamePage',{
            transition : 'slide'
        })
    });
});