//1. check the greater number in two number 
// let x = 12 ;
// let y = 13 ;
// if(x>y){ 
//     console.log("x is greater than y");
// }else{
//     console.log("y is greater than x");
// }

//2. check that the student is pass or fail 
// let max_num = 500 ;
// let obt_num = 300;
// let pertencage = (obt_num/max_num)*100;
// if(pertencage>33){
//     console.log("Student is pass ");
// }
// else{
//     console.log("Student is fail ");

// }

//3. check give discount or not
// let price = 480;
// if(price>499){
//     let payable_amt = price - (price/100)*18
//    console.log("You have to pay :",payable_amt);
// }
// else{
//     let payable_amt = price;
//     console.log("You have to pay :",payable_amt);
// }

//4. to check that a person is adult minor or senior citizen

// let age = -12;
// if(age>=18){
//     console.log("You are a adult");
// }
// else if(age>=60){
//     console.log("You are a senior citizen");
// }
// else if(age<=0 || age>100){
//     console.log("Enter a valid age")
// }
// else{
//     console.log("You are a minor")
// }

//5. check that give number is multiple of 7 or not 
// let number = 78;
// if(number%7==0){
//     console.log("Number is multiple of 7")
// }

//6. check that temprature give is cold hot or normal
// let temprature = 40;
// if(temprature>=20 && temprature<=30){
//     console.log("Weather is normal");
// }
// else if(temprature<20 && temprature>-40){
//     console.log("Weather is cold");
// }
// else if(temprature>=30 && temprature<=55){
//     console.log("Weather is hot ");
// }
// else{
//     console.log("Weather is invalid pls check entered temp")
// }

//7. to check that a person can marry or not 
// function checkmarry(age,gender){
//     if(age>=18 && gender=="female"){
//         console.log("You can marry");
//     }
//     else if(age>=21 && gender=="male"){
//         console.log("You can marry");
//     }
    
//     else{
//         console.log("You Can't marry ")
//     }
// }
// checkmarry(21,"female")

// 8. to check that password is right or wrong
// let password = "admin1"
// let enter_password = "Admin1"
// if(enter_password == password){
//     console.log("Successfully Login")
// }
// else{
//     console.log("Wrong Password")
// }

// 9. check that traigle is right angled or not
// let a = 6
// let b = 8
// let c = 10
// if(c==Math.sqrt((Math.pow(a,2))+(Math.pow(b,2)))){
//     console.log("Triangle is Right angled triangle");
// }
// else{
//     console.log("Triangle is not Right angled")
// }

//10.  to check user is playing or not 
// function game(player){
//     if(player){
//         console.log("Start Game ")
//     }
//     else{
//         console.log("Don't start game")

//     }
// }

// 1  - Check if a number is positive, negative, or zero.
// function checknum(num){
//     if(num==0){
//         console.log("Number is zero");
//     }
//     else if(num>0){
//         console.log("Number is a positive number ");
//     }
//     else if(num<0){
//         console.log("Number is a nagetive number");
//     }
//     else{
//         console.log("Invalid Number ");
//     }
// };
// checknum("-122e");

//Second Question  - Check if a number is divisible by 3 and 5 but not 15.

// function checker(num1){
//     if(num1%3 ==0 && num1%5 == 0 && num1%15 != 0){
//         console.log("Number is divisible by 3 and 5 but not with 15")
//     }
//     else{
//         console.log("Enter again")
//     }


// }
// checker(105)

// 3. Check if a character is a vowel, consonant, number, or special character.
// function problem3(char){
//     let code = char.charCodeAt(0)
//     if(0/char==0){
//         console.log("char is a number")
//     }
    
//     else if(code>=65 && code<=90 || code>=97 && code<=122){
//             if(char =="a" || char == "e" || char == "i" || char == "o" || char == "u" || char =="A" || char == "E" ||char == "I" ||char == "O" || char =="U")
//                 console.log("char is a vowel");
        
//             else{
//             console.log("char is consonent")
//         }
//     }
//     else{
//         console.log("char is a specail symbol")
//     }
// }
    
// problem3("f")

