//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function positiveOrNegative(number) {
    if (number > 0) {
        return 'positive';
    } else if (number < 0){
        return 'negative';
    } else {
        return 'zero';
    }
}