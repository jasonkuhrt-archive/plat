
describe 'is-platform on client', ->

  it '.isServer is false', ->
    (expect platform.isServer).toBe false

  it '.isClient is true', ->
    (expect platform.isClient).toBe true