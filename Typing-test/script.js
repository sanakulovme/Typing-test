var data = document.getElementById("data");
	var td = document.getElementById("dt");

	var nm = 0;
	var vpm = 0;
	var datatxt = "";
	var txtarr = [
		"floor",
		"random",
		"math",
		"sql",
		"up",
		"php",
		"Lorem",
		"ipsum",
		"dolor",
		"sit",
		"amet",
		"consectetur",
		"adipisicing",
		"elit",
		"Unde",
		"illum",
		"maiores",
		"voluptate",
		"architecto",
		"ipsa",
		"Quis",
		"fugit",
		"laborum",
		"aut",
		"tempora",
		"beatae",
		"a",
		"exer",
		"placeat",
		"saepe",
		"iste",
		"error",
		"doloremque",
		"sequi",
		"provident",
		"similique"
	];

	function randText(){
	   var r = Math.floor(Math.random() * txtarr.length);
	   datatxt = txtarr[r];
	   td.innerHTML = datatxt;
	}

	randText();

	function render(){
	   var len = data.value.length;
	   for(var i = 0; i < len; i++){
	      if(datatxt[i] == data.value[i]){
	         nm++;
	      }
	   }
	   if(nm == len){
	      dt.style.background = "aqua";
	      if(len == datatxt.length){
	         randText();
	         data.value = "";
	         dt.style.background = "transparent";
	      }
	   }else{
	      dt.style.background = "red";
	   }
	   if(len == 0){
	      dt.style.background = "transparent";
	   }
	   nm = 0;
	}