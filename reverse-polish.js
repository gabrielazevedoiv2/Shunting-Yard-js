const operators = require('./operators')
const ShuntingYard = require('./shunting-yard');

function ReversePolishNotation(rpn) {
    var list = Array.from(rpn);
    var stack = [];
    let i = 0;
    while (i < list.length) {
        let token = list[i];
        if (isNaN(parseFloat(token))) {
            let operand1 = parseFloat(stack.pop());
            let operand2 = parseFloat(stack.pop());
            let result = operators[token].call(operand1, operand2);
            stack.push(result);
        } else if (!isNaN(parseFloat(token))) {
            stack.push(list[i]);
        }
        i++;
    }

    return parseFloat(stack[0]);
}

module.exports = ReversePolishNotation;
