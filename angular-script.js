
var app = angular.module("myApp", ["ngRoute"]);

  app.config(function($routeProvider, $locationProvider) {
  //alert("hello route...");
  $routeProvider
  .when("/userform", {
    templateUrl : "userform.html",
    controller : "userController"
  })
  .when("/testpage", {
    templateUrl : "testPage.html",
    controller : "userController"
  })
  .when("/testfile", {
    templateUrl : "testPageHead.html",
    controller : "userController"
  })
  .when("/test",{
    template:"<h2>ngView directive is used to display the HTML templates </h2>"
  })
  .when("/home", {
    templateUrl : "home.html",
    controller : "userController"
  })
  .otherwise({
      redirectTo: "/"
  });

  //$locationProvider.html5Mode(true);
/*
  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });*/

});


app.controller('topController',topControllerFun);

function topControllerFun(someFactory,someService){

  this.top="Top controller";
  this.someFactory=someFactory;
  this.someService=someService;
}

app.controller('bottomController', function($scope,someValue,someConstant) {

  $scope.someValue=someValue;
  $scope.someConstant=someConstant;
  $scope.bottom="Bottom Controller";
});

/*value service example*/
app.value("someValue","This is value Service test...");
/*constant service example*/
app.constant("someConstant","This is constant Service test...");


app.value("officeValue","Vikroli");
app.value("positionValue","Software Programmer");
app.constant("startDateValue","09/01/2017");
app.constant("salaryValue","55000");
app.constant("myName","Rajesh CK");

/* Factory example*/
app.factory("someFactory",function(positionValue,salaryValue){

  var values={};

  values.extn="9249";
  values.name="Rajesh";
  values.position=positionValue;
  values.salary=salaryValue;
  values.start_date="11/07/2017";
  values.office="Airoli";

  return values;

});

/*Service Example*/
app.service("someService",function(officeValue,startDateValue,myName){

  this.extn="9249";
  this.name=myName;
  this.position="Software Programmer";
  this.salary="21500";
  this.start_date=startDateValue;
  this.office=officeValue;

});


app.controller('myController', function($scope) {
$scope.addIdUserEmail=[ 
    {
      id: "1",
      user: "Rajesh",
      email: "rajeshck@trimax.in"
    },
    {
      id: "2",
      user: "Mahesh",
      email: "maheshck@trimax.in"
    }];


    $scope.clearForm = function(){
          $scope.id = "";
          $scope.user = "";
          $scope.email = "";
      };

    $scope.saveFunction =function(){
       //alert("saveFunction...");
        $scope.addIdUserEmail.push({
         
          'id': $scope.id,
          'user': $scope.user,
          'email': $scope.email
        });
        //$scope.clearForm();
    };
});


app.controller("userController", function($http,$scope) {
	//alert("userController...");
	$scope.message="Welcome to AngularJs";
    
    $scope.editMode=false;
    $scope.editModeFun=function(){
        //alert("userController...editModeFun");
        $scope.editMode=true;
    }

    $scope.clearFormField = function(){
         $scope.name = "";
         $scope.position = "";
         $scope.salary = "";
         $scope.start_date = "";
         $scope.office = "";
         $scope.extn = "";
    };
    $scope.addUser =function(){
        $scope.editMode=true;
        $scope.clearFormField();
       /* 
        $scope.userList.push({

          extn: $scope.extn,
          name: $scope.name,
          position: $scope.position,
          salary: $scope.salary,
          start_date: $scope.start_date,
          office: $scope.office

        });*/
    };

    $scope.saveModeFun=function(){
        //alert("userController...saveModeFun");
         $scope.editMode=false;
        
         /*$scope.name = $scope.name;
	       $scope.position = $scope.position;
	       $scope.salary = $scope.salary;
         $scope.start_date = $scope.start_date;
	       $scope.office = $scope.office;
         $scope.extn = $scope.extn;*/

         $scope.userList.push({
          extn: $scope.extn,
          name: $scope.name,
          position: $scope.position,
          salary: $scope.salary,
          start_date: $scope.start_date,
          office: $scope.office

        });



    }
    $scope.removeRow =function(user){

        var removeUser=$scope.userList.indexOf(user);
        $scope.userList.splice(removeUser,1);
    };
    $scope.listIndex=function(user){
        //alert("index=>"+user.extn);
            
	    $scope.name = user.name;
	    $scope.position = user.position;
	    $scope.salary = user.salary;
      $scope.start_date = user.start_date;
	    $scope.office = user.office;
      $scope.extn = user.extn;
    }

    
   $scope.userList=[ 
    {
      "name": "Tiger Nixon",
      "position": "System Architect",
      "salary": "320800",
      "start_date": "2011/04/25",
      "office": "Edinburgh",
      "extn": "5421"
    },
    {
      "name": "Garrett Winters",
      "position": "Accountant",
      "salary": "170750",
      "start_date": "2011/07/25",
      "office": "Tokyo",
      "extn": "8422"
    },
    {
      "name": "Ashton Cox",
      "position": "Junior Technical Author",
      "salary": "86000",
      "start_date": "2009/01/12",
      "office": "San Francisco",
      "extn": "1562"
    },
    {
      "name": "Cedric Kelly",
      "position": "Javascript Developer",
      "salary": "433060",
      "start_date": "2012/03/29",
      "office": "Edinburgh",
      "extn": "6224"
    },
    {
      "name": "Airi Satou",
      "position": "Accountant",
      "salary": "162700",
      "start_date": "2008/11/28",
      "office": "Tokyo",
      "extn": "5407"
    },
    {
      "name": "Brielle Williamson",
      "position": "Integration Specialist",
      "salary": "372000",
      "start_date": "2012/12/02",
      "office": "New York",
      "extn": "4804"
    },
    {
      "name": "Herrod Chandler",
      "position": "Sales Assistant",
      "salary": "137500",
      "start_date": "2012/08/06",
      "office": "San Francisco",
      "extn": "9608"
    },
    {
      "name": "Rhona Davidson",
      "position": "Integration Specialist",
      "salary": "327900",
      "start_date": "2010/10/14",
      "office": "Tokyo",
      "extn": "6200"
    },
    {
      "name": "Dai Rios",
      "position": "Personnel Lead",
      "salary": "217500",
      "start_date": "2012/09/26",
      "office": "Edinburgh",
      "extn": "2290"
    }
   
];
	    
});

/*
app.controller('userLiController', function($scope, $http) {
    $scope.createProduct = function(){
      // fields in key-value pairs
      $http.post('dataArrayObject.txt', {
              'name' : $scope.name,
              'description' : $scope.description,
              'price' : $scope.price
          }
      ).success(function (data, status, headers, config) {
          console.log(data);
      });
  }

    $http.get("dataArrayNestedObject.txt")
    .then(function(response) {
        $scope.userList = response.data;
    }, function(response) {
        $scope.listError = "Something went wrong";
        alert(listError);
    });
});

});

*/
