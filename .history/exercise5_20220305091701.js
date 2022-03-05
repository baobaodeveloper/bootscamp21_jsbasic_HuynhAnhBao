/**
 * Input;
 * num = 12
 * num = 44
 * num = 83
 *
 * Process
 * one = num % 10;
 * ten = (num - one) / 10;
 * total = one + ten;
 *
 * Output
 *
 * total = 3;
 * total = 8;
 * total = 11;
 */

var num = 59;
var one = num % 10;
var ten = (num - one) / 10;
var total = one + ten;
console.log(total);
