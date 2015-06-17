var editer = angular.module('editer', []);


//Credit for ngBlur and ngFocus to https://github.com/addyosmani/todomvc/blob/master/architecture-examples/angularjs/js/directives/
editer.directive('ngBlur', function() {
 return function( scope, elem, attrs ) {
   elem.bind('blur', function() {
     scope.$apply(attrs.ngBlur);
   });
 };
});

editer.directive('ngFocus', function( $timeout ) {
 return function( scope, elem, attrs ) {
   scope.$watch(attrs.ngFocus, function( newval ) {
     if ( newval ) {
       $timeout(function() {
         elem[0].focus();
       }, 0, false);
     }
   });
 };
});