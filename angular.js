var myApp = angular.module("myApp", []);

myApp.controller("TagController", ['$scope', function($scope) {
    $scope.adtagbox = [
        "<default-native-tag></default-native-tag>"
    ]
}]);



myApp.directive("defaultNativeTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/default.html'
   } 
});


myApp.directive("cookingPandaTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/cookingpanda.html'
   } 
});


myApp.directive("diggTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/digg.html'
   } 
});


myApp.directive("independentJournalTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/independentjournal.html'
   } 
});


myApp.directive("legacyTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/legacy.html'
   } 
});


myApp.directive("lifebuzzTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/default.html'
   } 
});


myApp.directive("littleThingsTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/littlethings.html'
   } 
});


myApp.directive("oldInstantArticlesTag", function(){
   return {
       restrict: 'E',
       templateUrl: 'tags/oldinstantarticles.html'
   } 
});