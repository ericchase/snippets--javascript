// O(m*n)
function* generateCartesianProduct(arr1, arr2) {
    for (let i = 0; i < arr1.length; ++i) {
        for (let j = 0; j < arr2.length; ++j) {
            yield [arr1[i], arr2[j]];
        }
    }
}

function getCartesianProduct(arr1, arr2) {
    return [...generateCartesianProduct(arr1, arr2)];
}

function getConsecutiveCartesianProduct(parts) {
    return parts.reduce((product, current) =>
        getCartesianProduct(product, current)
            .map(a => a.flat(1))
        , [[]])
}

console.log('Cartesian Products');

// Simple cartesian product of two items:
console.log('\n2 Items:');
console.log(getCartesianProduct('a', 'b'));
console.log(getCartesianProduct(['a'], ['b']));
// [
//     ['a', 'b']
// ]
console.log(getCartesianProduct('a', ['b', 'c']));
console.log(getCartesianProduct(['a'], ['b', 'c']));
// [
//     ['a', 'b'],
//     ['a', 'c']
// ]


console.log('\nConsecutive Cartesian Products');

// Consecutive cartesian product of three items:
console.log('\n3 Items:');
console.log(getConsecutiveCartesianProduct(['a', ['b', 'c'], 'd']));
console.log(getConsecutiveCartesianProduct([['a'], ['b', 'c'], ['d']]));
// [
//     ['a', 'b', 'd'],
//     ['a', 'c', 'd']
// ]
console.log(getConsecutiveCartesianProduct(['a', ['b', 'c'], ['d', 'e']]));
// [
//     ['a', 'b', 'd'],
//     ['a', 'b', 'e'],
//     ['a', 'c', 'd'],
//     ['a', 'c', 'e']
// ]

// Consecutive cartesian products of four items:
console.log('\n4 Items:');
console.log(getConsecutiveCartesianProduct(['a', ['b', 'c'], 'd', ['e', 'f', 'g']]));
// [
//     ['a', 'b', 'd', 'e'],
//     ['a', 'b', 'd', 'f'],
//     ['a', 'b', 'd', 'g'],
//     ['a', 'c', 'd', 'e'],
//     ['a', 'c', 'd', 'f'],
//     ['a', 'c', 'd', 'g']
// ]

// O((n + n^2)/2)
function* generateSelfCartesianProduct(arr1) {
    for (let i = 0; i < arr1.length; ++i) {
        for (let j = i + 1; j < arr1.length; ++j) {
            yield [arr1[i], arr1[j]];
        }
    }
}

function getSelfCartesianProduct(arr1) {
    return [...generateSelfCartesianProduct(arr1)];
}

console.log('\n\nSelf Cartesian Products');

// Self cartesian product of 2 items:
console.log('\n2 Items:');
console.log(getSelfCartesianProduct(['a', 'b']));
// [
//     ['a', 'b']
// ]
console.log(getSelfCartesianProduct(['a', ['b', 'c']]));
//[
//    ['a', ['b', 'c']]
//]
console.log(getSelfCartesianProduct([['a', 'b'], 'c']));
//[
//    [['a', 'b'], 'c']
//]
console.log(getSelfCartesianProduct([['a', 'b'], ['c', 'd']]));
//[
//    [['a', 'b'], ['c', 'd']]
//]

// Self cartesian product of 3 items:
console.log('\n3 Items:');
console.log(getSelfCartesianProduct(['a', 'b', 'c']));
// [
//     ['a', 'b'],
//     ['a', 'c'],
//     ['b', 'c']
// ]
console.log(getSelfCartesianProduct([['a', 'b'], ['c', 'd'], ['e', 'f']]));
// [
//     [['a', 'b'], ['c', 'd']],
//     [['a', 'b'], ['e', 'f']],
//     [['c', 'd'], ['e', 'f']]
// ]

// Self cartesian product of 4 items:
console.log('\n4 Items:');
console.log(getSelfCartesianProduct(['a', 'b', 'c', 'd']));
// [
//     ['a', 'b'],
//     ['a', 'c'],
//     ['a', 'd'],
//     ['b', 'c'],
//     ['b', 'd'],
//     ['c', 'd']
// ]
console.log(getSelfCartesianProduct([['a', 'b'], ['c', 'd'], ['e', 'f'], ['g', 'h']]));
// [
//     [['a', 'b'], ['c', 'd']],
//     [['a', 'b'], ['e', 'f']],
//     [['a', 'b'], ['g', 'h']],
//     [['c', 'd'], ['e', 'f']],
//     [['c', 'd'], ['g', 'h']],
//     [['e', 'f'], ['g', 'h']]
// ]

// Self cartesian product of complex items:
console.log('\n5 Complex Items:');
console.log(getSelfCartesianProduct(['a', ['b', 'c'], 'd', ['e', 'f', 'g'], ['h']]));
// [
//     ['a', ['b', 'c']],
//     ['a', 'd'],
//     ['a', ['e', 'f', 'g']],
//     ['a', ['h']],
//     [['b', 'c'], 'd'],
//     [['b', 'c'], ['e', 'f', 'g']],
//     [['b', 'c'], ['h']],
//     ['d', ['e', 'f', 'g']],
//     ['d', ['h']],
//     [['e', 'f', 'g'], ['h']]
// ]
