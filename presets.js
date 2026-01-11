
function preset1(){
    //"halogen-lithium exchange small scale reactor"
    
    //feed A flow rate
    document.getElementById("lc2aflowrateinput").value = 4.25;
    //feed A diameter
    document.getElementById("lc2adiameterinput").value = 0.5;
    //feed A residence time
    document.getElementById("lc2atimeinput").value = 10;
    

    //feed B flow rate
    document.getElementById("lc2bflowrateinput").value = 0.876;
    //feed B diameter
    document.getElementById("lc2bdiameterinput").value = 0.5;
    //feed B residence time
    document.getElementById("lc2btimeinput").value = 10;

    //feed C flow rate
    document.getElementById("lc2cflowrateinput").value = 1.53;
    //feed C diameter
    document.getElementById("lc2cdiameterinput").value = 0.5;
    //feed C residence time
    document.getElementById("lc2ctimeinput").value = 10;


    //AB line diameter
    document.getElementById("lc2abdiameterinput").value = 0.5;
    //AB line residence time
    document.getElementById("lc2abtimeinput").value = 1;

    //ABC line diameter
    document.getElementById("lc2abcdiameterinput").value = 0.8;
    //ABC line residence time
    document.getElementById("lc2abctimeinput").value = 2;


    //feed A component 1 name
    document.getElementById("lc2feedA1input").value = "SMILES1";
    //feed B component 1 name
    document.getElementById("lc2feedB1input").value = "[Li+].CCC[CH2-]";
    //feed C component 1 name
    document.getElementById("lc2feedC1input").value = "SMILES2";


    //feed A component 1 molarity
    document.getElementById("lc2feedA1molarityinput").value = 0.15;
    //feed B component 1 molarity
    document.getElementById("lc2feedB1molarityinput").value = 0.8;
    //feed C component 1 molarity
    document.getElementById("lc2feedC1molarityinput").value = 0.5;


    //feed A solvent name
    document.getElementById("lc2feedAsolventinput").value = "C1CCOC1";
    //feed B solvent name
    document.getElementById("lc2feedBsolventinput").value = "CCCCCC";
    //feed C solvent name
    document.getElementById("lc2feedCsolventinput").value = "C1CCOC1";

    
}


function preset2(){
    //reactor description
    document.getElementById("lc2aflowrateinput").value = 8;
    document.getElementById("lc2adiameterinput").value = 1.6;
    document.getElementById("lc2atimeinput").value = 15;
    
    document.getElementById("lc2bflowrateinput").value = 2;
    document.getElementById("lc2bdiameterinput").value = 0.5;
    document.getElementById("lc2btimeinput").value = 15; 

    document.getElementById("lc2cflowrateinput").value = 3;
    document.getElementById("lc2cdiameterinput").value = 1.6;
    document.getElementById("lc2ctimeinput").value = 15;

    document.getElementById("lc2abdiameterinput").value = 1;
    document.getElementById("lc2abtimeinput").value = 2;

    document.getElementById("lc2abcdiameterinput").value = 1;
    document.getElementById("lc2abctimeinput").value = 3;

    document.getElementById("lc2feedB1input").value = "[Li+].CCCCC[CH2-]";

    document.getElementById("lc2feedA1molarityinput").value = 0.3;
    document.getElementById("lc2feedB1molarityinput").value = 1.6;
    document.getElementById("lc2feedC1molarityinput").value = 2.3;

    document.getElementById("lc2feedAsolventinput").value = "C1CCOC1";
    document.getElementById("lc2feedBsolventinput").value = "CCCCCC";
    document.getElementById("lc2feedCsolventinput").value = "C1CCOC1";
}

function preset3(){
    //reactor description
    document.getElementById("lc2aflowrateinput").value = 80;
    document.getElementById("lc2adiameterinput").value = 1.6;
    document.getElementById("lc2atimeinput").value = 20;
    
    document.getElementById("lc2bflowrateinput").value = 10;
    document.getElementById("lc2bdiameterinput").value = 1.6;
    document.getElementById("lc2btimeinput").value = 25; 

    document.getElementById("lc2cflowrateinput").value = 60;
    document.getElementById("lc2cdiameterinput").value = 1.6;
    document.getElementById("lc2ctimeinput").value = 25;

    document.getElementById("lc2abdiameterinput").value = 2;
    document.getElementById("lc2abtimeinput").value = 3;

    document.getElementById("lc2abcdiameterinput").value = 1;
    document.getElementById("lc2abctimeinput").value = 5;

    document.getElementById("lc2feedA1molarityinput").value = 0.4;
    document.getElementById("lc2feedB1molarityinput").value = 2.5;
    document.getElementById("lc2feedC1molarityinput").value = 2;

    document.getElementById("lc2feedAsolventinput").value = "C1CCOC1";
    document.getElementById("lc2feedBsolventinput").value = "CCCCCC";
    document.getElementById("lc2feedCsolventinput").value = "C1CCOC1";
}