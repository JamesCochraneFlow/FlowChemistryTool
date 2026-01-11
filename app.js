
//function taken from https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side 
//converts array to CSV
function arrayToCsv(data){
  return data.map(row =>
    row
    .map(String)  // convert every value to String
    .map(v => v.replaceAll('"', '""'))  // escape double quotes
    .map(v => `"${v}"`)  // quote it
    .join(',')  // comma-separated
  ).join('\r\n');  // rows starting on new lines
}

//unix time
function setDate(){
	document.title = Date.now();
}

//get value function
function getValue(elementId){
    return document.getElementById(elementId).value;
}

//dictionary SMILES vs common name lookup
var abbreviationDict = {
    "C1CCOC1" : "THF",
    "Cc1ccccc1" : "PhMe",
    "ClCCl" : "DCM",
    "CC#N" : "MeCN",
    "CC(O)=O" : "AcOH",
    "CC(=O)C" : "acetone",
    "CC(OC(C)C)=O" : "iPrOAc",
    "CCCCCC" : "n-hexane",
    "[Li+].CCCCC[CH2-]" : "hexyllithium",
    "[Li+].CCC[CH2-]" : "butyllithium"    
}

//converts SMILES string to common name if SMILES in abbreviationDict
function abbreviation(key){
    if (key in abbreviationDict) {
        return abbreviationDict[key];
    }
    else {
        return 0;
    }
}

//outputs SMILES or common solvent name depending on input (only used in generating experimental)
function abbreviationOutput(inputId){
    //solvent name in experimental
    if (abbreviation(getValue(inputId)) == "0"){
        return getValue(inputId);
    }
    else {
        return abbreviation(getValue(inputId));
    }
}


//small diagrams of 4 reactors in top left
function draw1() {
    const canvas1 = document.getElementById("canvas1");
    if (canvas1.getContext) {
        const ctx = canvas1.getContext("2d");
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 60, 20, 2);  
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 80, 20, 2);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 60, 2, 22);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 70, 60, 2);
    }
    const canvas2 = document.getElementById("canvas2");
    if (canvas2.getContext) {
        const ctx = canvas2.getContext("2d");
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 60, 20, 2);  
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 80, 20, 2);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 60, 2, 22);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 70, 20, 2);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(50, 40, 2, 32);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 40, 40, 2);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(50, 55, 40, 2);  
    }
    const canvas3 = document.getElementById("canvas3");
    if (canvas3.getContext) {
        const ctx = canvas3.getContext("2d");
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 60, 20, 2);  
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 80, 20, 2);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 60, 2, 22);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 70, 20, 2);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(50, 40, 2, 32);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 40, 40, 2);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(50, 55, 20, 2);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(70, 20, 2, 37);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 20, 60, 2);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(70, 37, 20, 2);
    }
    const canvas4 = document.getElementById("canvas4");
    if (canvas4.getContext) {
        const ctx = canvas4.getContext("2d");
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 60, 20, 2);  
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 80, 20, 2);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 60, 2, 22);

        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 70, 20, 2);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(50, 30, 2, 42);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 40, 20, 2);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(50, 50, 40, 2);
      
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(10, 20, 20, 2);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 30, 20, 2);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 20, 2, 22);
    }   
}

//draws
draw1();

//array of color themes
var colorThemes= [
    ["rgb(222, 240, 255)","rgb(182, 211, 255)","rgb(133, 176, 255)"],
    ["rgba(227, 222, 255, 1)","rgba(185, 172, 255, 1)","rgba(176, 133, 255, 1)"],
    ["rgba(255, 237, 203, 1)","rgba(255, 211, 182, 1)","rgba(255, 160, 143, 1)"]
]

//random int
function getRndInteger() {
  return Math.floor(Math.random() * (colorThemes.length));
}

//get random int
var randomIndex = getRndInteger();

//first reactor (2 input reactor)
function largecanvas1(){
    const canvas9 = document.getElementById("largecanvas");
    if (canvas9.getContext) {
        const ctx = canvas9.getContext("2d");
        ctx.clearRect(0, 0, canvas9.width, canvas9.height);
        
        ctx.fillStyle = colorThemes[randomIndex][0];
        ctx.fillRect(25, 610, 155, 130);
        
        ctx.fillStyle = colorThemes[randomIndex][1];
        ctx.fillRect(25, 450, 155, 130);
        
        ctx.fillStyle = colorThemes[randomIndex][0];
        ctx.fillRect(25, 155, 245, 105);

        ctx.fillStyle = colorThemes[randomIndex][1];
        ctx.fillRect(275, 155, 245, 105);
    
        
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 480, 160, 8);  
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 640, 160, 8);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(190, 480, 8, 168);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(190, 560, 580, 8);



        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(590, 623, 20, 2);

        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(590, 618, 2, 7);

        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(590, 663, 20, 2);

        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(590, 658, 2, 7);
    }
}


//2nd reactor (3 input reactor)
function largecanvas2(){
    const canvas9 = document.getElementById("largecanvas");
    if (canvas9.getContext) {
        const ctx = canvas9.getContext("2d");
        ctx.clearRect(0, 0, canvas9.width, canvas9.height);

        ctx.fillStyle = colorThemes[randomIndex][0];
        ctx.fillRect(25, 610, 155, 130);
       
        ctx.fillStyle = colorThemes[randomIndex][1];
        ctx.fillRect(25, 450, 155, 130);
        
        ctx.fillStyle = colorThemes[randomIndex][2];
        ctx.fillRect(25, 290, 155, 130);

        

        ctx.fillStyle = colorThemes[randomIndex][0];
        ctx.fillRect(25, 155, 245, 105);

        ctx.fillStyle = colorThemes[randomIndex][1];
        ctx.fillRect(275, 155, 245, 105);

        ctx.fillStyle = colorThemes[randomIndex][2];
        ctx.fillRect(525, 155, 245, 105);


      
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 480, 160, 8); 
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 640, 160, 8);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(190, 480, 8, 168);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(190, 560, 160, 8);
    
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(350, 320, 8, 248);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 320, 320, 8);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(350, 450, 420, 8); 




        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(590, 513, 20, 2);

        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(590, 508, 2, 7);

        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(590, 553, 20, 2);

        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(590, 548, 2, 7);
    }
}

//3rd reactor (4 inputs)
function largecanvas3(){
    const canvas9 = document.getElementById("largecanvas");
    if (canvas9.getContext) {
        const ctx = canvas9.getContext("2d");
        ctx.clearRect(0, 0, canvas9.width, canvas9.height);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 480, 160, 8);  
     
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 640, 160, 8);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(190, 480, 8, 168);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(190, 560, 160, 8);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(350, 320, 8, 248);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 320, 320, 8);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(350, 450, 160, 8);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(510, 160, 8, 298);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 160, 486, 8);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(516, 310, 250, 8);
    }
}

//4th reactor (4 inputs)
function largecanvas4(){
    const canvas9 = document.getElementById("largecanvas");
    if (canvas9.getContext) {
        const ctx = canvas9.getContext("2d");
        ctx.clearRect(0, 0, canvas9.width, canvas9.height);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 480, 160, 8);  
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 640, 160, 8);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(190, 480, 8, 168);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(190, 560, 160, 8);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(350, 244, 8, 324);
       
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 320, 168, 8);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(350, 404, 420, 8);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(190, 160, 8, 168);
      
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(30, 160, 168, 8);
        
        ctx.fillStyle = "rgb(0 0 0)";
        ctx.fillRect(190, 244, 168, 8);
    }
}

//adds color higlight to 1st reactor and displays 1st reactor
function canvas1open(){
    largecanvas1();
    document.getElementById("canvas1").style.borderColor = colorThemes[randomIndex][2];
    document.getElementById("canvas2").style.borderColor = "white";
    document.getElementById("canvas3").style.borderColor = "white";
    document.getElementById("canvas4").style.borderColor = "white";
    var x1 = document.getElementById("largecanvas1values");
    x1.style.display = "block";
    var x2 = document.getElementById("largecanvas2values");
    x2.style.display = "none";
    var x3 = document.getElementById("largecanvas3values");
    x3.style.display = "none";
    var x4 = document.getElementById("largecanvas4values");
    x4.style.display = "none";
}

//adds color higlight to 2nd reactor and displays 2nd reactor
function canvas2open(){
    largecanvas2();
    document.getElementById("canvas2").style.borderColor = colorThemes[randomIndex][2];
    document.getElementById("canvas1").style.borderColor = "white";
    document.getElementById("canvas3").style.borderColor = "white";
    document.getElementById("canvas4").style.borderColor = "white";
    var x1 = document.getElementById("largecanvas1values");
    x1.style.display = "none";
    var x2 = document.getElementById("largecanvas2values");
    x2.style.display = "block";
    var x3 = document.getElementById("largecanvas3values");
    x3.style.display = "none";
    var x4 = document.getElementById("largecanvas4values");
    x4.style.display = "none";
}

