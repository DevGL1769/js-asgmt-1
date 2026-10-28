let dayNum = Number(prompt("Enter the Day Number:"));

if(dayNum>7){
    console.log("Invalid Number");
} else if(dayNum==7){
    console.log("Number is Sunday");
} else{
    console.log("Not Sunday");
}