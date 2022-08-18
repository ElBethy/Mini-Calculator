let arr = [" ", " "];


const input1 = document.querySelector(".first-input");
const input2 = document.querySelector(".second-input");
const btn = document.querySelector(".btn1");
const displayP = document.querySelector(".display");
const errorP = document.querySelector(".error");
const selector = document.querySelector(".sum-option");

// inputElement1.addEventListener("keydown", function(){
//      console.log(inputElement1.value);
// })

// inputElement2.addEventListener("keydown", function(){
//       console.log(inputElement2.value);
// })


// the above statements with arrow function is 
// inputElement1.addEventListener("keydown", () => console.log(inputElement1.value));
// inputElement2.addEventListener("keydown", () => console.log(inputElement2.value));

// The array value is passed into the callback
input1.addEventListener("keyup", () => arr[0] = parseFloat(input1.value));
displayP.innerHTML = " ";
input2.addEventListener("keyup", () => arr[1] = parseFloat(input2.value));
displayP.innerHTML = " ";
btn.addEventListener("click", () => { 
      // console.log(arr[0] + arr[1])); this will log it on the console
      if (isNaN(arr[0])) {
            errorP.innerHTML= "Ooops! First value is not a number";
            setTimeout ((() => errorP.innerHTML= ""), 2000);
            return;
      } 
      if (isNaN(arr[1])) {
            errorP.innerHTML= " Ooops! Second value is not a number"
            setTimeout ((() => errorP.innerHTML= ""), 2000); 
            return; 
      } 
      let temp = " "
      switch (selector.value) {
            case "+":
                  temp = add(arr[0], arr[1]);
                  displayP.innerHTML = (`Cool! Your answer   ${temp}  😀`);
               break;
            case "-":
               temp = sub(arr[0], arr[1]);
               displayP.innerHTML = (`Cool! Your answer   ${temp}  😀`);;
               break;
            case "*":
               temp = mul(arr[0], arr[1]);
               displayP.innerHTML = (`Cool! Your answer   ${temp}  😀`);
               break;
            case "/":
               temp = div(arr[0], arr[1]);
               displayP.innerHTML = (`Cool! Your answer   ${temp}  😀`);
               break;
            default:
               displayP.innerHTML = "Invalid selector 😏 ";
               setTimeout ((() => displayP.innerHTML= ""), 2000);
               break;
      }
})
