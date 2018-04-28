
const errorFrame = require(".")

let code = `foo bar\n    baz quux\nfoo bar`

let frame = errorFrame({
    message: "Unknown error",
    origin:  "somewhere",
    code:    code,
    line:    2,
    column:  5,
    colors:  true,
    newline: false
})
console.log(frame)

