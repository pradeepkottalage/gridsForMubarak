app.controller("LandingPageCtrl", [
  "$scope",
  "$http",
  "$location",
  function($scope, $http, $location) {
    $scope.mockData = [
      {
        id: "1",
        Window_title: "Test_030",
        Atom_type_id: "123",
        Form_titles: "23",
        Clusters: "10",
        TotalLabels: "20"
      },
      {
        id: "2",
        Window_title: "Test_032",
        Atom_type_id: "123",
        Form_titles: "23",
        Clusters: "10",
        TotalLabels: "20"
      },
      {
        id: "3",
        Window_title: "Test_033",
        Atom_type_id: "123",
        Form_titles: "23",
        Clusters: "10",
        TotalLabels: "20"
      },
      {
        id: "4",
        Window_title: "Test_034",
        Atom_type_id: "123",
        Form_titles: "23",
        Clusters: "10",
        TotalLabels: "20"
      }
    ];
    $scope.rowEdit = function(row) {
      $location.path("/DetailedPage");
    };
  }
]);
