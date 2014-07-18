var api = {}

api.platform = getPlatform()
api.isServer = !!~['node'].indexOf(api.platform)
api.isClient = !!~['browser'].indexOf(api.platform)
api.GLOBE = api.isServer ? GLOBAL : window
/*  Simple friendly alias since capitalization
    is not consistent amonst platforms...
    window GLOBAL etc. */
api.globe = api.GLOBE



platformExport(api, 'plat')



// Helpers

// getPlatform :: String a => -> a
function getPlatform(){
  var platform = typeof window === 'object'   &&
                 typeof location === 'object' &&
                 typeof document === 'object'  ?  'browser' :

                 typeof GLOBAL === 'object'   &&
                 typeof process === 'object'  &&
                 typeof Buffer  === 'function' ?  'node' :
                                                  null
  if (!platform) {
    throw new Error('Could not determine the platform being used.')
  }
  return platform
}

function platformExport(api, nameSpace){
  var cjs = typeof module === 'object';
  (cjs ? module : window)[cjs ? 'exports' : nameSpace] = api
}