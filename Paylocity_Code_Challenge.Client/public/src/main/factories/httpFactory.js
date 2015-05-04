/*************************
HTTP factory
==========================
Auth: TmAck.072 <tonymclaughlin72@gmail.com> 
Date: 5/3/15
*************************/

'use strict';

// Simple XHR wrapper
app.factory('httpFactory', function($http){
    var obj = {};
    obj.get = function(service){        
        return $http.get('/api/' + service);
    } 
    obj.post = function(service, body){
        return $http.post('/api/' + service, body);
    }
    return obj;
});