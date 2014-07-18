# plat [![build status](https://secure.travis-ci.org/jasonkuhrt/plat.png)](http://travis-ci.org/jasonkuhrt/plat)

A tool for working with JavaScript platforms agnostically



## Installation

Server:

    npm install --save plat

Client:

    component install jasonkuhrt/plat



## API


##### .isClient

    :: Bool

Is `true` if the JavaScript is executing in a browser. `false` otherwise.

##### .isServer

    :: Bool

Is `true` if the JavaScript is executing in NodeJS. `false` otherwise.


##### .platform

    :: String

Is the label of the platform that the JavaScript is executing on; may be: `browser`, `node`.

##### .GLOBE | .globe

    :: Object

Is a reference to the global scope. `window` in browsers, `GLOBAL` in  NodeJS.



## Guide

##### Throwing
If `plat` cannot determine the platform being used it will throw an error to let you know. At this point you should investigate why or create an issue/pull-request to justify and support your use-case/platform. The point is that `plat` will protect your code from executing in ambiguous execution contexts wherein e.g. you think you're in the server but not, etc.

##### Supported Platforms
Currently supported:

- browsers
- NodeJS

More platform support is welcome by those that know how to unambiguously test for such contexts. In the spirit of leanness `plat` will probably not support highly-obscure platforms but just ask to know for sure.