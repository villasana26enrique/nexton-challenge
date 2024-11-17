export const get = (op) => {
    try {
        return evaluateOperation(op);
    } catch(e) {
        return {
            error: "Please check your entered expression, we have detected an error"
        }
    }
};

const evaluateOperation = (operation) => {
    let regEx = /(\d+(\.\d+)?\s*[\*\/]\s*\d+(\.\d+)?)/;
    while(operation.match(regEx)) {
        operation = operation.replace(regEx, (match) => eval(match))
    }
    return eval(operation);
};
  