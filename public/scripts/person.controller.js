app.controller('PersonController', function (PersonService) {
  console.log('PersonController loaded');



  var vm = this;

  vm.person = [];

  vm.getName = function (){
    PersonService.getName().then (function (res){
      console.log("from the controller", res);

      vm.person = res;
    });

  };

  vm.postName = function (){
    PersonService.postName(vm.firstName, vm.lastName).then (function (people){
      console.log('posting person', people);
      vm.person = people;
      vm.getName();

    });
  };
  vm.getName();


});