// 4. Determine if a triangle is valid based on its three angles.
// function triangle(angle1,angle2,angle3){
//     if(angle1+angle2+angle3 == 180){
//         console.log("Triangle is valid ")
//     }
//     else{
//         console.log("Triangle is not valid")
//     }
// }
// triangle(67,56,43);

// 5.Check if a year is a leap year.

// function leapYear(year){
//     if(year%4==0){
//         if(year%100==0){
//             if(year%400==0){
//                 console.log(`${year} is Leap year`)
//             }
//             else{
//                 console.log(`${year} is  not Leap year`)
//             }

//         }
//         else{
//             console.log(`${year} is  Leap year`)
            
//         }
//     }
//     else{
//         console.log(`${year} is not  Leap year`)
//     }
// }
// leapYear(2400)

// 6. Check if password is of minimum lenght
// function checkPassword(password){
//     len = password.length
//     if(len>=8){
//         console.log("Password is strong")
//     }
//     else{
//         console.log("! Password in not strong")
//     }
// }
// checkPassword("aman")

//7. Given three numbers, print the greatest. Also check if two or more are equal and print accordingly.

//  function checkGreatestNum(num1,num2,num3){
//     if(num1 == num2 && num2 == num3){
//         console.log("All are equal",num1,num2,num3)
//     }
//     else if(num1==num2 && num2>num3){
//         console.log("Num 1 and Num2 are equal and greater than Num3",num1,num2,num3);
//     }
//     else if(num1==num2 &&  num2<num3){
//         console.log("Num 1 and Num2 are equal and less than Num3:",num3,num2,num1);
//     }
//     else if(num2==num3  && num1>num2){
//         console.log("Num2 and Num3 are equal and less than Num1:",num1,num2,num3);
//     }
//      else if( num2==num3 && num1<num2 ){
//         console.log("Num2 and Num3 are equal and greater than Num1:",num3,num2,num1);
//     }
//      else if( num1==num3  &&  num3<num2 ){
//         console.log("Num1 and Num3 are equal and less than Num2:",num2,num1,num3);
//     }
//     else if( num1==num3  &&  num3>num2 ){
//         console.log("Num1 and Num3 are equal and greater than Num2:",num1,num3,num2);
//     }
//     else if(num1>num3 && num3>num2){
//         console.log("Num1 is greater number ",num1,num3,num2);
//     }
//     else if(num1>num2 && num2>num3){
//         console.log("Num1 is greater number ",num1,num2,num3);
//     }
//     else if(num2>num3&& num3>num1){
//         console.log("Num2 is greater number: ",num2,num3,num1);
//     }
//     else if(num2>num1&& num1>num3){
//         console.log("Num2 is greater number: ",num2,num1,num3);
//     }
//     else if(num3>num2 && num2>num1){
//         console.log("Num3 is greater number :",num3,num2,num1);
//     }
//     else if(num3>num1 && num1>num2){
//         console.log("Num3 is greater number :",num3,num1,num2);
//     }
//     else{
//         console.log("Number are invalid !")
//     }



//  }
//  checkGreatestNum(-12,-19,-11)

// 8. Program to check that given number is a perfect square or not 
//  function checkSqureroot(x){
//     let y = Math.sqrt(x)

//  if(Math.ceil(y) == Math.floor(y)){
//     console.log("Number is a perfect square ");

//  }
//  else{
//     console.log("Number is not a perfect square")
//  }
// }
checkSqureroot(35)
 
//9 check a given number   it is even and multiple of 4 or a odd
// function numCheck(num){
//     if(num%2==0){
//         if(num%4==0){
//             console.log("Number is multiple of the 4");
//         }
//         else{
//             console.log("Number is a even number ");
//         }

//     }
//     else{
//         console.log("Number is a  odd number")

//     }
    
// }
// numCheck(21)
 
//10. print the largest string from given two
// function checkLength(a,b){
//     if (a.length>b.length) {
//         console.log(a)
        
//     }
//     else if(b.length>a.length){
//         console.log(b)

//     }
//     else{
//         console.log("Both are of same length",a,b)
//     }
// }
// checkLength("aman","palu")



