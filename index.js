'use strict';

var api = {};

api.platform  = get_platform();
api.isServer = !!~['node'].indexOf(api.platform);
api.isClient = !!~['browser'].indexOf(api.platform);

module_export('platform', api);



// Helpers

function module_export(ns, api){
  var cjs = typeof module === 'object';
  (cjs ? module : window)[cjs ? 'exports' : ns] = api;
}

// get_platform :: String a => -> a
function get_platform(){
  var platform = typeof window === 'object'   &&
                 typeof location === 'object' &&
                 typeof document === 'object'  ?  'browser' :

                 typeof GLOBAL === 'object'   &&
                 typeof process === 'object'  &&
                 typeof Buffer  === 'function' ?  'node' :
                                                  'unknown' ;

  if (platform === 'unknown') {
    throw new Error('Could not determine the platform being used.');
  }

  return platform;
}