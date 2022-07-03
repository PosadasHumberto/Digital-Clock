function showTime() {
    //recuperation d'elements du DOM
    var myDiv = document.getElementById("ClockDisplay")

    //declaration de variables necessaires
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
  

    //formatage des variables
    (h<10)? h="0"+h : h=h;
    (m<10)? m="0"+m : m=m;
    (s<10)? s="0"+s : s=s;

    //appliquer les variables a l'element myDiv
    var time = h + ":" + m + ":" + s;
    myDiv.innerHTML = time;
    myDiv.textContent = time;

    setTimeout(showTime, 1000);         //executer la fonction tous les 1000mS
    
}

showTime();