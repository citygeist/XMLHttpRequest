/* 
ULTRACODEX MODELING
AJAX SYS-LAYER LOADER
AUTOR:Z=OM
EMAIL:info@citygeist.de
VERSION:0.3
BUILD:03.0401.2012
*/

/* INIT */
var xmlHttpObject = false;
if (typeof XMLHttpRequest != 'undefined') {
	xmlHttpObject = new XMLHttpRequest();
}
if (!xmlHttpObject) {
    try { xmlHttpObject = new ActiveXObject("Msxml2.XMLHTTP"); }
    catch(e) {
        try { xmlHttpObject = new ActiveXObject("Microsoft.XMLHTTP");}
        catch(e) { xmlHttpObject = null; }
    }
}

/* LAYER */
function LDL(){
    if (xmlHttpObject.readyState == 4){
		var GetXON = xmlHttpObject.GetXIN;
		document.getElementById(GetXON).innerHTML = xmlHttpObject.responseText;
    }
}

/* MODUL */
function LM(M){
	var M 			= M;
	var sndX='M='+M;
  xmlHttpObject.open('post','',true);
	xmlHttpObject.GetXIN = 'html';
	xmlHttpObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlHttpObject.onreadystatechange = LDL;
	xmlHttpObject.send(sndX);
}

/* |||||Z||||| */
function ID(ID_MOD){	LM(ID_MOD,'1','0','0'); }
function DB(){ LM('0','0','0','0'); }
