export function notNumber(value){
    return isNaN(value) || value == ""
}

export function IMC(weight, high) {
    return (weight/ ((high / 100) ** 2)).toFixed(2)
}