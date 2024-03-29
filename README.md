
Source-Code-Error
=================

Render Error for Source-Code

<p/>
<img src="https://nodei.co/npm/source-code-error.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/source-code-error.png" alt=""/>

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

const code = `foo bar\n    baz quux\nfoo bar`

let report = sourceCodeError({
    message:  "Unknown error",
    origin:   "somewhere",
    filename: "foo.txt",
    code:     code,
    line:     2,
    column:   5,
    colors:   true,
    newline:  false
})

console.log(report)
```

Output:

```
ERROR: file "./foo.txt", line 2, column 5:
       Unknown error [somewhere]
  1 | foo bar
> 2 |     baz quux
    |     ^
  3 | foo bar
```

Options
-------

The following options in the API exist:

- `type: string = "ERROR"`: type of error: ERROR or WARNING [optional].
- `message: string = ""`: error description message [optional].
- `origin: string = ""`: error origin indicator [optional].
- `filename: string = ""`: source code filename [optional].
- `code: string`: source code text [required].
- `line: number`: source code line of error [required].
- `column: number`: source code column of error [required].
- `above: number = 2`: source code lines to show above error [optional].
- `below: number = 2`: source code lines to show below error [optional].
- `newline: boolean = true`: whether to close with trailing newline [optional].
- `colors: boolean = true`: whether to use colors [optional].

License
-------

Copyright (c) 2018-2021 Dr. Ralf S. Engelschall (http://engelschall.com/)

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

