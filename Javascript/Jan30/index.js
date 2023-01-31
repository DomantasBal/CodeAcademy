//////////////////////////////////////////
//              Bonus Exercise          //
//////////////////////////////////////////

let balance = 0.00;
let checkBalance = true;
let isActive = true;

//Check your balance?
if (checkBalance == true){

//YES - Is account active and balance >0?
if(isActive && balance > 0){

    // YES
    console.log("Your balance is $ " + balance + "." );

//NO - 
}else{
    // Is account not active?
    if (!isActive){
        
        //YES
        console.log("Your account is no longer active.")

    //NO - Is balance 0?
    }else{
        if (balance == 0){
            console.log("Your account is empty")
        }else{
            console.log("Your balance is negative. Please contact bank.")
        }
    }
}
}else{
    console.log("Thank you. Have a nice day!");
}












//////////////////////////////////////////
//              Exercise 1             //
//////////////////////////////////////////

// let x = 50;
// let y = 10;

// let suma = x + y;
// let skirtumas = x - y;
// let daugyba = x * y; 
// let dalyba = x / y;


// // Rezultatu rinkinys
// let rezultatai = [suma, skirtumas, daugyba, dalyba];

// //Parodyti visus rezultaus
// for(i=0; i<4; i++){
//     console.log(rezultatai[i]);
// }


//////////////////////////////////////////
//              Exercise 2              //
//////////////////////////////////////////


// const Jonas = "Jonas";
// const Petras = "Petras";
// const Antanas = "Antanas";

// const auksas = "Auksas";
// const sidabras = "Sidabras";
// const bronza = "Bronza";


// let pozicija = 1;


// if (pozicija = 1){
//  console.log( " aukso medalis");
// }else if (pozicija = 2){
//     console.log( " sidabro medalis");
// }else{
//  console.log( " bronzos medalis");
// }

//////////////////////////////////////////
//              Exercise 3              //
//////////////////////////////////////////


// let weather = "sunny";

// if (weather == "rainy"){
//  console.log( "get raincoat");
// }else if (weather  == "sunny"){
//     console.log( " get sunglasses");
// }else{
//  console.log( " dess casual");
// }



























