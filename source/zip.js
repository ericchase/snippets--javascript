/** Safely Zip Up Iterable Objects
 *
 * Attempts were made to combat some potential pitfalls when dealing with iterables.
 *
 * @param ...iterables: objects that implement the Symbol.iterator function
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
 */
function* safeZip(...iterables) {
    function process(iterators, fakerable) {
        const values = [];
        for (let index = 0; index < iterators.length; ++index) {
            const next = iterators[index]?.next?.();
            if (next && next?.done === true) {
                iterators.splice(index, 1, fakerable);
                ++fakerable.count;
            }
            values.push(next?.value);
        }
        return values;
    }
    const fakerable = { count: 0, next: () => ({}) };
    const iterators = iterables.map((iterable) =>
        iterable?.[Symbol.iterator]?.() ?? (++fakerable.count, fakerable));
    let values = process(iterators, fakerable);
    while (fakerable.count < iterators.length) {
        yield values;
        values = process(iterators, fakerable);
    }
}

/** Zip Up Iterable Objects
 *
 * @param ...iterables: objects that implement the Symbol.iterator function
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
 */
function* zip(...iterables) {
    const iterators = iterables.map((iterable) => iterable[Symbol.iterator]());
    while (true) {
        let doneCount = 0;
        const values = iterators
            .map((iterator) => iterator?.next())
            .map((next) => (next?.done ? (++doneCount, undefined) : next?.value));
        if (doneCount === iterators.length) return;
        yield values;
    }
}

/** Potential Pitfalls with unsafe Zip
 *
 *  All iterator protocol methods (next(), return(), and throw()) are expected to return an 
 *  object implementing the IteratorResult interface. It must have the following properties:
 * 
 *  done [Optional]
 *      A boolean that's false if the iterator was able to produce the next value in the 
 *      sequence. (This is equivalent to not specifying the done property altogether.)
 *
 *      Has the value true if the iterator has completed its sequence. In this case, value 
 *      optionally specifies the return value of the iterator.
 *
 *  value [Optional]
 *      Any JavaScript value returned by the iterator. Can be omitted when done is true.
 * 
 *  In practice, neither property is strictly required; if an object without either property 
 *  is returned, it's effectively equivalent to { done: false, value: undefined }.
 * 
 *  If an iterator returns a result with done: true, any subsequent calls to next() are 
 *  expected to return done: true as well, although this is not enforced on the language 
 *  level.
 */
