var app = angular.module("demo", ["ui.router", "smart-table"]);
app.config([
  "$stateProvider",
  "$urlRouterProvider",
  "$locationProvider",
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $urlRouterProvider.otherwise("/LandingPage");
    $stateProvider
      .state("LandingPage", {
        url: "/LandingPage",
        templateUrl: "Views/LandingPage.html",
        controller: "LandingPageCtrl"
      })
      .state("DetailedPage", {
        url: "/DetailedPage",
        templateUrl: "Views/DetailedPage.html",
        controller: "DetailedPageCtrl"
      });
  }
]);
