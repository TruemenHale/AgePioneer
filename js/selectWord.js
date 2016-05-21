/**
 * Created by truemenhale on 16/5/17.
 */
$(function(){
    var playGame = $('.beginBtn');
    var selectors = $('.selections').find('li');
    var answerTwo = $('.answer2');
    var answerThree = $('.answer3');
    var aLiTwo = answerTwo.find('li');
    var aLiThree = answerThree.find('li');
    var Qn = 0;
    var r = "";
    var FlagThree = 0;
    var FlagTwo = 0;
    selectors.on('tap',function(){
        if(parseInt(_data[Qn].nameLength) == 3){
            aLiThree.eq(FlagThree).html($(this).html());
            r += $(this).html();
            FlagThree++;
            if(FlagThree == 3){
                if(r == _data[Qn].answer){
                    console.log("1");
                }else {
                    console.log(0);
                }
                r = "";
                FlagThree = 0;
            }
        }else{
            console.log(_data[Qn]);
        }
    });
    playGame.on('tap',function(){
        ChangeQuestion(Qn,selectors);
        $.mobile.changePage('#GamePage',{
            transition : 'slide'
        })
    });
});