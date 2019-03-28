app.controller("DetailedPageCtrl", [
  "$scope",
  function($scope) {
    $scope.displayData = {
      FormTitles: [
        {
          id: 1,
          formName: "Form 1",
          data: [
            { id: 1, Title: "Editable title 1", expression: "expression 1" },
            { id: 2, Title: "Editable title 2", expression: "expression 2" }
          ]
        },
        {
          id: 2,
          formName: "Form 2",
          data: [
            {
              id: 3,
              Title: "Form 2 Editable title 1",
              expression: "expression 1"
            },
            {
              id: 4,
              Title: "Form 2 Editable title 2",
              expression: "expression 2"
            }
          ]
        },
        {
          id: 3,
          formName: "Form 3",
          data: [
            {
              id: 5,
              Title: "Form 3 Editable title 1",
              expression: "expression 1"
            },
            {
              id: 6,
              Title: "Form 3 Editable title 2",
              expression: "expression 2"
            }
          ]
        }
      ],
      Clusters: [
        {
          id: 1,
          Cluster: "Cluster 1",
          Title: "Editable title 1",
          Image: "img 1"
        },
        {
          id: 2,
          Cluster: "Cluster 2",
          Title: "Editable title 2",
          Image: "Image 2"
        },
        {
          id: 3,
          Cluster: "Cluster 3",
          Title: "Editable title 3",
          Image: "Image 3"
        }
      ],
      Templates: [
        {
          id: 1,
          Title: "Editable title 1",
          Images: ["image1", "image2"]
        },
        {
          id: 2,
          Title: "Editable title 2",
          Images: ["image1", "image2", "image3", "image4"]
        },
        {
          id: 3,
          Title: "Editable title 3",
          Images: ["image1", "image2"]
        }
      ]
    };
    $scope.tab = 1;
    $scope.setTab = function(newTab) {
      $scope.tab = newTab;
    };
    $scope.editTitle = function(title) {
      title.edit = true;
    };
    $scope.cancelEdit = function(title) {
      title.edit = false;
    };
  }
]);
