$(document).ready(function(){
    
/* ------ Creates Tabs ------ */
   $("#tabs").tabs();
    
/* ------ Creates Buttons ------ */
    $("button").button();
    
/* ------ Phone Background Color Toggle ------ */
    var action = 1;
    $(".back_color").click(function(){
        if(action === 1) {
          $(".grid_box").css({"background-color": "black"});  
            action = 2;
        }
        else {
         $(".grid_box").css({"background-color": "white"});   
            action = 1;
        }  
    });
    
    
/* ------ AdChoices Color Toggle ------ */
    
    var color = 1;
    $(".adchoice_color").click(function(){
        if(color === 1) {
            console.log("White");
          $(".fbAdChoices").css({"background-color": "white !important"});  
          $(".fbAdChoices img").css({"background-color": "white !important"}); 
            color = 2;
        }
        else {
            console.log("Black");
         $(".fbAdChoices").css({"background-color": "black !important"});  
         $(".fbAdChoices imng").css({"background-color": "black !important"});  
            color = 1;
        }  
    });
    
    
    
    
});


