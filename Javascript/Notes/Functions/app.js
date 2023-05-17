/////////////////////////////////////
//            Functions           //
////////////////////////////////////

// // Function Declaration 
// function speak (){
//     console.log("hello");
// }

// // Named Function Expression
// let conveNamed = function talk () {
//     console.log("bla bla bla")
// };

// // Anonymous Function Expression
// let conveAnon = function () {
//     console.log("bla bla bla")
// };

//Variables here are reference points for functions
//Declarations can be Hoisted
//Expressions can NOT be Hoisted

// JS moves all Function Declarations  to the - top.



/////////////////////////////////////
//         Factory function        //
////////////////////////////////////


function createPerson(name) {
    this.name = name;
  }
  
  createPerson.prototype.talk = function() {
    console.log(this.name);
  };
  
  const me = new createPerson("Dom");
  me.talk(); // logs "Dom"
  







