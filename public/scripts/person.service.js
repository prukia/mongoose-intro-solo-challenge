app.service('PersonService', function ($http) {
  console.log('PersonService loaded');


  this.getName = function (){
    return $http({
      method: 'GET',
      url: '/person'
    }).then(function (response){
      console.log(response);
      return response.data;
    }).catch (function (error){
      console.log('Getting from DB', error);
    });
  };

  this.postName = function (first , last){
    console.log(first , last);
    return $http({
      method: 'POST',
      url: '/person',
      data: {
        firstName:first,
        lastName: last
      }
    }).then(function (response){
      console.log('Successful posting data', response);
      // return response.data;
    }).catch (function (err){
      console.log('Posting to DB', err);
    });
  };

  this.updateName = function (firstName, lastName){
    console.log('update person');
    return $http({
      method: 'PUT',
      url: '/person/' + id,
      // data:
    }).then(function (response){
      console.log('Successfully updated person', response);
    }).catch (function (err){
      console.log('Updating in DB', err);
    });
  };

  this.deleteName = function (id){
    console.log('update person');
    return $http({
      method: 'DELETE',
      url: '/person/' + id
    }).then(function (response){
      console.log('Successfully deleted person', response);
    }).catch (function (err){
      console.log('Deleted in DB', err);
    });
  };



});
