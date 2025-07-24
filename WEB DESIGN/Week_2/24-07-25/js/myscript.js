function test() {
    var number1 = Number(document.form1.value.num1); 
    var number2 = Number(document.form1.value.num2); 

    if(number1 > number2){
        document.write("greater number is : " + number1);
    }else if(number1 < number2){
        document.write("greater number is : " + number2);
    }else{
        document.write("numbers are equal");
    }
}

function test1() {
    alert("Hii");
}

function test2() {

    // for 3 numbers

    // var num1 = Number(prompt("Enter the first number"));
    // var num2 = Number(prompt("Enter the Second number"));
    // var num3 = Number(prompt("Enter the third number"));

    // if(num1 > num2 && num1 > num3){
    //     document.write("greater number is : " + num1);
    // }else if(num2 > num1 && num2 > num3){
    //     document.write("greater number is : " + num2);
    // }else if(num3 > num1 && num3 > num2){
    //     document.write("greater number is : " + num3);
    // }
    // else{
    //     document.write("numbers are equal");
    // }


    // for 2 numbers
        var num1 = Number(prompt("Enter the first number"));
        var num2 = Number(prompt("Enter the Second number"));
    if(num1 > num2){
        document.write("greater number is : " + num1);
    }else if(num1 < num2){
        document.write("greater number is : " + num2);
    }else{
        document.write("numbers are equal");
    }
}