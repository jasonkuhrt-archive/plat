
describe 'plat on client', ->

  it '.isServer is false', ->
    (expect plat.isServer).toBe false

  it '.isClient is true', ->
    (expect plat.isClient).toBe true

  it '.global is reference to window', ->
    (expect plat.GLOBE is window).toBe true