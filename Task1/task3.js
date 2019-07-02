function getDayString(num)
{
  var day;    
  switch(num)
  {
    case 0:
      day="Sunday";
      break;
    case 1:
      day="Monday";
      break;
    case 2:
      day="Tuesday";
      break;
    case 3:
      day="Wednesday";
      break;
    case 4:
      day="Thursday";
      break;
    case 5:
      day="Friday";
      break;
    case 6:
      day="Saturday";
      break;
    default:
      day="Invalid day";
  }
  return day;
}

theDate = new Date();

console.log("Today is ",getDayString(theDate.getDay()));
// var day = new Date();
// day.getDay();
// switch(day)
//   {
//     case 0:
//       day="Sunday";
//       break;
//     case 1:
//       day="Monday";
//       break;
//     case 2:
//       day="Tuesday";
//       break;
//     case 3:
//       day="Wednesday";

    
