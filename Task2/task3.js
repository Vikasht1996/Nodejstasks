//  Syncronus example
 goToHome();
 makeDinner();
 textMe();

function makeDinner(){
  console.log("Dinner is ready");
}
function textMe(){
  console.log("SMS sent to Mrs.Node");
}

function goToHome(doNext){
  doNext();
}
// //  Asyncronus example
// goToHome(makeDinner);
// goToHome(textMe);

// function makeDinner(){
//   console.log("Dinner is ready");
// }
// function textMe(){
//   console.log("SMS sent to Mrs.Node");
// }


// function goToHome(doNext){
//   doNext();
// }