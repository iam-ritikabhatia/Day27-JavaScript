<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Math.atan2(x,y) method</title>
  </head>
  <body style="font-family: 'Poppins', sans-serif;">
    <h1>
      Note: we are using html because in node.js, prompt() function will not
      work
    </h1>
    <h2>
      Math.atan2(y,x) method is used to find the angle between x axis and the straight line passing through the point x,y 
    </h2>
    <b>We use atan2(y,x) for (x,y) becuase it eliminates the undefined situation, suppose if we write atan2(x,y) and if x = 0 then y/0 is undefined. So using atan2(y,x) is more robust.</b>
    <div
      class="calculation"
      style="
        margin-top: 3em;
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 200px;
        justify-content: space-between;
      "
    >
      <input type="text" placeholder="Value of x_co-ordinate" id="x_co-ordinate" />
      <input type="text" placeholder="Value of y_co-ordinate" id="y_co-ordinate" />
      <button onclick="angleIs()">Calculate Angle</button>
      <h4 id="RadianOutput"></h4>
      <h4 id="DegreeOutput"></h4>
    </div>
    <script>
      const xcooridinate = document.getElementById("x_co-ordinate");
      const ycooridinate = document.getElementById("y_co-ordinate");
      const R = document.getElementById("RadianOutput");
      const D = document.getElementById("DegreeOutput");

      const angleIs = function(){
        const X = xcooridinate.value;
        const Y = ycooridinate.value;

        const Radian = Math.atan2(Y, X);
        const Degree = (180 / Math.PI) * Radian;

        R.innerHTML = `Angle in radian is ${Radian}`;
        D.innerHTML = `Angle in degree is ${Degree}`;
      }
    </script>
  </body>
</html>




/*************************************** atanh()************************************/

// Math.atanh() method is used to find the inverse hyperbolic tangent of a number

console.log(Math.atanh(Infinity));
console.log(Math.atanh(2));
console.log(Math.atanh(-2));

// for x > 1, Math.atanh() returns NaN
// for x < -1, Math.atanh() returns NaN