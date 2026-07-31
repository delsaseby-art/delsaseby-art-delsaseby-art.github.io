
function transform(){


document.body.classList.toggle(
"god-mode"
);


}

for(let i=0;i<200;i++){


let p=document.createElement("div");


p.className="particle";


p.style.left=
Math.random()*100+"%";


p.style.top=
Math.random()*100+"%";


document.body.appendChild(p);


}
