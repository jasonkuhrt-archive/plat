a = require 'assert'
plat = require '../'



describe 'plat on server', ->

  it '.isServer is true', ->
    a plat.isServer, 'is server'

  it '.isClient is false', ->
    a !plat.isClient, 'is not client'

  it '.global is reference to GLOBAL', ->
    a plat.GLOBE is GLOBAL, 'is GLOBAL reference'