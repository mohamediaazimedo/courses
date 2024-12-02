

// do drop action to move from div right to left or reverse it
// drop  for divs both
function drop(e){
e.preventDefault();
let data=e.dataTransfer.getData("div");
 e.target.appendChild(document.getElementById(data));
}

// what to drag for list
// ondragstart
function dragable(e){

// get data type and the value is id
	e.dataTransfer.setData("div",e.target.id);
console.log(e.target.id);

}


// alow drage when its over  for div
function allowdrag(e){
e.preventDefault()
}
