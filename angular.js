var myApp = angular.module("myApp", []);

myApp.directive("defaultNativeTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="250" width="300" src="tags/default.html"></iframe>'
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
       template: '<iframe style="margin:0; border:0; padding:0" height="130" width="300" src="tags/independentjournal.html"></iframe>'
   } 
});


myApp.directive("legacyTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0; padding:0" height="250" width="300" src="tags/legacy.html"></iframe>'
   } 
});


myApp.directive("lifebuzzTag", function(){
   return {
       restrict: 'E',
       template: '<iframe style="margin:0; border:0" height="250" width="300" src="tags/default.html"></iframe>'
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