//adds color higlight to 3rd reactor and displays 3rd reactor
function canvas3open(){
    largecanvas3();
    document.getElementById("canvas3").style.borderColor = colorThemes[randomIndex][2];
    document.getElementById("canvas1").style.borderColor = "white";
    document.getElementById("canvas2").style.borderColor = "white";
    document.getElementById("canvas4").style.borderColor = "white";
    var x1 = document.getElementById("largecanvas1values");
    x1.style.display = "none";
    var x2 = document.getElementById("largecanvas2values");
    x2.style.display = "none";
    var x3 = document.getElementById("largecanvas3values");
    x3.style.display = "block";
    var x4 = document.getElementById("largecanvas4values");
    x4.style.display = "none";
}

//add color higlight to 4th reactor and displays 4th reactor
function canvas4open(){
    largecanvas4();
    document.getElementById("canvas3").style.borderColor = "white";
    document.getElementById("canvas1").style.borderColor = "white";
    document.getElementById("canvas2").style.borderColor = "white";
    document.getElementById("canvas4").style.borderColor = colorThemes[randomIndex][2];
    var x1 = document.getElementById("largecanvas1values");
    x1.style.display = "none";
    var x2 = document.getElementById("largecanvas2values");
    x2.style.display = "none";
    var x3 = document.getElementById("largecanvas3values");
    x3.style.display = "none";
    var x4 = document.getElementById("largecanvas4values");
    x4.style.display = "block";
}



//add component 2 to feed A (in 1st reactor)
function lc1atableadd1(){
    var x1 = document.getElementById("lc1atableadd2");
    var x4 = document.getElementById("lc1atableminus2");
    var x2 = document.getElementById("lc1feedA2");
    var x3 = document.getElementById("lc1feedA2molarity");
    x1.style.display = "block";
    x2.style.display = "block";
    x3.style.display = "block";
    x4.style.display = "block";
}

//add component 3 to feed A (in 1st reactor)
function lc1atableadd2(){
    var x1 = document.getElementById("lc1atableminus3");
    var x2 = document.getElementById("lc1feedA3");
    var x3 = document.getElementById("lc1feedA3molarity");
    x1.style.display = "block";
    x2.style.display = "block";
    x3.style.display = "block";
}

//remove component 2 from feed A (in 1st reactor)
function lc1atableminus2(){
    var x1 = document.getElementById("lc1atableadd2");
    var x4 = document.getElementById("lc1atableminus2");
    var x2 = document.getElementById("lc1feedA2");
    var x3 = document.getElementById("lc1feedA2molarity");
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    document.getElementById("lc1feedA2input").value = "";
    document.getElementById("lc1feedA2molarityinput").value = "";
    largecanvas1update();
}

//remove component 3 from feed A (in 1st reactor)
function lc1atableminus3(){
    var x4 = document.getElementById("lc1atableminus3");
    var x2 = document.getElementById("lc1feedA3");
    var x3 = document.getElementById("lc1feedA3molarity");
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    document.getElementById("lc1feedA3input").value = "";
    document.getElementById("lc1feedA3molarityinput").value = "";
    largecanvas1update();
}

//add component 2 to feed B (in 1st reactor)
function lc1btableadd1(){
    var x1 = document.getElementById("lc1btableadd2");
    var x4 = document.getElementById("lc1btableminus2");
    var x2 = document.getElementById("lc1feedB2");
    var x3 = document.getElementById("lc1feedB2molarity");
    x1.style.display = "block";
    x2.style.display = "block";
    x3.style.display = "block";
    x4.style.display = "block";
}

//add component 3 to feed B (in 1st reactor)
function lc1btableadd2(){
    var x1 = document.getElementById("lc1btableminus3");
    var x2 = document.getElementById("lc1feedB3");
    var x3 = document.getElementById("lc1feedB3molarity");
    x1.style.display = "block";
    x2.style.display = "block";
    x3.style.display = "block";
}

//remove component 2 from feed B (in 1st reactor)
function lc1btableminus2(){
    var x1 = document.getElementById("lc1btableadd2");
    var x4 = document.getElementById("lc1btableminus2");
    var x2 = document.getElementById("lc1feedB2");
    var x3 = document.getElementById("lc1feedB2molarity");
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    document.getElementById("lc1feedB2input").value = "";
    document.getElementById("lc1feedB2molarityinput").value = "";
    largecanvas1update();
}

//remove component 3 from feed B (in 1st reactor)
function lc1btableminus3(){
    var x4 = document.getElementById("lc1btableminus3");
    var x2 = document.getElementById("lc1feedB3");
    var x3 = document.getElementById("lc1feedB3molarity");
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    document.getElementById("lc1feedB3input").value = "";
    document.getElementById("lc1feedB3molarityinput").value = "";
    largecanvas1update();
}






//add component 2 to feed A (in 2nd reactor)
function lc2atableadd1(){
    var x1 = document.getElementById("lc2atableadd2");
    var x4 = document.getElementById("lc2atableminus2");
    var x2 = document.getElementById("lc2feedA2");
    var x3 = document.getElementById("lc2feedA2molarity");
    x1.style.display = "block";
    x2.style.display = "block";
    x3.style.display = "block";
    x4.style.display = "block";
}

//add component 3 to feed A (in 2nd reactor)
function lc2atableadd2(){
    var x1 = document.getElementById("lc2atableminus3");
    var x2 = document.getElementById("lc2feedA3");
    var x3 = document.getElementById("lc2feedA3molarity");
    x1.style.display = "block";
    x2.style.display = "block";
    x3.style.display = "block";
}

//remove component 2 from feed A (in 2nd reactor)
function lc2atableminus2(){
    var x1 = document.getElementById("lc2atableadd2");
    var x4 = document.getElementById("lc2atableminus2");
    var x2 = document.getElementById("lc2feedA2");
    var x3 = document.getElementById("lc2feedA2molarity");
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    document.getElementById("lc2feedA2input").value = "";
    document.getElementById("lc2feedA2molarityinput").value = "";
    largecanvas2update();
}

//remove component 3 from feed A (in 2nd reactor)
function lc2atableminus3(){
    var x4 = document.getElementById("lc2atableminus3");
    var x2 = document.getElementById("lc2feedA3");
    var x3 = document.getElementById("lc2feedA3molarity");
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    document.getElementById("lc2feedA3input").value = "";
    document.getElementById("lc2feedA3molarityinput").value = "";
    largecanvas2update();
}

//add component 2 to feed B (in 2nd reactor)
function lc2btableadd1(){
    var x1 = document.getElementById("lc2btableadd2");
    var x4 = document.getElementById("lc2btableminus2");
    var x2 = document.getElementById("lc2feedB2");
    var x3 = document.getElementById("lc2feedB2molarity");
    x1.style.display = "block";
    x2.style.display = "block";
    x3.style.display = "block";
    x4.style.display = "block";
}

//add component 3 to feed B (in 2nd reactor)
function lc2btableadd2(){
    var x1 = document.getElementById("lc2btableminus3");
    var x2 = document.getElementById("lc2feedB3");
    var x3 = document.getElementById("lc2feedB3molarity");
    x1.style.display = "block";
    x2.style.display = "block";
    x3.style.display = "block";
}

//remove component 2 from feed B (in 2nd reactor)
function lc2btableminus2(){
    var x1 = document.getElementById("lc2btableadd2");
    var x4 = document.getElementById("lc2btableminus2");
    var x2 = document.getElementById("lc2feedB2");
    var x3 = document.getElementById("lc2feedB2molarity");
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    document.getElementById("lc2feedB2input").value = "";
    document.getElementById("lc2feedB2molarityinput").value = "";
    largecanvas2update();
}

//add component 3 from feed B (in 2nd reactor)
function lc2btableminus3(){
    var x4 = document.getElementById("lc2btableminus3");
    var x2 = document.getElementById("lc2feedB3");
    var x3 = document.getElementById("lc2feedB3molarity");
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    document.getElementById("lc2feedB3input").value = "";
    document.getElementById("lc2feedB3molarityinput").value = "";
    largecanvas2update();
}

//add component 2 to feed C (in 2nd reactor)
function lc2ctableadd1(){
    var x1 = document.getElementById("lc2ctableadd2");
    var x4 = document.getElementById("lc2ctableminus2");
    var x2 = document.getElementById("lc2feedC2");
    var x3 = document.getElementById("lc2feedC2molarity");
    x1.style.display = "block";
    x2.style.display = "block";
    x3.style.display = "block";
    x4.style.display = "block";
}

//add component 3 to feed C (in 2nd reactor)
function lc2ctableadd2(){
    var x1 = document.getElementById("lc2ctableminus3");
    var x2 = document.getElementById("lc2feedC3");
    var x3 = document.getElementById("lc2feedC3molarity");
    x1.style.display = "block";
    x2.style.display = "block";
    x3.style.display = "block";
}

//remove component 2 from feed C (in 2nd reactor)
function lc2ctableminus2(){
    var x1 = document.getElementById("lc2ctableadd2");
    var x4 = document.getElementById("lc2ctableminus2");
    var x2 = document.getElementById("lc2feedC2");
    var x3 = document.getElementById("lc2feedC2molarity");
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    document.getElementById("lc2feedC2input").value = "";
    document.getElementById("lc2feedC2molarityinput").value = "";
    largecanvas2update();
}

