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

$(".adSenseAsync, .adSenseSync, .dfp, .adxAsync, .adxSync, .rubicon, adx-async, #pageReload").hide();

/* ------ Refresh Page Button ------- */
    
$("#pageReload").click(function(){
   location.reload(); 
});
    
/* ------ Passback Dropdown Value ------- */
$(".passback_type").change(function(){
   var value = $(".passback_type").val();
   console.log(value);



/* ------ Dropdown Selection ------ */    
   if(value === "passback_1") {
       console.log("DFP Was Selected");
       $(".adSenseAsync, .adSenseSync, .adxAsync, .adxSync, .rubicon").hide();
       $(".dfp").show();
   }
    
    else if (value === "passback_2") {
        console.log("AdX Async Was Selected");
        $(".adSenseAsync, .adSenseSync, .dfp, .rubicon, .adxSync").hide();
        $(".adxAsync, adx-async").show();
    }
    
    else if (value === "passback_3") {
        console.log("AdX Sync Was Selected");
        $(".adSenseAsync, .adSenseSync, .dfp, .rubicon, adxAsync").hide();
        $(".adxSync").show();
    }
    
    else if (value === "passback_4") {
        console.log("AdSense Async Was Selected");
        $(".adSenseSync, .dfp, .adxAsync, .adxSync, .rubicon").hide();
        $(".adSenseAsync, ad-sense-async").show();
       
    }
    
    else if (value === "passback_5") {
        console.log("AdSense Sync Was Selected");
        $(".adSenseAsync, .dfp, .adxAsync, .adxSync, .rubicon").hide();
        $(".adSenseSync").show();
    }
    
    else if (value === "passback_6") {
        console.log("Rubicon Was Selected");
        $(".adSenseAsync, .adSenseSync, .dfp, .adxAsync, .adxSync").hide();
        $(".rubicon").show();
    }
    
    else {
        console.log("Nothing Was Selected");
        $(".adSenseAsync, .adSenseSync, .dfp, .adxAsync, .adxSync, .rubicon, ad-sense-async").hide();
    }
});
    

    
$("#executeHelper").click(function(){
    console.log("Insert Passback Click");

        var value = $(".passback_type").val();
        console.log(value);
        
    if(value === "passback_1") {
        console.log("For DFP");
    }
    
    else if (value === "passback_2") {
        console.log("For Adx Async");
        
           var adxAsyncCode = $(".tagOutput").text();
           console.log(adxAsyncCode);

           var anTag = $("#drop_zone").val();
           console.log(anTag);
            
           $("#drop_zone").hide();
           $("#executeHelper").hide();
           $(".passbackTest").css({"left": "25%"});
           $(".type_box").hide();
           $("#pageReload").show();

           var insertSpot = anTag.indexOf("errorCode +");
           console.log(insertSpot);

           var extra = 33; 
           console.log(extra);

           var insertSpotPlus = insertSpot + extra;
           console.log(insertSpotPlus);

           var finalTag = [anTag.slice(0, insertSpotPlus), adxAsyncCode, anTag.slice(insertSpotPlus)].join('');
           console.log(finalTag);
   
           var hiddenElement = document.createElement('a');

           hiddenElement.href = 'data:attachment/text,' + encodeURI(finalTag);
           hiddenElement.target = '_blank';
           hiddenElement.download = 'audience_network_tag.txt';
           hiddenElement.click();
        
           $(".passbackTest").html(finalTag);
    }
    
    else if (value === "passback_3") {
        console.log("For Adx Sync");
    }
    
    else if (value === "passback_4") {
        console.log("For AdSense Async");
    }
    
    else if (value === "passback_5") {
        console.log("For AdSense Sync");
    }
    
    else if (value === "passback_6") {
        console.log("For Rubicon");
    }
    
    else {
        console.log("For Nothing");
    }
});















    
    
    
    
});


