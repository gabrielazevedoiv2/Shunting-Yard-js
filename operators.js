const operators = {
    '*': {
        precedence: 2,
        association: 'left',
        call: (a, b) => a * b
    },
    '/': {
        precedence: 2,
        association: 'left',
        call: (a, b) => a / b
    },
    '-': {
        precedence: 1,
        association: 'left',
        call: (a, b) => a - b
    },
    '+': {
        precedence: 1,
        association: 'left',
        call: (a, b) => a + b
    }
}


module.exports = operators;