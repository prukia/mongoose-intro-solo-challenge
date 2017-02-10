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

  vm.updateName = function (first, last, id) {
    PersonService.updateName(first, last, id).then(function (people){
      console.log('updating person', id);
      vm.getName();
    });
  };

  vm.deleteName = function (id) {
    PersonService.deleteName(id).then(function (people){
      console.log('deleting person', id);
      vm.getName();
    });
  };
  vm.getName();


});
