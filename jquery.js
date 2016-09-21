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



    
/* ------- Passback Helper Code ------- */
    
/* ------ Hide Vendor Control Divs On Page Load ------- */

$(".adSenseAsync, .adSenseSync, .dfp, .adx, .rubicon, ad-sense-async").hide();

    
    
/* ------ Passback Dropdown Value ------- */
$(".passback_type").change(function(){
   var value = $(".passback_type").val();
   console.log(value);



/* ------ DFP Dropdown Selection ------ */    
   if(value === "passback_1") {
       console.log("DFP Was Selected");
       $(".adSenseAsync, .adSenseSync, .adx, .rubicon").hide();
       $(".dfp").show();
   }
    
    else if (value === "passback_2") {
        console.log("AdX Was Selected");
        $(".adSenseAsync, .adSenseSync, .dfp, .rubicon").hide();
        $(".adx").show();
    }
    
    else if (value === "passback_3") {
        console.log("AdSense Async Was Selected");
        $(".adSenseSync, .dfp, .adx, .rubicon").hide();
        $(".adSenseAsync, ad-sense-async").show();
       
    }
    
    else if (value === "passback_4") {
        console.log("AdSense Sync Was Selected");
        $(".adSenseAsync, .dfp, .adx, .rubicon").hide();
        $(".adSenseSync").show();
    }
    
    else if (value === "passback_5") {
        console.log("Rubicon Was Selected");
        $(".adSenseAsync, .adSenseSync, .dfp, .adx").hide();
        $(".rubicon").show();
    }
    
    else {
        console.log("Nothing Was Selected");
        $(".adSenseAsync, .adSenseSync, .dfp, .adx, .rubicon, ad-sense-async").hide();
    }
});
    

    
















    
    
    
    
});


