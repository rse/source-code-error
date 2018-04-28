
Source-Code-Error
=================

Render Error for Source-Code

<p/>
<img src="https://nodei.co/npm/error-frame.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/error-frame.png" alt=""/>

About
-----

This is a small wrapper around the
[@babel/code-frame](http://npmjs.com/@babel/code-frame) module
for rendering a nice error message for source-code with a colorized code frame.

Usage
-----

Installation:

```shell
$ npm install error-frame
```

Usage:

```js
const sourceCodeError = require("source-code-error")

let code = `foo bar\n    baz quux\nfoo bar`

let report = sourceCodeError({
    message: "Unknown error",
    origin:  "somewhere",
    file:    "foo.txt",
    code:    code,
    line:    2,
    column:  5,
    colors:  true,
    newline: false
})

console.log(report)
```

Output:

```
ERROR: file "foo.txt", line 2, column 5:
       Unknown error [somewhere]
  1 | foo bar
> 2 |     baz quux
    |     ^
  3 | foo bar
```

License
-------

Copyright (c) 2018 Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

