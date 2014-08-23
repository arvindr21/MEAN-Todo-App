todoApp.factory('todosFactory', function($http) {
  var urlBase = '/api/todos';
  var _todoService = {};

  _todoService.getTodos = function() {
    return $http.get(urlBase);
  };

  _todoService.saveTodo = function(todo) {
    return $http.post(urlBase, todo);
  };

  _todoService.updateTodo = function(todo) {
    return $http.put(urlBase, todo);
  };

  _todoService.deleteTodo = function(id) {
    return $http.delete(urlBase + '/' + id);
  };

  return _todoService;
});
