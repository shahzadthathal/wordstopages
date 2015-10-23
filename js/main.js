/**
 * Main AngularJS Web Application
 */
var app = angular.module('wordsToPages', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
  app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
  
  $routeProvider
     .when("/", {templateUrl: "partials/home.html", controller: "MainCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
	
});

/**
 * Controls all other Pages
 */
app.controller('MainCtrl', function ( $scope /*, $location, $http */) {
  
});

app.controller('PageCtrl', function ( $scope /*, $location, $http */) {
  
});

app.directive('showtab',
    function () {
        return {
            link: function (scope, element, attrs) {
                element.click(function(e) {
                    e.preventDefault();
					$(".table").children().children().removeClass("search-found");
					$("#total_words").val('');
					$("#txt").val('');
					$("#totalCount").empty().append("Pages: 0");
                    $(element).tab('show');
                });
            }
        };
});
