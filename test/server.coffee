a = require 'assert'
platform = require '../'


describe 'is-platform on server', ->

  it '.isServer is true', ->
    a platform.isServer, 'is server'

  it '.isClient is false', ->
    a !platform.isClient, 'is not client'