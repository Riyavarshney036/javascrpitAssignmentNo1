/**Q6. You are workin, on an e-commerce platform. Write a JavaScript pro,ram that take' the payment 
method ("credit", "debit", or "paypal") a' input and u'e' a 'witch 'tatement to determine and print the 
proce''in, fee a''ociated with each payment method. For example, "credit" may have a proce''in, fee of 
2%, "debit" 1.5%, and "paypal" 3%.**/
  
let paymentMethod="debit";

console.log("The processing fee of the payment method")
switch(paymentMethod){
    case "debit":
        console.log("The processing fees is: 1.5%");
        break;
    case "credit":
        console.log("The processing fees is: 2%");
        break;
    case "paypal":
        console.log("The processing fees is: 3%");
        break;
    default:
        console.log("invalid payment method")

}