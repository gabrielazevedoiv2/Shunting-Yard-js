var expr = '2 - 2 + 5 + (1 + 2)';

var list = Array.from(expr.split(' ').join(''));

var operators = {
    '*': {
        precedence: 2,
        association: 'left'
    },
    '/': {
        precedence: 2,
        association: 'left'
    },
    '-': {
        precedence: 1,
        association: 'left'
    },
    '+': {
        precedence: 1,
        association: 'left'
    }
}

var operatorStack = [];
var outputQueue = [];

let i = 0;
while (i < list.length) {
    let token = list[i];
    if (!isNaN(parseFloat(token))) {
        outputQueue.push(token);
    } else if (operators[token]) {
        try {
            while (
                operators[operatorStack[operatorStack.length-1]].precedence > operators[token].precedence || // Higher Precedence
                (operators[operatorStack[operatorStack.length-1]].precedence == operators[token].precedence && operators[token].association == 'left') &&
                operatorStack[operatorStack.length-1] != '('
            ) {
                outputQueue.push(operatorStack.pop());
            }
        } catch(e) {
            operatorStack.push(token);
        }
    } else if (token == '(') {
        operatorStack.push(token);
    } else if (token == ')') {
        while (operatorStack[operatorStack.length-1] != '(') {
            outputQueue.push(operatorStack.pop());
        }
        operatorStack.pop();
    }
    i++
}

while (operatorStack.length > 0) {
    outputQueue.push(operatorStack.pop());
}

console.log(outputQueue.join(''))

