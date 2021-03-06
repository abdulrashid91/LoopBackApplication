'use strict';

module.exports = function(Country) {
    Country.greet = function(msg, cb) {
        cb(null, 'Greetings... ' + msg);
        
      }
  
      Country.remoteMethod('greet', {
            accepts: {arg: 'msg', type: 'string'},
            returns: {arg: 'greeting', type: 'string'}
      });

};
