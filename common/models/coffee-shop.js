'use strict';

module.exports = function(Coffeeshop) {

    Coffeeshop.hello = function(msg, cb) {
        cb(null, 'Welcome :... ' + msg);
        
      }
  
      Coffeeshop.messagedisplay = function(cb) {
        cb(null,' Simple Message Display Function is Defined...' );
        
      }
      Coffeeshop.remoteMethod('hello', {
            accepts: {arg: 'msg', type: 'string'},
            returns: {arg: 'Message', type: 'string'}
      });

      Coffeeshop.remoteMethod('messagedisplay', {
        returns: {arg: 'Message', type: 'string'}
  });

};
