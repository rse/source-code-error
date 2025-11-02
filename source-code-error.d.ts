/*
**  Source-Code-Error -- Render Error of Source-Code
**  Copyright (c) 2018-2021 Dr. Ralf S. Engelschall <rse@engelschall.com>
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

/**
 * Options for rendering source code errors
 */
interface SourceCodeErrorOptions {
    /**
     * Type of error: "ERROR" or "WARNING"
     * @default "ERROR"
     */
    type?: string

    /**
     * Error description message
     * @default ""
     */
    message?: string

    /**
     * Error origin indicator
     * @default ""
     */
    origin?: string

    /**
     * Source code filename
     * @default ""
     */
    filename?: string;

    /**
     * Source code text
     * @default ""
     */
    code?: string

    /**
     * Source code line of error (1-indexed)
     * @default 0
     */
    line?: number

    /**
     * Source code column of error (1-indexed)
     * @default 0
     */
    column?: number

    /**
     * Number of source code lines to show above error
     * @default 2
     */
    above?: number

    /**
     * Number of source code lines to show below error
     * @default 2
     */
    below?: number

    /**
     * Whether to close with trailing newline
     * @default true
     */
    newline?: boolean

    /**
     * Whether to use colors in output
     * @default true
     */
    colors?: boolean
}

/**
 * Render a formatted error message with source code context
 *
 * @param options - Configuration options for rendering the error
 * @returns Formatted error message string with source code frame
 *
 * @example
 * ```typescript
 * const sourceCodeError = require("source-code-error")
 * const code = `foo bar\n    baz quux\nfoo bar`
 * let report = sourceCodeError({
 *     message:  "Unknown error",
 *     origin:   "somewhere",
 *     filename: "foo.txt",
 *     code:     code,
 *     line:     2,
 *     column:   5,
 *     colors:   true,
 *     newline:  false
 * })
 * console.log(report)
 * ```
 */
declare function sourceCodeError(options?: SourceCodeErrorOptions): string

export = sourceCodeError

