document.getElementById("myButton").onclick = function(){
let user = prompt("Enter the snake(s) ,Water(w) or Gun(g)")
let computeri = Math.floor(Math.random() *3);
let computer = ["s" ,"g" ,"w"][computeri]
const match = (computer,user) =>{
  if (computer === user)
  {
    return "nobody wins, match is tied"
  }
  else if(computer === "s" && user==="w")
  {
    return "computer"
  }
  else if(computer === "s" && user==="g")
  {
    return "user"
  }
  else if(computer === "w" && user==="s")
  {
    return "user"
  }
  else if(computer === "w" && user==="g")
  {
    return "computer"
  }
  else if(computer === "g" && user==="w")
  {
    return "user"
  }
  else if(computer === "g" && user==="s")
  {
    return "computer"
  }
}
let result= match(user,computer)
document.write(`<p style="background-color: aqua;
    text-align: center;
    font-size: 100px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bolder;
    margin:auto;
    margin-top:70px
    "> User = ${user} <br>  Computer = ${computer} <br> The Winner of the game is ${result} </p>` )
}
