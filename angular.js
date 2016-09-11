var myApp = angular.module("myApp", []);

myApp.directive("defaultNativeTag", function(){
   return {
       restrict: 'E',
       template: '<iframe class="default" style="margin:0; border:0; padding:0" height="250" width="300" src="tags/default.html"></iframe>'
   } 
});


myApp.directive("cookingPandaTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="250" width="300" src="tags/cookingpanda.html"></iframe>'
   } 
});


myApp.directive("diggTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="250" width="300" src="tags/digg.html"></iframe>'
   } 
});


myApp.directive("independentJournalTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="120" width="300" src="tags/independentjournal.html"></iframe>'
   } 
});


myApp.directive("legacyTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="120" width="300" src="tags/legacy.html"></iframe>'
   } 
});


myApp.directive("newInstantArticlesTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0" height="250" width="300" src="tags/newinstantarticles.html"></iframe>'
   } 
});


myApp.directive("littleThingsTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="250" width="300" src="tags/littlethings.html"></iframe>'
   } 
});


myApp.directive("oldInstantArticlesTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="250" width="300" src="tags/oldinstantarticles.html"></iframe>'
   } 
});


myApp.directive("bannerTag", function(){
    return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="266" width="300" src="tags/banner.html"></iframe>'
   } 
});

myApp.directive("chiveTrueTag", function(){
    return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="140" width="300" src="tags/chive_true.html"></iframe>'
   } 
});


myApp.directive("chiveBlockTag", function(){
    return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="250" width="300" src="tags/chive_block.html"></iframe>'
   } 
});
