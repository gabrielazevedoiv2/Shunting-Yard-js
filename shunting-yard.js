const operators = require('./operators')

function ShuntingYard(expr) {
    var list = Array.from(expr.split(' ').join(''));
    
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

    return outputQueue.join('')
}

module.exports = ShuntingYard
