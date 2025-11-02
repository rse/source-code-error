/*
**  Source-Code-Error -- Render Error of Source-Code
**  Copyright (c) 2018-2025 Dr. Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*  external requirements  */
const path      = require("path")
const chalk     = require("chalk")
const stripAnsi = require("strip-ansi")
const codeFrame = require("@babel/code-frame").codeFrameColumns

/*  export the API function  */
module.exports = (options = {}) => {
    /*  determine options  */
    options = Object.assign({}, {
        type:       "ERROR", /*  type of error: ERROR or WARNING        */
        message:    "",      /*  error description message              */
        origin:     "",      /*  error origin indicator                 */
        filename:   "",      /*  source code filename                   */
        code:       "",      /*  source code text                       */
        line:       0,       /*  source code line of error              */
        column:     0,       /*  source code column of error            */
        above:      2,       /*  source code lines to show above error  */
        below:      2,       /*  source code lines to show below error  */
        newline:    true,    /*  whether to close with trailing newline */
        colors:     true     /*  whether to use colors                  */
    }, options)

    /*  sanity check usage  */
    if (options.code === "")
        throw new Error("options.code has to be configured")
    if (options.line <= 0)
        throw new Error("options.line has to be configured")
    if (options.column <= 0)
        throw new Error("options.column has to be configured")

    /*  determine type related color  */
    const color = (options.type === "ERROR" ? "red" : "yellow")

    /*  render code frame  */
    let frame = codeFrame(options.code, { start: { line: options.line, column: options.column } }, {
        linesAbove: options.above,
        linesBelow: options.below
    })

    /*  colorize code frame  */
    if (options.colors) {
        frame = frame
            .replace(/^(\s*\d+\s+\|)/, (_, m1) =>
                chalk.grey(m1))
            .replace(/(\n)(\s*\d+\s+\|)/g, (_, m1, m2) =>
                m1 + chalk.grey(m2))
            .replace(/(\|\s*)(\^)/, (_, m1, m2) =>
                chalk.grey(m1) + chalk[color].bold(m2))
            .replace(/(\n)(>)(\s*\d+\s+\|)(.*)/, (_, m1, m2, m3, m4) =>
                m1 + chalk[color].bold(m2) + chalk.grey(m3) + chalk.blue(m4))
    }

    /*  generate header  */
    let header = ""
    header += `${chalk[color].bold(options.type + ":")} `
    if (options.filename !== "") {
        const dirname = path.dirname(options.filename) + path.sep
        const basename = path.basename(options.filename)
        header += `${chalk[color]("file \"")}${chalk[color](dirname)}${chalk[color].bold(basename)}${chalk[color]("\", ")}`
    }
    header += `${chalk[color]("line ")}${chalk[color].bold(options.line)}` +
        `${chalk[color](", column ")}${chalk[color].bold(options.column)}:\n`
    if (options.message !== "" || options.origin !== "") {
        header += " ".repeat(options.type.length + 2)
        if (options.message !== "")
            header += `${chalk.bold(options.message)}`
        if (options.origin !== "")
            header += ` [${chalk.grey(options.origin)}]`
        header += "\n"
    }
    if (!options.colors)
        header = stripAnsi(header)

    /*  generate and return final output  */
    let output = header + frame
    if (options.newline)
        output += "\n"

    return output
}

