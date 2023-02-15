let cursor = document.querySelector(".cursor");
let body = document.querySelector("body");
body.addEventListener("mousemove",(e)=>{
	let x = e.clientX;
	let y = e.clientY;
	cursor.style.left=x+'px';
	cursor.style.top=y+'px';
	cursor.style.display="block"
})
body.addEventListener("mouseout",()=>{
	mouseout();
})
const mouseout=()=>{
	cursor.style.display="none";
}