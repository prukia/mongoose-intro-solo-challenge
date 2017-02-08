app.controller('PersonController', function (PersonService) {
  console.log('PersonController loaded');



  var vm = this;

  vm.person = [];

  vm.getName = function (){
    PersonService.getName().then (function (res){
      console.log("from the controller", res);

      vm.person = res;
    })

  }
  vm.getName();
});
