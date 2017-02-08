app.service('PersonService', function ($http) {
  console.log('PersonService loaded');


  this.getName = function (){
    return $http({
      type: 'GET',
      url: '/person'
    }).then(function (response){
      console.log(response);
      return response.data;
    }).catch (function (error){
      console.log('Getting from DB', error);
    })
  }

});