//remove component 3 to feed C (in 2nd reactor)
function lc2ctableminus3(){
    var x4 = document.getElementById("lc2ctableminus3");
    var x2 = document.getElementById("lc2feedC3");
    var x3 = document.getElementById("lc2feedC3molarity");
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    document.getElementById("lc2feedC3input").value = "";
    document.getElementById("lc2feedC3molarityinput").value = "";
    largecanvas2update();
}



//add custom mixing element (in 1st reactor)
function lc1addmixer() {
    var x = document.getElementById("lc1abmixernew");
    var option = document.createElement("option");
    let mixername = document.getElementById("lc1addmixernameinput").value;
    let mixervol = document.getElementById("lc1addmixervolumeinput").value;

    if (mixervol.length == 0){
        mixervol = 0;
    }
    else {
    }

    option.text = mixername;
    option.value = mixervol;
    x.add(option);
}


//add custom mixing element (in 2nd reactor)
function lc2addmixer() {
    //first mixiing element
    var x = document.getElementById("lc2abmixernew");
    var option = document.createElement("option");
    let mixername = document.getElementById("lc2addmixernameinput").value;
    let mixervol = document.getElementById("lc2addmixervolumeinput").value;
    if (mixervol.length == 0){
        mixervol = 0;
    }
    else {
    }
    option.text = mixername;
    option.value = mixervol;
    x.add(option);

    //2nd mixing element
    var y = document.getElementById("lc2bcmixernew");
    var option1 = document.createElement("option");
    let mixername1 = document.getElementById("lc2addmixernameinput").value;
    let mixervol1 = document.getElementById("lc2addmixervolumeinput").value;
    if (mixervol1.length == 0){
        mixervol1 = 0;
    }
    else {
    }
    option1.text = mixername1;
    option1.value = mixervol1;
    y.add(option1);
}

//big function to handle only first reactor
function largecanvas1update(){

    //feed A
    let lc1aflowrate = document.getElementById("lc1aflowrateinput").value;
    let lc1adiameter = document.getElementById("lc1adiameterinput").value;
    let lc1atime = document.getElementById("lc1atimeinput").value;
    let lc1alength = (lc1atime * lc1aflowrate )/(60 * 3.1415 * ((lc1adiameter/20)**2));
    document.getElementById("lc1alength").innerHTML = "Length = " + lc1alength.toFixed(2) + " cm";
    //feed B
    let lc1bflowrate = document.getElementById("lc1bflowrateinput").value;
    let lc1bdiameter = document.getElementById("lc1bdiameterinput").value;
    let lc1btime = document.getElementById("lc1btimeinput").value;
    let lc1blength = (lc1btime * lc1bflowrate )/(60 * 3.1415 * ((lc1bdiameter/20)**2));
    document.getElementById("lc1blength").innerHTML = "Length = " + lc1blength.toFixed(2) + " cm";
    //AB line 
    let lc1abflowrate = parseFloat(lc1aflowrate) + parseFloat(lc1bflowrate);
    let lc1abdiameter = document.getElementById("lc1abdiameterinput").value;
    let lc1abtime = document.getElementById("lc1abtimeinput").value;
    
    if (lc1abtime.length == 0){
        lc1abtime = 0;
    }
    else {

    }

    let lc1ablength = (lc1abtime * lc1abflowrate )/(60 * 3.1415 * ((lc1abdiameter/20)**2));
    document.getElementById("lc1ablength").innerHTML = "Length = " + lc1ablength.toFixed(2) + " cm";
   
    //gets SMILES/molarities for feed A
    let lc1feedA1 = document.getElementById("lc1feedA1input").value;
    let lc1feedA1molarity = document.getElementById("lc1feedA1molarityinput").value;
    let lc1feedA2 = document.getElementById("lc1feedA2input").value;
    let lc1feedA2molarity = document.getElementById("lc1feedA2molarityinput").value;
    let lc1feedA3 = document.getElementById("lc1feedA3input").value;
    let lc1feedA3molarity = document.getElementById("lc1feedA3molarityinput").value;
    let lc1feedAsolvent = getValue("lc1feedAsolventinput");
    let lc1feedAsolventcommon = abbreviationOutput("lc1feedAsolventinput");
    
    //gets SMILES/molarities for feed B
    let lc1feedB1 = document.getElementById("lc1feedB1input").value;
    let lc1feedB1molarity = document.getElementById("lc1feedB1molarityinput").value;
    let lc1feedB2 = document.getElementById("lc1feedB2input").value;
    let lc1feedB2molarity = document.getElementById("lc1feedB2molarityinput").value;
    let lc1feedB3 = document.getElementById("lc1feedB3input").value;
    let lc1feedB3molarity = document.getElementById("lc1feedB3molarityinput").value;
    let lc1feedBsolvent = document.getElementById("lc1feedBsolventinput").value;
    let lc1feedBsolventcommon = abbreviationOutput("lc1feedBsolventinput");

    //mixer info
    let lc1abmixernewtext = document.getElementById('lc1abmixernew').options[document.getElementById('lc1abmixernew').selectedIndex].text;
    let lc1abmixernewvalue = document.getElementById("lc1abmixernew").value;
    
    //calculates equiv
    let lc1feedB1equiv = "";
    let lc1feedB2equiv = "";
    let lc1feedB3equiv = "";
    
    //quench/notes
    let lc1quench = document.getElementById("lc1quenchinput").value;
    let lc1notes = document.getElementById("lc1notesinput").value;

    //gets reactor volume with respect to feed A only
    let lc1reactorvolume =  (lc1aflowrate * lc1atime / 60) + (lc1abflowrate * lc1abtime / 60);

    //handles chips
    let lc1abmixernewvaluefloat = parseFloat(lc1abmixernewvalue);
    let lc1timeinchip = 60 * lc1abmixernewvaluefloat / lc1abflowrate;
    let lc1abtimefloat = parseFloat(lc1abtime);
    let lc1timewithchip = lc1abtimefloat + parseFloat(lc1timeinchip);
    let lc1timeinchiptext = "+ "  + lc1timeinchip.toFixed(2) + " s (in " + lc1abmixernewtext + ")";

    //chip handling csv and experimentals
    if (lc1abmixernewvalue == "not specified"){
        lc1abmixerexp = "";
        lc1abmixercsv = "not specified";
        document.getElementById("lc1abchipadd").innerHTML = "";
        lc1timeinchiptext = "";
    }
    else if (lc1abmixernewvalue != "0"){
        lc1reactorvolume += lc1abmixernewvaluefloat;
        lc1abtimefloat = lc1timewithchip.toFixed(2);
        document.getElementById("lc1abchipadd").innerHTML = lc1timeinchiptext;
        lc1abmixerexp = lc1abmixernewtext;
        lc1abmixercsv = lc1abmixernewtext;
    }
    else {
        lc1abmixerexp = lc1abmixernewtext;
        lc1abmixercsv = lc1abmixernewtext;
        document.getElementById("lc1abchipadd").innerHTML = "";
        lc1timeinchiptext = "";
     }
    
    //steady state info (again with respect with feed A only) 
    let lc1steadystatetime = 3 * lc1reactorvolume  /  (lc1aflowrate / 60 );
    let lc1steadystatevolume = lc1steadystatetime * lc1aflowrate/ 60;

    //bath temp
    let lc1abbathtemp = document.getElementById("lc1abbathtempinput").value;
    let lc1abbathtempstring = "";
    if (lc1abbathtemp.length != 0) {
        lc1abbathtempstring += lc1abbathtemp + " &#8451 (bath temp)";
    }
        

    //inline temp
    let lc1ablinetemp = document.getElementById("lc1ablinetempinput").value;
    let lc1ablinetempstring = "";
    if (lc1ablinetemp.length != 0) {
        lc1ablinetempstring += ", " + lc1ablinetemp + " &#8451 (in-line temp)";
    }

    //pressure
    let lc1pressure = document.getElementById("lc1pressureinput").value;
    let lc1pressurestring = "";
    if (lc1pressure.length != 0) {
        lc1pressurestring += ", " + lc1pressure + " psi BPR";
    }
        

    //steady state
    let lc1steadystate = getValue("lc1steadystateflag");
    let lc1steadystateexp = "";
    if (lc1steadystate == "Yes") {
        lc1steadystateexp =  "Collection began at steady state after infusing 3 residence times of all feed solutions through the reactor.";
    } 
    else if (lc1steadystate == "No") {
        lc1steadystateexp = "Collection began immediately without reaching steady state.";
    }
    else {
        lc1steadystateexp = "";
    }

    //sonication info
    let lc1sonic = getValue("lc1sonic");
    let lc1sonicexp = "";
    if (lc1sonic == "Yes") {
        lc1sonicexp =  " under sonication";
    } 
    else {
        lc1sonicexp = "";
    }
    
    //collection time info
    let lc1collectiontime = document.getElementById("lc1collectiontimeinput");
    let lc1collectiontimecsv = lc1collectiontime.value;
    let lc1mmolesprocessed = (lc1aflowrate * lc1collectiontimecsv * lc1feedA1molarity / 60).toFixed(2);
    let lc1mlprocessed = (lc1aflowrate * lc1collectiontimecsv/ 60).toFixed(2);
    let lc1collectiontimetext = "";
    if (lc1collectiontimecsv.length != 0 ) {
        lc1collectiontimetext += " Yield is reported based on approximately " + lc1collectiontimecsv + " s/" + lc1mlprocessed + " mL/" + lc1mmolesprocessed + " mmol of " + lc1feedA1 + " processed.";
    }
    
    //feed A component 1 equiv (always set to 1 equiv)
    let lc1feedA1text = "";
    if (lc1feedA1.length != 0) {
        lc1feedA1text += lc1feedA1 + " (" + lc1feedA1molarity + "M, 1 equiv.)";
    }
        
    
    //feed A component 2 equiv
    let lc1feedA2equiv = "";
    let lc1feedA2text = "";
    if (lc1feedA2.length != 0) {
        lc1feedA2equiv = (lc1feedA2molarity/lc1feedA1molarity).toFixed(2);
        lc1feedA2text += " and " + lc1feedA2 + " (" + lc1feedA2molarity + "M, "+ lc1feedA2equiv + " equiv.)";
    }
        

    //feed A component 3 equiv
    let lc1feedA3equiv = "";
    let lc1feedA3text = "";
    if (lc1feedA3.length != 0) {
        lc1feedA3equiv = (lc1feedA3molarity/lc1feedA1molarity).toFixed(2);
        lc1feedA3text += " and " + lc1feedA3 + " (" + lc1feedA3molarity + "M, "+ lc1feedA3equiv + " equiv.)";
    }
        
    //feed B component 1 equiv
    let lc1feedB1text = "";
    if (lc1feedB1.length != 0) {
        lc1feedB1equiv = ((lc1feedB1molarity * lc1bflowrate)/ (lc1feedA1molarity * lc1aflowrate)).toFixed(2);
        lc1feedB1text += lc1feedB1 + " (" + lc1feedB1molarity + "M, "+ lc1feedB1equiv + " equiv.)";
    }
        
    
    //feed B component 2 equiv
    let lc1feedB2text = "";
    if (lc1feedB2.length != 0) {
        lc1feedB2equiv = ((lc1feedB2molarity * lc1bflowrate)/ (lc1feedA1molarity * lc1aflowrate)).toFixed(2);
        lc1feedB2text += " and " + lc1feedB2 + " (" + lc1feedB2molarity + "M, "+ lc1feedB2equiv+ " equiv.)";
    }
        
    
    //feed B component 3 equiv
    let lc1feedB3text = "";
    if (lc1feedB3.length != 0) {
        lc1feedB3equiv = ((lc1feedB3molarity * lc1bflowrate)/ (lc1feedA1molarity * lc1aflowrate)).toFixed(2);
        lc1feedB3text += " and " + lc1feedB3 + " (" + lc1feedB3molarity + "M, "+ lc1feedB3equiv + " equiv.)";
    }
        
    
    //reaction output info 
    let lc1product = document.getElementById("lc1productinput").value;
    let lc1conversion = document.getElementById("lc1conversioninput").value;
    let lc1conversionmethod = document.getElementById("lc1conversionmethod").value;
    let lc1yield = document.getElementById("lc1yieldinput").value;
    let lc1yieldmethod = document.getElementById("lc1yieldmethod").value;

    //experimental and steady state/reactor volume info
    document.getElementById("lc1experimental").innerHTML = "In a flow reactor were mixed [" + lc1feedA1text + lc1feedA2text + lc1feedA3text + "] (in " + lc1feedAsolventcommon + ") delivered at " + lc1aflowrate + " mL/min and ["+ lc1feedB1text + lc1feedB2text + lc1feedB3text + "] (in " + lc1feedBsolventcommon + ") delivered at " + lc1bflowrate + " mL/min in a " + lc1abmixerexp + " at [" + lc1abbathtempstring + lc1ablinetempstring  + lc1pressurestring + lc1sonicexp + "]. The stream was held in residence for " + lc1abtime + " s " + lc1timeinchiptext + " before collection into " + lc1quench + ". " + lc1steadystateexp + lc1collectiontimetext;
    document.getElementById("lc1reactorleaktest").innerHTML = "Leak test value = " + lc1abflowrate.toFixed(2) + " mL/min";
    document.getElementById("lc1reactorvolume").innerHTML = "Dead volume for Feed A is " + lc1reactorvolume.toFixed(2) + " mL. Roughly " + lc1steadystatetime.toFixed(2)  + " s or " + lc1steadystatevolume.toFixed(2) + " mL needed to reach steady state.";
    
    //csv
    lc1csvarray = arrayToCsv([
    ["flow_layout","a1_smiles", 'a2_smiles',"a3_smiles","b1_smiles", 'b2_smiles',"b3_smiles","c1_smiles", 'c2_smiles',"c3_smiles","molarity_a1_molar","molarity_a2_molar","molarity_a3_molar","molarity_b1_molar","molarity_b2_molar","molarity_b3_molar","molarity_c1_molar","molarity_c2_molar","molarity_c3_molar","equiv_a1","equiv_a2","equiv_a3","equiv_b1","equiv_b2","equiv_b3","equiv_c1","equiv_c2","equiv_c3","solvent_a_smiles","solvent_b_smiles","solvent_c_smiles",'flow_rate_a_mlmin',"flow_rate_b_mlmin","flowrate_c_mLmin","feedtime_a_s","feedtime_b_s","feedtime_c_s","diameter_a_mm","diameter_b_mm","diameter_c_mm","length_a_cm","length_b_cm","length_c_cm","ab_mixer_type","ab_bathtemp_deg_c","ab_linetemp_deg_c","ab_length_cm","ab_time_s","ab_diameter_mm","abc_mixer_type","abc_bathtemp_deg_c","abc_linetemp_deg_c","abc_length_cm","abc_time_s","abc_diameter_mm","bpr_pressure_psi","quench","steady_state_collection","sonication","collection_time_s","product_smiles","area_product_%","area_product_%_method","isolated_yield_%","isolated_yield_%_method","ELN","client","pump_pressures","observed_byproducts","notes"],
    ["2-input",lc1feedA1,lc1feedA2,lc1feedA3,lc1feedB1,lc1feedB2,lc1feedB3,"","","",lc1feedA1molarity,lc1feedA2molarity,lc1feedA3molarity,lc1feedB1molarity,lc1feedB2molarity,lc1feedB3molarity,"","","","1.00",lc1feedA2equiv,lc1feedA3equiv,lc1feedB1equiv,lc1feedB2equiv,lc1feedB3equiv,"","","",lc1feedAsolvent,lc1feedBsolvent,"",lc1aflowrate,lc1bflowrate,"",lc1atime,lc1btime,"",lc1adiameter,lc1bdiameter,"",lc1alength.toFixed(2),lc1blength.toFixed(2),"",lc1abmixercsv,lc1abbathtemp,lc1ablinetemp,lc1ablength.toFixed(2),lc1abtimefloat,lc1abdiameter,"","","","","","",lc1pressure,lc1quench,lc1steadystate,lc1sonic,lc1collectiontimecsv,lc1product,lc1conversion,lc1conversionmethod,lc1yield,lc1yieldmethod,"","","","",lc1notes],
]);
}


