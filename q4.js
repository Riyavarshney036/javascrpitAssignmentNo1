/**Q4. De'cribe the u'a,e of the comma operator in JavaScript and provide an example. */

/** 
 The comma operator in JavaScript is used to evaluate multiple expressions and return the value of the last expression. It is commonly used to provide multiple updaters to a for loop’s afterthought. The syntax is expr1, expr2, expr3, ... and the operator evaluates each of its operands from left to right. The most common usage of this operator is to supply multiple updaters in a for loop. Because all expressions except the last are evaluated and then discarded, these expressions must have side effects to be useful. Common expressions that have side effects are assignments, function calls, and ++ and – operators. 
 */

 for (let i = 0, j = 9; i <= 9; i++, j--) {
    console.log(`a [$ {i}] [$ {j}] = $ {a[i][j]}`);
  }
  