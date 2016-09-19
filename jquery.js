$(document).ready(function(){
    
/* ------ Creates Tabs ------ */
   $("#tabs").tabs();
    
/* ------ Creates Buttons ------ */
    $("button").button();
    
/* ------ Tooltips ------- */


    $(document).tooltip();
    
    
/* ------ Site Color Toggle ------ */
    
$(".toggle_blk").click(function(){
    $(".phone").css({"background-color": "black"})
});

$(".toggle_wht").click(function(){
    $(".phone").css({"background-color": "white"})
});
    
    
    
    /* ------ AdChoice Color Toggle ------ */
    
$(".adchoice_blk").click(function(){
    $(".fbAdChoices").css({"background-color": "black"})
});

$(".adchoice_wht").click(function(){
    $(".fbAdChoices").css({"background-color": "transparent"})
    $(".fbAdChoices img").css({"background-color": "transparent"})
});
    
    


            
            
/* ------ Button Code to Download Tag ------ */


        $(document).on("click", ".tagButton", function(){

            var newTag = $(".box_right").text();
            console.log(newTag);

            var hiddenElement = document.createElement('a');

            hiddenElement.href = 'data:attachment/text,' + encodeURI(newTag);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'audience_network_tag.txt';
            hiddenElement.click();
        });


/* ------ Button Code to Update CSS ------ */
            
            
        $(".ctaButton").click(function(){
            console.log("CTA Button Click");

            var ctaColorNew = $("#ctaCol").val();
            console.log(ctaColorNew);

            $(".thirdPartyCallToActionClass").css({"color": ctaColorNew});
        });
    
    

        $(".fontFamButton").click(function(){
           console.log("Font Family Button Click");

            var fontFamNew = $("#fontFam").val();
            console.log(fontFamNew);

            $(".thirdPartyRoot").css({"font-family": fontFamNew});
        });
    
    

        $(".subTitButton").click(function(){
           console.log("Subtitle Update Button Click"); 

            var subWeNew = $("#subFontWeight").val();
            console.log(subWeNew);
            
            var subSiNew = $("#subFontSize").val();
            console.log(subSiNew);

            $(".fbAdSubtitle").css({"font-weight": subWeNew});
            $(".fbAdSubtitle").css({"font-size": subSiNew});
        });
    
    

        $(".titButton").click(function(){
            console.log("Title Update Button Click"); 

            var titWeNew = $("#titFontWeight").val();
            console.log(titWeNew);
            
            var titSiNew = $("#titFontSize").val();
            console.log(titSiNew);

            $(".fbAdTitle").css({"font-weight": titWeNew});
            $(".fbAdTitle").css({"font-size": titSiNew});
        });
    
    

        $(".ctaButton").click(function(){
            console.log("CTA Update Button Click"); 

            var ctaWeNew = $("#ctaFontWeight").val();
            console.log(ctaWeNew);
            
            var ctaColorNew = $("#ctaCol").val();
            console.log(ctaColorNew);
            
            var ctaSiNew = $("#ctaFontSize").val();
            console.log(ctaSiNew);

            $(".thirdPartyCallToActionClass").css({"font-weight": ctaWeNew});
            $(".thirdPartyCallToActionClass").css({"color": ctaColorNew});
            $(".thirdPartyCallToActionClass").css({"font-size": ctaSiNew});
        });



    
/*----- Hide Refresh Button ------ */
    
$(".refresh_button").hide();
    

    
/* ------ Passback Dropdown Example Image Display ------- */
$(".passback_type").change(function(){
   var value = $(".passback_type").val();
   console.log(value);
   $("button.passback_button").removeClass("dfp_button adsense_async_button");
   $(".example").empty();


/* ------ DFP Dropdown Selection ------ */    
   if(value === "passback_1") {
       console.log("DFP Was Selected");
       $(".example").html("<img src='dfp_passback_example.png'/>");
       $("button.passback_button").addClass("dfp_button");
       $(".example_box").css({"height": "100px"});
   }
    
    else if (value === "passback_2") {
        console.log("AdX Was Selected");
        $(".example_box").css({"height": "100px"});
    }
    
    else if (value === "passback_3") {
        console.log("AdSense Async Was Selected");
        $(".example").html("<img src='adsense_async_example.png'/>");
        $("button.passback_button").addClass("adsense_async_button");
        $(".example_box").css({"height": "150px"});
    }
    
    else if (value === "passback_4") {
        console.log("AdSense Sync Was Selected");
        $(".example").html("<img src='adsense_sync_example.png'/>");
        $("button.passback_button").addClass("adsense_sync_button");
        $(".example_box").css({"height": "250px"});
    }
    
    else if (value === "passback_5") {
        console.log("Rubicon Was Selected");
        $(".example_box").css({"height": "100px"});
    }
    
    else {
        console.log("Nothing Was Selected");
        $(".example_box").css({"height": "100px"});
    }
});
    

/* ------ DFP Passback Extract ------ */

$(document).on("click",".dfp_button", function(){
    
    var dfpPassback = $(".passback_tag").val();
    
    var startPos1 = dfpPassback.indexOf("<script");
    var endPos1 = dfpPassback.indexOf("googletag.p");
    var dfpSnippet1 = dfpPassback.substring(startPos1,endPos1) + '</script> ';
    console.log(dfpSnippet1);
    
    var startPos2 = dfpPassback.indexOf(">") + 1;
    var endPos2 = dfpPassback.indexOf("<", startPos2);
    var dfpSnippet2 = dfpPassback.substring(startPos2,endPos2);
    console.log(dfpSnippet2);
    
    var dfpTag = $("#drop_zone").val();
    console.log(dfpTag);
    
    $("#drop_zone").val('');
    $("#drop_zone").css({"display": "none"});
    
    var pos1 = dfpTag.indexOf("<div");
    console.log(pos1);

    var appendPassback1 = [dfpTag.slice(0, pos1), dfpSnippet1, dfpTag.slice(pos1)].join('');
    console.log(appendPassback1);
    
    var pos2 = appendPassback1.indexOf("errorCode +");
    console.log(pos2);
    
    var num1 = 33; 
    console.log(num1);
    
    var pos2plus = pos2 + num1;
    console.log(pos2plus);

    var appendPassback2 = [appendPassback1.slice(0, pos2plus), dfpSnippet2, appendPassback1.slice(pos2plus)].join('');
    console.log(appendPassback2);
    
    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(appendPassback2);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'audience_network_tag.txt';
    hiddenElement.click();
    
    $(".passback_button").hide();
    $(".refresh_button").show();
    $(".passback_tag").val('');
    $(".example").empty();

});
    
    $(".refresh_button").click(function(){
       location.reload(); 
    });
    

    
















    
    
    
    
});