//big function to handle 2nd reactor only
function largecanvas2update(){
    
    //feed A
    let lc2aflowrate = document.getElementById("lc2aflowrateinput").value;
    let lc2adiameter = document.getElementById("lc2adiameterinput").value;
    let lc2atime = document.getElementById("lc2atimeinput").value;
    let lc2alength = (lc2atime * lc2aflowrate )/(60 * 3.1415 * ((lc2adiameter/20)**2));
    document.getElementById("lc2alength").innerHTML = "Length = " + lc2alength.toFixed(2) + " cm";
    
    //feed B
    let lc2bflowrate = document.getElementById("lc2bflowrateinput").value;
    let lc2bdiameter = document.getElementById("lc2bdiameterinput").value;
    let lc2btime = document.getElementById("lc2btimeinput").value;
    let lc2blength = (lc2btime * lc2bflowrate )/(60 * 3.1415 * ((lc2bdiameter/20)**2));
    document.getElementById("lc2blength").innerHTML = "Length = " + lc2blength.toFixed(2) + " cm";
    
    //feed C
    let lc2cflowrate = document.getElementById("lc2cflowrateinput").value;
    let lc2cdiameter = document.getElementById("lc2cdiameterinput").value;
    let lc2ctime = document.getElementById("lc2ctimeinput").value;
    let lc2clength = (lc2ctime * lc2cflowrate )/(60 * 3.1415 * ((lc2cdiameter/20)**2));
    document.getElementById("lc2clength").innerHTML = "Length = " + lc2clength.toFixed(2) + " cm";

    //AB line
    let lc2abflowrate = parseFloat(lc2aflowrate) + parseFloat(lc2bflowrate);
    let lc2abdiameter = document.getElementById("lc2abdiameterinput").value;
    let lc2abtime = document.getElementById("lc2abtimeinput").value;
    if (lc2abtime.length == 0){
        lc2abtime = 0;
    }
    else {
    }
    let lc2ablength = (lc2abtime * lc2abflowrate )/(60 * 3.1415 * ((lc2abdiameter/20)**2));
    document.getElementById("lc2ablength").innerHTML = "Length = " + lc2ablength.toFixed(2) + " cm";

    //ABC line
    let lc2abcflowrate = parseFloat(lc2abflowrate) + parseFloat(lc2cflowrate);
    let lc2abcdiameter = document.getElementById("lc2abcdiameterinput").value;
    let lc2abctime = document.getElementById("lc2abctimeinput").value;
    if (lc2abctime.length == 0){
        lc2abctime = 0;
    }
    else {
    }
    let lc2abclength = (lc2abctime * lc2abcflowrate )/(60 * 3.1415 * ((lc2abcdiameter/20)**2));
    document.getElementById("lc2abclength").innerHTML = "Length = " + lc2abclength.toFixed(2) + " cm";

    //gets SMILES/molarities for feed A
    let lc2feedA1 = document.getElementById("lc2feedA1input").value; 
    let lc2feedA1molarity = document.getElementById("lc2feedA1molarityinput").value;
    let lc2feedA2 = document.getElementById("lc2feedA2input").value; 
    let lc2feedA2molarity = document.getElementById("lc2feedA2molarityinput").value;
    let lc2feedA3 = document.getElementById("lc2feedA3input").value;
    let lc2feedA3molarity = document.getElementById("lc2feedA3molarityinput").value;
    let lc2feedAsolvent = document.getElementById("lc2feedAsolventinput").value;
    let lc2feedAsolventcommon = abbreviationOutput("lc2feedAsolventinput");

    //gets SMILES/molarities for feed B
    let lc2feedB1 = document.getElementById("lc2feedB1input").value;
    let lc2feedB1common = abbreviationOutput("lc2feedB1input"); 
    let lc2feedB1molarity = document.getElementById("lc2feedB1molarityinput").value;
    let lc2feedB2 = document.getElementById("lc2feedB2input").value;
    let lc2feedB2molarity = document.getElementById("lc2feedB2molarityinput").value;
    let lc2feedB3 = document.getElementById("lc2feedB3input").value;
    let lc2feedB3molarity = document.getElementById("lc2feedB3molarityinput").value;
    let lc2feedBsolvent = document.getElementById("lc2feedBsolventinput").value;
    let lc2feedBsolventcommon = abbreviationOutput("lc2feedBsolventinput");

    //gets SMILES/molarities for feed C
    let lc2feedC1 = document.getElementById("lc2feedC1input").value;
    let lc2feedC1molarity = document.getElementById("lc2feedC1molarityinput").value;
    let lc2feedC2 = document.getElementById("lc2feedC2input").value;
    let lc2feedC2molarity = document.getElementById("lc2feedC2molarityinput").value;
    let lc2feedC3 = document.getElementById("lc2feedC3input").value;
    let lc2feedC3molarity = document.getElementById("lc2feedC3molarityinput").value;
    let lc2feedCsolvent = document.getElementById("lc2feedCsolventinput").value;
    let lc2feedCsolventcommon = abbreviationOutput("lc2feedCsolventinput");

    //quench and notes
    let lc2quench = document.getElementById("lc2quenchinput").value;
    let lc2notes = document.getElementById("lc2notesinput").value;

    //steady state/reactor volumne info (with respect to feed A only)
    let lc2reactorvolume =  (lc2aflowrate * lc2atime / 60) + (lc2abflowrate * lc2abtime / 60) + (lc2abcflowrate * lc2abctime/60);
    
    //mixer info
    let lc2abmixernewvalue = document.getElementById("lc2abmixernew").value;
    let lc2bcmixernewvalue = document.getElementById("lc2bcmixernew").value;
    let lc2abmixernewtext = document.getElementById('lc2abmixernew').options[document.getElementById('lc2abmixernew').selectedIndex].text;
    let lc2bcmixernewtext = document.getElementById('lc2bcmixernew').options[document.getElementById('lc2bcmixernew').selectedIndex].text;

    //csv residence times for AB line and ABC line
    let lc2abtimesumval = parseFloat(lc2abtime);
    let lc2abctimesumval = parseFloat(lc2abctime);

    //both mixers unspecified
    if (lc2abmixernewvalue == "not specified" && lc2bcmixernewvalue == "not specified"){
        document.getElementById("lc2abchipadd").innerHTML = "";
        document.getElementById("lc2bcchipadd").innerHTML = "";
        lc2timeinchip1text = "";
        lc2timeinchip2text = "";
    }

    //first mixer is HTM-ST-3-1 and 2nd mixer has zero volume
    else if (lc2abmixernewvalue == "HTM-ST-3-1" && lc2bcmixernewvalue == "0") {
        lc2reactorvolume += 0.1;
        lc2timeinchip = 60 * 0.1 / lc2abflowrate;
        lc2timeinchip1text = "+ "  + lc2timeinchip.toFixed(2) + " s (in chip)"; 
        lc2abtimesumval += parseFloat(lc2timeinchip);
        lc2abtimesumval = lc2abtimesumval.toFixed(2);
        document.getElementById("lc2abchipadd").innerHTML = lc2timeinchip1text;
        document.getElementById("lc2bcchipadd").innerHTML = "";
        lc2timeinchip2text = ""; 
        lc2bcmixernewvalue = lc2bcmixernewtext;
    }
    

    //first mixer is HTM-ST-3-1 and 2nd mixer is not specified
    else if (lc2abmixernewvalue == "HTM-ST-3-1" && lc2bcmixernewvalue == "not specified") {
        lc2reactorvolume += 0.1;
        lc2timeinchip = 60 * 0.1 / lc2abflowrate;
        lc2timeinchip1text = "+ "  + lc2timeinchip.toFixed(2) + " s (in chip)"; 
        lc2abtimesumval += parseFloat(lc2timeinchip);
        lc2abtimesumval = lc2abtimesumval.toFixed(2);
        document.getElementById("lc2abchipadd").innerHTML = lc2timeinchip1text;
        document.getElementById("lc2bcchipadd").innerHTML = "";
        lc2timeinchip2text = "";
    }

    //both mixers are HTM-ST-3-1
    else if (lc2abmixernewvalue == "HTM-ST-3-1" && lc2bcmixernewvalue == "HTM-ST-3-1"){
        lc2reactorvolume += 0.1;
        lc2timeinchip = 60 * 0.055 / lc2abflowrate;
        lc2timeinchip1text = "+ "  + lc2timeinchip.toFixed(2) + " s (in chip)";
        lc2abtimesumval += parseFloat(lc2timeinchip);
        lc2abtimesumval = lc2abtimesumval.toFixed(2);
        lc2timeinchip2 = 60 * 0.055 / lc2abcflowrate;
        lc2timeinchip2text = "+ "  + lc2timeinchip2.toFixed(2) + " s (in chip)";
        lc2abctimesumval += parseFloat(lc2timeinchip2);
        lc2abctimesumval = lc2abctimesumval.toFixed(2);
        document.getElementById("lc2abchipadd").innerHTML = lc2timeinchip1text;
        document.getElementById("lc2bcchipadd").innerHTML = lc2timeinchip2text;
    }
    
    //first mixer is HTM-ST-3-1 but 2nd mixer has non-zero volume (chip)
    else if (lc2abmixernewvalue == "HTM-ST-3-1" && lc2bcmixernewvalue != "0") {
        lc2reactorvolume += 0.1;
        lc2reactorvolume += parseFloat(lc2bcmixernewvalue);
        lc2timeinchip = 60 * 0.1 / lc2abflowrate;
        lc2timeinchip1text = "+ "  + lc2timeinchip.toFixed(2) + " s (in chip)"; 
        lc2abtimesumval += parseFloat(lc2timeinchip);
        lc2abtimesumval = lc2abtimesumval.toFixed(2);
        chiptime = 60 * lc2bcmixernewvalue / lc2abcflowrate;
        lc2timeinchip2text = "+ "  + chiptime.toFixed(2) + " s (in chip)";
        lc2abctimesumval += parseFloat(chiptime);
        lc2abctimesumval = lc2abctimesumval.toFixed(2);
        document.getElementById("lc2abchipadd").innerHTML = lc2timeinchip1text;
        document.getElementById("lc2bcchipadd").innerHTML = lc2timeinchip2text;
        lc2bcmixernewvalue = lc2bcmixernewtext;
    }

    //first mixer not specified and 2nd mixer is HTM-ST-3-1
    else if (lc2abmixernewvalue == "not specified" && lc2bcmixernewvalue == "HTM-ST-3-1"){
        lc2reactorvolume += 0.1;
        lc2timeinchip1text = "";
        lc2timeinchip = 60 * 0.1 / lc2abcflowrate;
        lc2timeinchip2text = "+ "  + lc2timeinchip.toFixed(2) + " s (in chip)"; 
        lc2abctimesumval += parseFloat(lc2timeinchip);
        lc2abctimesumval = lc2abctimesumval.toFixed(2);
        document.getElementById("lc2abchipadd").innerHTML = "";
        document.getElementById("lc2bcchipadd").innerHTML = lc2timeinchip2text;
    }
    
    //first mixer is not specified and 2nd mixer has zero volume
    else if (lc2abmixernewvalue == "not specified" && lc2bcmixernewvalue == "0"){
        lc2timeinchip1text = "";
        lc2timeinchip2text = ""; 
        document.getElementById("lc2abchipadd").innerHTML = "";
        document.getElementById("lc2bcchipadd").innerHTML = "";
        lc2bcmixernewvalue = lc2bcmixernewtext;
    }
    
    //first mixer not specified and 2nd mixer has non-zero volume (chip)
    else if (lc2abmixernewvalue == "not specified" && lc2bcmixernewvalue != "0"){
        lc2reactorvolume += parseFloat(lc2bcmixernewvalue);
        lc2timeinchip1text = "";
        chiptime = 60 * lc2bcmixernewvalue / lc2abcflowrate;
        lc2timeinchip2text = "+ "  + chiptime.toFixed(2) + " s (in chip)";
        lc2abctimesumval += parseFloat(chiptime);
        lc2abctimesumval = lc2abctimesumval.toFixed(2);
        document.getElementById("lc2abchipadd").innerHTML = "";
        document.getElementById("lc2bcchipadd").innerHTML = lc2timeinchip2text;
        lc2bcmixernewvalue = lc2bcmixernewtext;
    }

    //first mixer has zero volume and 2nd mixer isn't specified
    else if (lc2abmixernewvalue == "0" && lc2bcmixernewvalue == "not specified"){
        lc2timeinchip1text = "";
        lc2timeinchip2text = "";
        document.getElementById("lc2abchipadd").innerHTML = "";
        document.getElementById("lc2bcchipadd").innerHTML = "";
        lc2abmixernewvalue = lc2abmixernewtext;
    }

    //first mixer has zero volume and 2nd mixer is HTM-ST-3-1
    else if (lc2abmixernewvalue == "0" && lc2bcmixernewvalue == "HTM-ST-3-1"){
        lc2reactorvolume += 0.1;
        lc2timeinchip1text = "";
        lc2timeinchip = 60 * 0.1 / lc2abcflowrate;
        lc2timeinchip2text = "+ "  + lc2timeinchip.toFixed(2) + " s (in chip)"; 
        lc2abctimesumval += parseFloat(lc2timeinchip);
        lc2abctimesumval = lc2abctimesumval.toFixed(2);     
        document.getElementById("lc2abchipadd").innerHTML = "";
        document.getElementById("lc2bcchipadd").innerHTML = lc2timeinchip2text;
        lc2abmixernewvalue = lc2abmixernewtext;
    }

    //both mixers have zero volume
    else if (lc2abmixernewvalue == "0" && lc2bcmixernewvalue == "0"){
        lc2timeinchip1text = "";
        lc2timeinchip2text = "";
        document.getElementById("lc2abchipadd").innerHTML = "";
        document.getElementById("lc2bcchipadd").innerHTML = "";
        lc2abmixernewvalue = lc2abmixernewtext;
        lc2bcmixernewvalue = lc2bcmixernewtext;
    }   

    //first mixer has zero volume and 2nd mixer has non-zero volume (chip)
    else if (lc2abmixernewvalue == "0" && lc2bcmixernewvalue != "0"){
        lc2reactorvolume += parseFloat(lc2bcmixernewvalue);
        lc2timeinchip1text = "";
        chiptime = 60 * lc2bcmixernewvalue / lc2abcflowrate;
        lc2timeinchip2text = "+ "  + chiptime.toFixed(2) + " s (in chip)";
        lc2abctimesumval += parseFloat(chiptime);
        lc2abctimesumval = lc2abctimesumval.toFixed(2);
        document.getElementById("lc2abchipadd").innerHTML = "";
        document.getElementById("lc2bcchipadd").innerHTML = lc2timeinchip2text;
        lc2abmixernewvalue = lc2abmixernewtext;
        lc2bcmixernewvalue = lc2bcmixernewtext;
    }

    //first mixer has non-zero volume and 2nd mixer is not specified
    else if (lc2abmixernewvalue != "0" && lc2bcmixernewvalue == "not specified"){
        lc2reactorvolume += parseFloat(lc2abmixernewvalue);
        chiptime = 60 * lc2abmixernewvalue / lc2abflowrate;
        lc2timeinchip1text = "+ "  + chiptime.toFixed(2) + " s (in chip)";
        lc2abtimesumval += parseFloat(chiptime);
        lc2abtimesumval = lc2abtimesumval.toFixed(2);
        document.getElementById("lc2abchipadd").innerHTML = lc2timeinchip1text;
        document.getElementById("lc2bcchipadd").innerHTML = "";
        lc2timeinchip2text = "";
        lc2abmixernewvalue = lc2abmixernewtext;
    }

    //first mixer has non-zero volume and 2nd mixer is HTM-ST-3-1
    else if (lc2abmixernewvalue != "0" && lc2bcmixernewvalue == "HTM-ST-3-1"){
        lc2reactorvolume += parseFloat(lc2abmixernewvalue);
        lc2reactorvolume += 0.1;
        chiptime = 60 * lc2abmixernewvalue / lc2abflowrate;
        lc2timeinchip1text = "+ "  + chiptime.toFixed(2) + " s (in chip)";
        lc2abtimesumval += parseFloat(chiptime);
        lc2abtimesumval = lc2abtimesumval.toFixed(2);
        lc2timeinchip = 60 * 0.1 / lc2abcflowrate;
        lc2timeinchip2text = "+ "  + lc2timeinchip.toFixed(2) + " s (in chip)"; 
        lc2abctimesumval += parseFloat(lc2timeinchip);
        lc2abctimesumval = lc2abctimesumval.toFixed(2);
        document.getElementById("lc2abchipadd").innerHTML = lc2timeinchip1text;
        document.getElementById("lc2bcchipadd").innerHTML = lc2timeinchip2text;
        lc2abmixernewvalue = lc2abmixernewtext;
    }

    //first mixer has non-zero volume and 2nd mixer has zero volume
    else if (lc2abmixernewvalue != "0" && lc2bcmixernewvalue == "0"){
        lc2reactorvolume += parseFloat(lc2abmixernewvalue);
        chiptime = 60 * lc2abmixernewvalue / lc2abflowrate;
        lc2timeinchip1text = "+ "  + chiptime.toFixed(2) + " s (in chip)";
        lc2abtimesumval += parseFloat(chiptime);
        lc2abtimesumval = lc2abtimesumval.toFixed(2);
        document.getElementById("lc2abchipadd").innerHTML = lc2timeinchip1text;
        document.getElementById("lc2bcchipadd").innerHTML = "";
        lc2timeinchip2text = "";
        lc2abmixernewvalue = lc2abmixernewtext;
        lc2bcmixernewvalue = lc2bcmixernewtext;
    }

    //both mixers have non-zero volume (chips)
    else if (lc2abmixernewvalue != "0" && lc2bcmixernewvalue != "0"){
        lc2reactorvolume += parseFloat(lc2abmixernewvalue);
        lc2reactorvolume += parseFloat(lc2bcmixernewvalue);
        chiptime = 60 * lc2abmixernewvalue / lc2abflowrate;
        lc2timeinchip1text = "+ "  + chiptime.toFixed(2) + " s (in chip)";
        lc2abtimesumval += parseFloat(chiptime);
        lc2abtimesumval = lc2abtimesumval.toFixed(2);
        chiptime1 = 60 * lc2bcmixernewvalue / lc2abcflowrate;
        lc2timeinchip2text = "+ "  + chiptime1.toFixed(2) + " s (in chip)";
        lc2abctimesumval += parseFloat(chiptime1);
        lc2abctimesumval = lc2abctimesumval.toFixed(2);
        document.getElementById("lc2abchipadd").innerHTML = lc2timeinchip1text;
        document.getElementById("lc2bcchipadd").innerHTML = lc2timeinchip2text;
        lc2abmixernewvalue = lc2abmixernewtext;
        lc2bcmixernewvalue = lc2bcmixernewtext;
    }

    else {
    }

    //steady state
    let lc2steadystatetime = 3 * lc2reactorvolume  /  (lc2aflowrate / 60 );
    let lc2steadystatevolume = lc2steadystatetime * lc2aflowrate/ 60;

    //bathtemp at first stage
    let lc2abbathtemp = document.getElementById("lc2abbathtempinput").value;
    let lc2abbathtempstring = "";
    if (lc2abbathtemp.length != 0) {
        lc2abbathtempstring += lc2abbathtemp + " &#8451 (bath temp)";
    }
        

    //linetemp at first stage
    let lc2ablinetemp = document.getElementById("lc2ablinetempinput").value;
    let lc2ablinetempstring = "";
    if (lc2ablinetemp.length != 0) {
        lc2ablinetempstring += ", " + lc2ablinetemp + " &#8451 (in-line temp)";
    }
        

    //bathtemp at 2nd stage
    let lc2bcbathtemp = document.getElementById("lc2bcbathtempinput").value;
    let lc2bcbathtempstring = "";
    if (lc2bcbathtemp.length != 0) {
        lc2bcbathtempstring += lc2bcbathtemp + " &#8451 (bath temp)";
    }
        

    //inline temp at 2nd stage
    let lc2bclinetemp = document.getElementById("lc2bclinetempinput").value;
    let lc2bclinetempstring = "";
    if (lc2bclinetemp.length != 0) {
        lc2bclinetempstring += ", " + lc2bclinetemp + " &#8451 (in-line temp)";
    }
        

    //pressure
    let lc2pressure = document.getElementById("lc2pressureinput").value;
    let lc2pressurestring = "";
    if (lc2pressure.length != 0) {
        lc2pressurestring += ", " + lc2pressure + " psi BPR";
    }
        
   
    //steady state
    let lc2steadystate = getValue("lc2steadystateflag");
    let lc2steadystateexp = "";
    if (lc2steadystate == "Yes") {
        lc2steadystateexp =  "Collection began at steady state after infusing 3 residence times of all feed solutions through the reactor.";
    } 
    else if (lc2steadystate == "No") {
        lc2steadystateexp = "Collection began immediately without reaching steady state.";
    }
    else {
        lc2steadystateexp = "";
    }

    //sonication
    let lc2sonic = getValue("lc2sonic");
    let lc2sonicexp = "";
    if (lc2sonic == "Yes") {
        lc2sonicexp =  " under sonication";
    } 
    else {
        lc2sonicexp = "";
    }

    //collection time
    let lc2collectiontime = document.getElementById("lc2collectiontimeinput");
    let lc2collectiontimecsv = lc2collectiontime.value;
    let lc2mmolesprocessed = (lc2aflowrate * lc2collectiontimecsv * lc2feedA1molarity / 60).toFixed(2);
    let lc2mlprocessed = (lc2aflowrate * lc2collectiontimecsv/ 60).toFixed(2);
    let lc2collectiontimetext = "";
    if (lc2collectiontimecsv.length != 0 ) {
        lc2collectiontimetext += " Yield is reported based on approximately " + lc2collectiontimecsv + " s/" + lc2mlprocessed + " mL/" + lc2mmolesprocessed + " mmol of " + lc2feedA1 + " processed.";
    }
        
    
    //feed B equivs
    let lc2feedB1equiv = "";
    let lc2feedB2equiv = "";
    let lc2feedB3equiv = "";

    //feed C equivs
    let lc2feedC1equiv = "";
    let lc2feedC2equiv = "";
    let lc2feedC3equiv = "";

    //feed A equivs
    let lc2feedA1text = "";
    if (lc2feedA1.length != 0) {
        lc2feedA1text += lc2feedA1 + " (" + lc2feedA1molarity + "M, 1 equiv.)";
    }
        
    //a2 input
    let lc2feedA2equiv = "";
    let lc2feedA2text = "";
    if (lc2feedA2.length != 0) {
        lc2feedA2equiv = (lc2feedA2molarity/lc2feedA1molarity).toFixed(2);
        lc2feedA2text += " and " + lc2feedA2 + " (" + lc2feedA2molarity + "M, "+ lc2feedA2equiv + " equiv.)";
    }
        
    //a3 input
    let lc2feedA3equiv = "";
    let lc2feedA3text = "";
    if (lc2feedA3.length != 0) {
        lc2feedA3equiv = (lc2feedA3molarity/lc2feedA1molarity).toFixed(2);
        lc2feedA3text += " and " + lc2feedA3 + " (" + lc2feedA3molarity + "M, "+ lc2feedA3equiv + " equiv.)";
    }
        
    
    //feed B component 1 equiv
    let lc2feedB1text = "";
    if (lc2feedB1.length != 0) {
        lc2feedB1equiv = ((lc2feedB1molarity * lc2bflowrate)/ (lc2feedA1molarity * lc2aflowrate)).toFixed(2);
        lc2feedB1text += lc2feedB1common + " (" + lc2feedB1molarity + "M, "+ lc2feedB1equiv + " equiv.)";
    }
        
    
    //feed B component 2 equiv
    let lc2feedB2text = "";
    if (lc2feedB2.length != 0) {
        lc2feedB2equiv = ((lc2feedB2molarity * lc2bflowrate)/ (lc2feedA1molarity * lc2aflowrate)).toFixed(2);
        lc2feedB2text += " and " + lc2feedB2 + " (" + lc2feedB2molarity + "M, "+ lc2feedB2equiv + " equiv.)";
    }
        
    
    //feed B component 3 equiv
    let lc2feedB3text = "";
    if (lc2feedB3.length != 0) {
        lc2feedB3equiv = ((lc2feedB3molarity * lc2bflowrate)/ (lc2feedA1molarity * lc2aflowrate)).toFixed(2);
        lc2feedB3text += " and " + lc2feedB3 + " (" + lc2feedB3molarity + "M, "+ lc2feedB3equiv + " equiv.)";
    }
        
    
    //feed C component 1 equiv
    let lc2feedC1text = "";
    if (lc2feedC1.length != 0) {
        lc2feedC1equiv = ((lc2feedC1molarity * lc2cflowrate)/ (lc2feedA1molarity * lc2aflowrate)).toFixed(2);
        lc2feedC1text += lc2feedC1 + " (" + lc2feedC1molarity + "M, "+ lc2feedC1equiv + " equiv.)";
    }
        
    
    //feed C component 2 equiv
    let lc2feedC2text = "";
    if (lc2feedC2.length != 0) {
        lc2feedC2equiv = ((lc2feedC2molarity * lc2cflowrate)/ (lc2feedA1molarity * lc2aflowrate)).toFixed(2);
        lc2feedC2text += " and " + lc2feedC2 + " (" + lc2feedC2molarity + "M, "+ lc2feedC2equiv + " equiv.)";
    }
        
    
    //feed C component 3 equiv
    let lc2feedC3text = "";
    if (lc2feedC3.length != 0) {
        lc2feedC3equiv = ((lc2feedC3molarity * lc2cflowrate)/ (lc2feedA1molarity * lc2aflowrate)).toFixed(2);
        lc2feedC3text += " and " + lc2feedC3 + " (" + lc2feedC3molarity + "M, "+ lc2feedC3equiv + " equiv.)";
    }
        
    
    //reaction output info
    let lc2product = document.getElementById("lc2productinput").value;
    let lc2conversion = document.getElementById("lc2conversioninput").value;
    let lc2conversionmethod = document.getElementById("lc2conversionmethod").value;
    let lc2yield = document.getElementById("lc2yieldinput").value;
    let lc2yieldmethod = document.getElementById("lc2yieldmethod").value;

    //experimental and dead volume/steady state info
    document.getElementById("lc2experimental").innerHTML = "In a flow reactor were mixed [" + lc2feedA1text + lc2feedA2text + lc2feedA3text + "] (in " + lc2feedAsolventcommon + ") delivered at " + lc2aflowrate + " mL/min and ["+ lc2feedB1text + lc2feedB2text + lc2feedB3text + "] (in " + lc2feedBsolventcommon + ") delivered at " + lc2bflowrate + " mL/min in a " + lc2abmixernewvalue + " at [" + lc2abbathtempstring + lc2ablinetempstring  + lc2pressurestring + lc2sonicexp + "]. The stream was held in residence for " + lc2abtime + " s " + lc2timeinchip1text  + " and then mixed with [" + lc2feedC1text + lc2feedC2text + lc2feedC3text + "] (in " + lc2feedCsolventcommon + ") delivered at " + lc2cflowrate + " mL/min in a " + lc2bcmixernewvalue + " at [" + lc2bcbathtempstring + lc2bclinetempstring  +  "]. The stream was held in residence for " + lc2abctime + " s " + lc2timeinchip2text + " before collection into " + lc2quench + ". " + lc2steadystateexp + lc2collectiontimetext;
    document.getElementById("lc2reactorleaktest").innerHTML = "Leak test value = " + lc2abcflowrate.toFixed(2) + " mL/min";
    document.getElementById("lc2reactorvolume").innerHTML = "Dead volume for Feed A is " + lc2reactorvolume.toFixed(2) + " mL. Roughly " + lc2steadystatetime.toFixed(2)  + " s or " + lc2steadystatevolume.toFixed(2) + " mL needed to reach steady state.";
    
    //csv
    lc2csvarray = arrayToCsv([
    ["flow_layout","a1_smiles", 'a2_smiles',"a3_smiles","b1_smiles", 'b2_smiles',"b3_smiles","c1_smiles", 'c2_smiles',"c3_smiles","molarity_a1_molar","molarity_a2_molar","molarity_a3_molar","molarity_b1_molar","molarity_b2_molar","molarity_b3_molar","molarity_c1_molar","molarity_c2_molar","molarity_c3_molar","equiv_a1","equiv_a2","equiv_a3","equiv_b1","equiv_b2","equiv_b3","equiv_c1","equiv_c2","equiv_c3","solvent_a_smiles","solvent_b_smiles","solvent_c_smiles",'flow_rate_a_mlmin',"flow_rate_b_mlmin","flowrate_c_mLmin","feedtime_a_s","feedtime_b_s","feedtime_c_s","diameter_a_mm","diameter_b_mm","diameter_c_mm","length_a_cm","length_b_cm","length_c_cm","ab_mixer_type","ab_bathtemp_deg_c","ab_linetemp_deg_c","ab_length_cm","ab_time_s","ab_diameter_mm","abc_mixer_type","abc_bathtemp_deg_c","abc_linetemp_deg_c","abc_length_cm","abc_time_s","abc_diameter_mm","bpr_pressure_psi","quench","steady_state_collection","sonication","collection_time_s","product_smiles","area_product_%","area_product_%_method","isolated_yield_%","isolated_yield_%_method","ELN","client","pump_pressures","observed_byproducts","notes"],
    ["3-input",lc2feedA1,lc2feedA2,lc2feedA3,lc2feedB1,lc2feedB2,lc2feedB3,lc2feedC1,lc2feedC2,lc2feedC3,lc2feedA1molarity,lc2feedA2molarity,lc2feedA3molarity,lc2feedB1molarity,lc2feedB2molarity,lc2feedB3molarity,lc2feedC1molarity,lc2feedC2molarity,lc2feedC3molarity,"1.00",lc2feedA2equiv,lc2feedA3equiv,lc2feedB1equiv,lc2feedB2equiv,lc2feedB3equiv,lc2feedC1equiv,lc2feedC2equiv,lc2feedC3equiv,lc2feedAsolvent,lc2feedBsolvent,lc2feedCsolvent,lc2aflowrate,lc2bflowrate,lc2cflowrate,lc2atime,lc2btime,lc2ctime,lc2adiameter,lc2bdiameter,lc2cdiameter,lc2alength.toFixed(2),lc2blength.toFixed(2),lc2clength.toFixed(2),lc2abmixernewvalue,lc2abbathtemp,lc2ablinetemp,lc2ablength.toFixed(2),lc2abtimesumval,lc2abdiameter,lc2bcmixernewvalue,lc2bcbathtemp,lc2bclinetemp,lc2abclength.toFixed(2),lc2abctimesumval,lc2abcdiameter,lc2pressure,lc2quench,lc2steadystate,lc2sonic,lc2collectiontimecsv,lc2product,lc2conversion,lc2conversionmethod,lc2yield,lc2yieldmethod,"","","","",lc2notes],
]);
}


