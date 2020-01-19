function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var visitCount = getCookie("visitCount");
    var allowedCookies = getCookie("allowedCookies");
    if (visitCount != 0 && allowedCookies != 0) {
        setCookie("visitCount", ++visitCount, 30);
        document.getElementById("welcome").innerHTML = "You\'ve visited " + visitCount + " times!";
    } else if(visitCount == 0 && allowedCookies != 0) {
        setCookie("visitCount", 1, 30);
        document.getElementById("welcome").innerHTML = "This is your first visit!";
    } else {
        document.getElementById("footer").innerHTML = "<button class=\"footerButton\" onclick=\"allowCookies()\">ALLOW COOKIES</button><p class=\"blink\" style=\"color: red;\">SCRIPT ERROR</p>";
    }
}

function allowCookies() {
    setCookie("allowedCookies", 1, 30);
    location.reload(true);
}

function onClick(targetPage) {
    var audio = new Audio("data:audio/wav;base64,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");
    audio.play();
    setTimeout(function(){
        location.href = targetPage;
    }, 300);
}

