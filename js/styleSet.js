/**
 * Created by truemenhale on 16/5/17.
 */
$(function(){
    var sBtn = $('.beginBtn');
    var avatar = $('.avatar');
    var W = $(window).width();
    var answer3 = $('.answer3');
    var answer2 = $('.answer2');
    var selections = $('.selections');
    selections.css('width',(W*0.13125)*5+54);
    selections.find('li').css({'height':W*0.13125,'width':W*0.13125,'line-height':W*0.13125+'px'});
    answer3.find('li').css({'height':W*0.13125,'width':W*0.13125,'line-height':W*0.13125+'px'});
    answer3.css('width',(W*0.13125)*3+6);
    answer2.find('li').css({'height':W*0.13125,'width':W*0.13125,'line-height':W*0.13125+'px'});
    answer2.css('width',(W*0.13125)*2+3);
    sBtn.css('height',W*0.143);
    avatar.css('height',W*0.519);
});