//big function to handle 3rd reactor (currently only calculates line lengths needed and thus has much less functionality than first two reactors)
function largecanvas3update(){
    let lc3aflowrate = document.getElementById("lc3aflowrateinput").value;
    let lc3adiameter = document.getElementById("lc3adiameterinput").value;
    let lc3atime = document.getElementById("lc3atimeinput").value;
    let lc3alength = (lc3atime * lc3aflowrate )/(60 * 3.1415 * ((lc3adiameter/20)**2));
    document.getElementById("lc3alength").innerHTML = "Length = " + lc3alength.toFixed(2) + " cm";

    let lc3bflowrate = document.getElementById("lc3bflowrateinput").value;
    let lc3bdiameter = document.getElementById("lc3bdiameterinput").value;
    let lc3btime = document.getElementById("lc3btimeinput").value;
    let lc3blength = (lc3btime * lc3bflowrate )/(60 * 3.1415 * ((lc3bdiameter/20)**2));
    document.getElementById("lc3blength").innerHTML = "Length = " + lc3blength.toFixed(2) + " cm";

    let lc3cflowrate = document.getElementById("lc3cflowrateinput").value;
    let lc3cdiameter = document.getElementById("lc3cdiameterinput").value;
    let lc3ctime = document.getElementById("lc3ctimeinput").value;
    let lc3clength = (lc3ctime * lc3cflowrate )/(60 * 3.1415 * ((lc3cdiameter/20)**2));
    document.getElementById("lc3clength").innerHTML = "Length = " + lc3clength.toFixed(2) + " cm";

    let lc3abflowrate = parseFloat(lc3aflowrate) + parseFloat(lc3bflowrate);
    let lc3abdiameter = document.getElementById("lc3abdiameterinput").value;
    let lc3abtime = document.getElementById("lc3abtimeinput").value;
    let lc3ablength = (lc3abtime * lc3abflowrate )/(60 * 3.1415 * ((lc3abdiameter/20)**2));
    document.getElementById("lc3ablength").innerHTML = "Length = " + lc3ablength.toFixed(2) + " cm";

    let lc3abcflowrate = parseFloat(lc3abflowrate) + parseFloat(lc3cflowrate);
    let lc3abcdiameter = document.getElementById("lc3abcdiameterinput").value;
    let lc3abctime = document.getElementById("lc3abctimeinput").value;
    let lc3abclength = (lc3abctime * lc3abcflowrate )/(60 * 3.1415 * ((lc3abcdiameter/20)**2));
    document.getElementById("lc3abclength").innerHTML = "Length = " + lc3abclength.toFixed(2) + " cm";

    let lc3dflowrate = document.getElementById("lc3dflowrateinput").value;
    let lc3ddiameter = document.getElementById("lc3ddiameterinput").value;
    let lc3dtime = document.getElementById("lc3dtimeinput").value;
    let lc3dlength = (lc3dtime * lc3dflowrate )/(60 * 3.1415 * ((lc3ddiameter/20)**2));
    document.getElementById("lc3dlength").innerHTML = "Length = " + lc3dlength.toFixed(2) + " cm";

    let lc3abcdflowrate = parseFloat(lc3abcflowrate) + parseFloat(lc3dflowrate);
    let lc3abcddiameter = document.getElementById("lc3abcddiameterinput").value;
    let lc3abcdtime = document.getElementById("lc3abcdtimeinput").value;
    let lc3abcdlength = (lc3abcdtime * lc3abcdflowrate )/(60 * 3.1415 * ((lc3abcddiameter/20)**2));
    document.getElementById("lc3abcdlength").innerHTML = "Length = " + lc3abcdlength.toFixed(2) + " cm";
    
}

