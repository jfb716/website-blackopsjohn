var app = angular.module("AngApp", []);

app.directive("defaultNativeTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/default.html'
   } 
});


app.directive("cookingPandaTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/cookingpanda.html'
   } 
});


app.directive("diggTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/digg.html'
   } 
});


app.directive("independentJournalTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/independentjournal.html'
   } 
});


app.directive("legacyTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/legacy.html'
   } 
});


app.directive("lifebuzzTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/default.html'
   } 
});


app.directive("littleThingsTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/littlethings.html'
   } 
});


app.directive("oldInstantArticlesTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/oldinstantarticles.html'
   } 
});