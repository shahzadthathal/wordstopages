/**
 * Main AngularJS Web Application
 */
var app = angular.module('webApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
     .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  //console.log("Blog Controller reporting for duty.");
});

app.directive('showtab',
    function () {
        return {
            link: function (scope, element, attrs) {
                element.click(function(e) {
                    e.preventDefault();
                    $(element).tab('show');
                });
            }
        };
    });



/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ( $scope /*, $location, $http */) {
  console.log("Page Controller reporting for duty.");

	//$scope.pages = function(val) {
     //alert(val);
	 
	/*var words = document.calculator.words.value.replace(/[^0-9]/g,'');
    var font = document.calculator.font.value;
    var size = document.calculator.size.value;
	var spacing = document.calculator.spacing.value;
    
    var pages = (1/size)*(font*1)*words*spacing/450;
	pages = Math.round(pages*10)/10; 
    if (resultbox) { resultbox.innerHTML = pages + '<span style="font-size:70%;">&nbsp;Pages</span>'; }
*/	

	//}


  
});