//big function to handle 4th reactor (currently only calculates line lengths needed and thus has much less functionality than first two reactors)
function largecanvas4update(){
    let lc4aflowrate = document.getElementById("lc4aflowrateinput").value;
    let lc4adiameter = document.getElementById("lc4adiameterinput").value;
    let lc4atime = document.getElementById("lc4atimeinput").value;
    let lc4alength = (lc4atime * lc4aflowrate )/(60 * 3.1415 * ((lc4adiameter/20)**2));
    document.getElementById("lc4alength").innerHTML = "Length = " + lc4alength.toFixed(2) + " cm";

    let lc4bflowrate = document.getElementById("lc4bflowrateinput").value;
    let lc4bdiameter = document.getElementById("lc4bdiameterinput").value;
    let lc4btime = document.getElementById("lc4btimeinput").value;
    let lc4blength = (lc4btime * lc4bflowrate )/(60 * 3.1415 * ((lc4bdiameter/20)**2));
    document.getElementById("lc4blength").innerHTML = "Length = " + lc4blength.toFixed(2) + " cm";

    let lc4cflowrate = document.getElementById("lc4cflowrateinput").value;
    let lc4cdiameter = document.getElementById("lc4cdiameterinput").value;
    let lc4ctime = document.getElementById("lc4ctimeinput").value;
    let lc4clength = (lc4ctime * lc4cflowrate )/(60 * 3.1415 * ((lc4cdiameter/20)**2));
    document.getElementById("lc4clength").innerHTML = "Length = " + lc4clength.toFixed(2) + " cm";

    let lc4dflowrate = document.getElementById("lc4dflowrateinput").value;
    let lc4ddiameter = document.getElementById("lc4ddiameterinput").value;
    let lc4dtime = document.getElementById("lc4dtimeinput").value;
    let lc4dlength = (lc4dtime * lc4dflowrate )/(60 * 3.1415 * ((lc4ddiameter/20)**2));
    document.getElementById("lc4dlength").innerHTML = "Length = " + lc4dlength.toFixed(2) + " cm";

    let lc4abflowrate = parseFloat(lc4aflowrate) + parseFloat(lc4bflowrate);
    let lc4abdiameter = document.getElementById("lc4abdiameterinput").value;
    let lc4abtime = document.getElementById("lc4abtimeinput").value;
    let lc4ablength = (lc4abtime * lc4abflowrate )/(60 * 3.1415 * ((lc4abdiameter/20)**2));
    document.getElementById("lc4ablength").innerHTML = "Length = " + lc4ablength.toFixed(2) + " cm";

    let lc4cdflowrate = parseFloat(lc4cflowrate) + parseFloat(lc4dflowrate);
    let lc4cddiameter = document.getElementById("lc4cddiameterinput").value;
    let lc4cdtime = document.getElementById("lc4cdtimeinput").value;
    let lc4cdlength = (lc4cdtime * lc4cdflowrate )/(60 * 3.1415 * ((lc4cddiameter/20)**2));
    document.getElementById("lc4cdlength").innerHTML = "Length = " + lc4cdlength.toFixed(2) + " cm";

    let lc4abcdflowrate = parseFloat(lc4abflowrate) + parseFloat(lc4cdflowrate);
    let lc4abcddiameter = document.getElementById("lc4abcddiameterinput").value;
    let lc4abcdtime = document.getElementById("lc4abcdtimeinput").value;
    let lc4abcdlength = (lc4abcdtime * lc4abcdflowrate )/(60 * 3.1415 * ((lc4abcddiameter/20)**2));
    document.getElementById("lc4abcdlength").innerHTML = "Length = " + lc4abcdlength.toFixed(2) + " cm";
}

//function taken from https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side 
//allows for download of csv data
function downloadBlob(content, filename, contentType) {
  var blob = new Blob([content], { type: contentType });
  var url = URL.createObjectURL(blob);
  var pom = document.createElement('a');
  pom.href = url;
  pom.setAttribute('download', filename);
  pom.click();
}

