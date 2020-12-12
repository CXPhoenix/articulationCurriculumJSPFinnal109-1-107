function hintSwitch(evt, hintdiv) {
    var hintbtnList = document.getElementsByClassName("hintbtn");
    
    // remove all hintbtn class who in " active"
    for (var i = 0; i < hintbtnList.length; i++) {
        hintbtnList[i] = hintbtnList[i].className.replace(" active","");
    }
    
    // get the hint div
    var nowHint = document.getElementById(hintdiv);
    
//    console.log(nowHint);
    
    // nowbtn had new class "active"
    var nowbtn = evt.currentTarget;
    
    var hintswitcher = nowbtn.children[0]
    
//    console.log(hintswitcher)
    
    if (hintswitcher.innerHTML == "開啟") {
        nowbtn.className += " active";
        hintswitcher.innerHTML = "關閉";
        nowHint.style.display = "block";
    }
    else if (hintswitcher.innerHTML == "關閉") {
        hintswitcher.innerHTML = "開啟";
        nowHint.style.display = "none";
    }
    
}