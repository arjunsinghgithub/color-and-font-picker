/*logic building for "Color & Font Picker" program.	*/

	//changing text color of text input 	
	// Event Delegation
	document.getElementById("palette").addEventListener("click",(event)=> {
		  if (event.target.classList.contains("color-preset")) {
			document.getElementById("content-box").style.color = event.target.dataset.color;
		  }
		});
	//The above if condition filters clicks to only respond to the right elements which have "color-preset" class(buttons).
		
	// user's input for text-Color
	document.getElementById("color-picker").addEventListener("input",(e)=>{
			document.querySelector("#content-box").style.color = e.target.value;
		});
				
	/* OR
	document.getElementById("color-picker").addEventListener("input",  function() {
		document.querySelector("#content-box").style.backgroundColor = this.value;
	*/
		
	//changing background color of text-box
	// Event Delegation
	document.getElementById("palette-bg").addEventListener("click", function (event) {
		if (event.target.classList.contains("color-preset")) {
			document.getElementById("content-box").style.backgroundColor = event.target.dataset.color;
			}
		});
		
	// user's input for Background-Color
	document.getElementById("color-picker-bg").addEventListener("input",  (e) => {
			document.querySelector("#content-box").style.backgroundColor = e.target.value;
		});
	
	//changing font family of text
	// Event Delegation
	document.getElementById("fontBox").addEventListener("click", function (event) {
		if (event.target.classList.contains("font-preset")) {
			document.getElementById("content-box").style.fontFamily = event.target.dataset.font;
			}
		});	
	
	//image download 
	document.getElementById("img").addEventListener("click", (event) =>{
			alert("This feature will be available in next update ");
		});	