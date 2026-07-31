let power = 900000;


setInterval(()=>{

power += Math.floor(Math.random()*50000);


document.getElementById("power")
.innerHTML =
power.toLocaleString();


},1000);
