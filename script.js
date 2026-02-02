/*logic building for "Color & Font Picker" program.	*/

	//object fetching and vars init
	const textBox = document.getElementById("content-box");
	const controls = document.querySelectorAll(".control-group");
	let currentAlign = document.getElementById("left");
	let currentRatio = document.getElementById("def");
	

	//changing text color of text input 	
	// Event Delegation
	document.getElementById("palette").addEventListener("click",(event)=> {
		  if (event.target.classList.contains("color-preset")) {
			textBox.style.color = event.target.dataset.color;
		  }
		});
	//The above if condition filters clicks to only respond to the right elements which have "color-preset" class(buttons).
		
	// user's input for text-Color
	document.getElementById("color-picker").addEventListener("input",(e)=>{
			textBox.style.color = e.target.value;
		});
				
	/* OR
	document.getElementById("color-picker").addEventListener("input",  function() {
		document.querySelector("#content-box").style.backgroundColor = this.value;
	*/
		
	//changing background color of text-box
	// Event Delegation
	document.getElementById("palette-bg").addEventListener("click", function (event) {
		if (event.target.classList.contains("color-preset")) {
			textBox.style.backgroundColor = event.target.dataset.color;
			}
		});
		
	// user's input for Background-Color
	document.getElementById("color-picker-bg").addEventListener("input",  (e) => {
			textBox.style.backgroundColor = e.target.value;
		});
	
	//changing font family of text
	// Event Delegation
	document.getElementById("fontBox").addEventListener("click", function (event) {
		if (event.target.classList.contains("font-preset")) {
			textBox.style.fontFamily = event.target.dataset.font;
			}
		});	
		
	//emoji input to text box
	document.querySelector("#emojis").onclick = (event)=>{
			if(event.target.classList.contains("emoji-btn")){
				textBox.textContent += event.target.dataset.emoji ;
			}	
	};
	
	//text alignment
	controls[0].onclick = function (event){
				if (event.target.classList.contains("align-btn") && (!event.target.classList.contains("active")))	{
						//changing alignment
						textBox.style.display ="flex";
						switch (event.target.dataset.align) {
									case "left":{
											textBox.style.alignItems = 'flex-start';  //   vertically reset
											textBox.style.justifyContent = 'flex-start'; // horizontal reset
											break;
									}
									case "center": {
											textBox.style.alignItems = 'flex-start';      // vertical reset
											textBox.style.justifyContent = 'center'; // horizontal center
											break;
									}
									case "vcenter": {
											textBox.style.alignItems='center';		//vertically center
											textBox.style.justifyContent = 'center';  // horizontally center
											break;
									}
									default : {	}
						}
						//css hover & styles
						currentAlign.classList.remove("active");
						event.target.classList.add("active");
						currentAlign = event.target;
				}
	};
	
	//Aspect Ratio 
	controls[1].onclick = function (event){
				if (event.target.classList.contains("ratio-btn") && (!event.target.classList.contains("active")))	{
							currentRatio.classList.remove("active");
							event.target.classList.add("active");
							currentRatio = event.target;
							//changing ratio
							if (event.target.dataset.ratio === "square") {
									textBox.classList.add(event.target.dataset.ratio);
									textBox.classList.remove("standard");
							} else if (event.target.dataset.ratio === "standard") {
									textBox.classList.add(event.target.dataset.ratio);
									textBox.classList.remove("square");
							} else {
									textBox.classList.remove(...textBox.classList);
							}
							
				}
	};
	
	// image download - event delegation
	document.getElementById("img").addEventListener("click", (event)=> {
			html2canvas(document.getElementById("content-box"),{ backgroundColor:null }).then(canvas =>{
					const link = document.createElement('a');
					link.href = canvas.toDataURL('image/png');
					link.download = 'image.png';
					link.click();
			});
	});	
