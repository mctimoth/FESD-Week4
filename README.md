FESD Week 4

# Topic 4 notes
* `const` and `let`
    * Video: `const`, `let`, `var` -- understand rules for *scope* and *reassignment*
    * References: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Declarations
* Template literals
    * Video: benefits over old string concatenation -- *interpolation*, dealing with multi-line strings
    * References: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
* Arrow functions
    * Video: various ways to write arrow functions; when are `return` and braces required?
        * Advanced: talk about what it means to "bind the current scope to the function"; distinction between function declaration and function expression
    * Incidental: closures https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
* Callbacks
    * Video: functions as objects, can be passed like any other value. Functions can call functions.
    * Key concept: synchronous v. asynchronous behavior 
        * Callbacks are not inherently asynchronous but are often used in conjunction with asynchronous calls
            * Example of synchronous callbacks: our Array methods `filter`, `map`, `splice`, etc.
            * Example of asynchronous callbacks: `setTimeout`, `setInterval`
    * References: 
        * https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
        * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
        * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
* Promises
    * Video: promises as cleaner way to work with asynchronous code
    * References: 
        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
