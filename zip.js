/** Zip Up Iterable Objects
 *
 * @param ...iterables: objects that implement the Symbol.iterator function
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
 */
function* zip(...iterables) {
    const iterators = iterables.map(iterable => iterable[Symbol.iterator]());
    while (true) {
        let doneCount = 0;
        const values = iterators
            .map(iterator => iterator?.next())
            .map(next => next?.done ? (++doneCount, undefined) : next?.value);
        if (doneCount === iterators.length) return;
        yield values;
    }
}

// Visual Studio Code snippet text
/*
    "function-zip": {
        "prefix": "function: zip",
        "body": [
            "/** Zip Up Iterable Objects",
            " *",
            " * @param ...iterables: objects that implement the Symbol.iterator function",
            " * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols",
            " */",
            "function* zip(...iterables) {",
            "    const iterators = iterables.map(iterable => iterable[Symbol.iterator]());",
            "    while (true) {",
            "        let doneCount = 0;",
            "        const values = iterators",
            "            .map(iterator => iterator?.next())",
            "            .map(next => next?.done ? (++doneCount, undefined) : next?.value);",
            "        if (doneCount === iterators.length) return;",
            "        yield values;",
            "    }",
            "}"
        ],
        "description": "function* zip(...iterables) {"
    },
*/
