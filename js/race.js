var xMargin = 250;
var yMargin = -100;
var scrollPosition = 0;
var ySeparation = 30;
var FullData;
var position = [];
var factor = 1.0;
var raceType = "cases";

var virusImg = document.createElement('img');
virusImg.id = 'virusCross';
virusImg.className = 'objImg';
virusImg.src = './Images/cross2.gif';
virusImg.width = 30;
virusImg.height = 30;

// window.onload = function () {

//     var info = document.getElementById("info");
// }
// window.onload = showViewport;
window.onresize = showViewport;

//mobile?
mobileClient = IsMobile();

if (!mobileClient) {
    var all = document.getElementsByClassName('fa');
    for (var i = 0; i < all.length; i++) {
        all[i].style.fontSize = "20px";
        all[i].style.width = "20px";
        all[i].style.height = "20px";
    }
    document.getElementById("paypalImg").style.width = "";
} else {
    var all = document.getElementsByClassName('fa');
    for (var i = 0; i < all.length; i++) {
        all[i].style.fontSize = "50px";
        all[i].style.width = "50px";
        all[i].style.height = "50px";
    }
    document.getElementById("paypalImg").style.width = "200px";
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width;
var ch = canvas.height;

var hotspots = [
    { x: 100, y: 100, radius: 20, tip: 'You are over 100,100' },
    { x: 100, y: 200, radius: 20, tip: 'You are over 100,200' },
];

//draw();

// $("#canvas").mousemove(function (e) { handleMouseMove(e); });

// function draw() {
//     for (var i = 0; i < hotspots.length; i++) {
//         var h = hotspots[i];
//         ctx.beginPath();
//         ctx.arc(h.x, h.y, h.radius, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.stroke();
//     }
// }
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function handleMouseMove(e) {
    // tell the browser we're handling this event
    e.preventDefault();
    e.stopPropagation();

    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    //  ctx.drawImage(nube, $(window).width() - 100, 100, 80, 50);
    //ctx.clearRect(0,0,cw,ch);
    //draw();
    //   for(var i=0;i<hotspots.length;i++){
    //     var h=hotspots[i];
    //     var dx=mouseX-h.x;
    //     var dy=mouseY-h.y;

    //     ctx.fillText("Aqui",mouseX,mouseY);
    //     // if(dx*dx+dy*dy<h.radius*h.radius){
    //     //   ctx.fillText(h.tip,h.x,h.y);
    //     // }
    //   }

}

function showViewport() {
    var wwidth = $(window).width();
    var wheight = $(window).height();
}

var currentValue = 0;
function handleClick(myRadio) {
    raceType = myRadio.value;
}

function IsMobile() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

var scoreposy;
var scoreposx;
var scoreposy2;
var scoreposx2;
var factor = 1;

// the main function
function startRace() {
    document.getElementById("buttonStart").style.visibility = "hidden";
    document.getElementById("buttonStart").disabled = true;
    var position1 = 0;
    var position2 = 0;
    ctx.font = "20px Papyrus";
    ctx.fillStyle = "white";
    var posRip = 1;
    var posVirus = 1;
    var restartRip = true;
    var restartVirus = true;
    var numriders = 11;
    var loopCount = 0;

    // get the real data
    GetData();

    var t = setInterval(run, 100);

    // the infinite loop
    function run() {

        if (loopCount == 600) {
            GetData();
            loopCount = 0;
        }

        FullData.sort(function (a, b) {
            if (raceType == "deaths") {
                var keyA = a.deaths,
                    keyB = b.deaths;
            }
            else if (raceType == "cases") {
                var keyA = a.cases,
                    keyB = b.cases;
            }
            else if (raceType == "mortality") {
                var keyA = a.deaths / a.cases,
                    keyB = b.deaths / b.cases;
            }
            // Compare the 2 dates
            if (keyA < keyB) return 1;
            if (keyA > keyB) return -1;
            return 0;
        });

        var wwidth = $(window).width();
        var wheight = $(window).height();
        var circuitLength = wwidth - 80;

        var yinc = (wheight / 2 + yMargin) / numriders;
        ctx.globalAlpha = 1;
        ctx.drawImage(background, -scrollPosition, 0, wwidth, wheight);
        ctx.drawImage(background, wwidth - scrollPosition, 0, wwidth, wheight);
        scrollPosition += 20;
        scrollPosition %= wwidth;

        if (restartVirus) {
            posVirus = Math.floor((Math.random() * 11));
            virusPosition = wwidth;
            restartVirus = false;
        }

        if (restartRip) {
            posRip = Math.floor((Math.random() * 11));
            ripPosition = 0;
            restartRip = false;
        }

        //ordering the vector depending on type of race
        var max;
        if (raceType == "deaths") {
            max = FullData.reduce(function (prev, current) {
                return (prev.deaths > current.deaths) ? prev : current
            })
        } else if (raceType == "cases") {
            max = FullData.reduce(function (prev, current) {
                return (prev.cases > current.cases) ? prev : current
            })
        } else if (raceType == "mortality") {
            max = FullData.reduce(function (prev, current) {
                return (prev.deaths / prev.cases > current.deaths / current.cases) ? prev : current
            })
        }

        sizetype = 0;

        DrawPanels(wwidth, wheight);

        var posx, posy;
        var arrayTakenGIF = [];
        for (k = 0; k < numriders; k++) {
            if (mapping[FullData[k].country] != undefined) arrayTakenGIF[mapping[FullData[k].country].Index] = true;
        }
        var element;

        j = 1;
        for (i = 0; i < numriders/*FullData.length*/; i++) {
            // text += FullData[i]. + "<br>";
            if (raceType == "deaths") {
                position[i] = FullData[i].deaths * (wwidth - 2 * xMargin) / max.deaths;// * (window.innerWidth / 980);
            } else if (raceType == "cases") {
                position[i] = FullData[i].cases * (wwidth - 2 * xMargin) / max.cases;// * (window.innerWidth / 980);
            } else if (raceType == "mortality") {
                position[i] = (FullData[i].deaths / FullData[i].cases) * (wwidth - 2 * xMargin) / (max.deaths / max.cases * 100);// * (window.innerWidth / 980);
            }
            // position[i] = FullData[i].deaths * (wwidth - 2 * xMargin) / max.deaths;// * (window.innerWidth / 980);
            var country = mapping[FullData[i].country];

            if (country != undefined) {
                //     arrayTakenGIF[country.Index] = true;
                posx = (position[i] + xMargin);
                element = document.getElementById(country.FirstName);
                posy = (yMargin + wheight / 2 + yinc * i) - element.height / 2 + 60;

                element.style.zIndex = i+10;
                element.style.left = posx + "px";
                //   document.getElementById("horse" + (i+1)).style.top =  1*i + "px";
                element.parentElement.style.top = posy + "px";
                if (FullData[i].country == "Italy") {
                    //if (document.getElementById("horse2" + (i + 1)) != null) {
                    document.getElementById("horse2" + (country.Index)).style.left = (position[i] + xMargin - 150) + "px";
                    document.getElementById("horse2" + (country.Index)).parentElement.style.top = ((yMargin + wheight / 2 + yinc * i) - document.getElementById("horse2" + (country.Index)).height / 2 + 45) + "px";
                }
            }
            else {
                // j = i;
                // if (j==0) j=1;
                while (arrayTakenGIF[j]) j = (j) % 11 + 1;
                posx = (position[i] + xMargin);
                element = document.getElementById("horse" + (j));
                posy = (yMargin + wheight / 2 + yinc * i) - element.height / 2 + 70;
                element.style.zIndex = i+10;
                element.style.left = posx + "px";
                //   document.getElementById("horse" + (i+1)).style.top =  1*i + "px";
                element.parentElement.style.top = posy + "px";
                if (document.getElementById("horse2" + (j)) != null) {
                    document.getElementById("horse2" + (j)).style.left = (position[i] + xMargin - 150) + "px";
                    document.getElementById("horse2" + (j)).parentElement.style.top = ((yMargin + wheight / 2 + yinc * i) - document.getElementById("horse2" + (j)).height / 2 + 70) + "px";
                }
                j++;
            }
            // updating rip
            if (posRip == i) {
                ctx.drawImage(tomb, (position[i] + xMargin) - ripPosition + 80, (yMargin + wheight / 2 + yinc * i) + 30, 40, 40);
                if ((position[i] + xMargin) - ripPosition < 0) {
                    restartRip = true;
                }
                ripPosition += 20;
            }

            // virus rolling
            //posVirus = 9;
            if (posVirus == i) {

                //update virus:
                for (k = 0; k < 1; k++) {
                    document.getElementById("virus" + (k + 1)).style.left = (virusPosition - 50 - document.getElementById("virus" + (k + 1)).width) + "px";
                    //   document.getElementById("horse" + (i+1)).style.top =  1*i + "px";
                    document.getElementById("virus" + (k + 1)).parentElement.style.top = ((yMargin + wheight / 2 + yinc * i) + 70) + "px"; //((yMargin + wheight / 2 + yinc * i) + 30) + "px";
                    //  ctx.drawImage(nena,window.innerWidth-scrollPosition,(600)*(window.innerHeight/1963)+30,40,40); 
                }

                // ctx.drawImage(virus, wwidth - virusPosition + 80, (yMargin + wheight / 2 + yinc * i) + 30, 40, 40);
                if (virusPosition - posx - 200 <= 0 ) {
                    // virus hit the target, we replace it

                    clonedElement = element.cloneNode();
                    storedElement = element;
                    storedImage = element.src;
                    element.src = './Images/cross.gif';
                    element.width = 30;
                    element.height = 30;
                   // element.parentNode.replaceChild(virusImg, element);
                   window.setTimeout(restoreElement, 1000);
                    restartVirus = true;
                }
                virusPosition = (virusPosition - 20);// % wwidth;// += 20;
            }
//

            var record = FullData[i];
            WriteCountryLine(record, (yMargin + wheight / 2 + yinc * i) + 90, posx, factor);

            ctx.textAlign = 'right';
            if (i < 5) {
                WriteScore(record, i, scoreposx, scoreposy, factor);
            } else if (i < 10 && sizetype != 3) {
                WriteScore(FullData[i], i, scoreposx2, scoreposy2, factor);
            }
        }

        //update objects:
        for (j = 0; j < 1; j++) {
            document.getElementById("objImg" + (j + 1)).style.left = (wwidth - 100 - scrollPosition) + "px";
            //   document.getElementById("horse" + (i+1)).style.top =  1*i + "px";
            document.getElementById("objImg" + (j + 1)).parentElement.style.top = (100+wheight / 2 + 2 * yMargin) + "px";
            //  ctx.drawImage(nena,window.innerWidth-scrollPosition,(600)*(window.innerHeight/1963)+30,40,40); 
        }


        // }
        loopCount++;
    }
}

function restoreElement() {
storedElement.src = clonedElement.src; //storedImage;
storedElement.width = clonedElement.width;
storedElement.height = clonedElement.height;
clonedElement = null;
}

function showInfo() {
    toggleModal();
}

function WriteCountryLine(record, posy, posx, factor) {
    ctx.globalAlpha = 1;
    ctx.textAlign = 'left';
    ctx.fillStyle = "white";
    ctx.font = (20 * factor) + "px Papyrus";
    ctx.fillText(record.country, 20, posy, 150);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';
    ctx.beginPath();
    ctx.setLineDash([5, 15]);
    ctx.moveTo(150, posy);
    posx = record.country == "Italy" ? posx - 100 : posx;
    ctx.lineTo(posx, posy);
    ctx.stroke();
}

function DrawPanels(wwidth, wheight) {
    if (wwidth < 1000) {
        // case mobile  -  two sections but test first if they fit
        if (wheight / 2 > 400) {
            sizetype = 2;
            // we put both
            var sizex = 500; // do not change
            factorx = (wwidth - 100) / sizex;
            factory = (wheight / 2 - 300) / 260;
            factor = factorx < factory ? factorx : factory;

            //factor = 1.7;
            scoreposy = mobileClient ? 260 : 230;
            scoreposx = wwidth / 2 - sizex / 2 * factor;
            scoreposy2 = scoreposy + 130 * factor;
            scoreposx2 = wwidth / 2 - sizex / 2 * factor;
            DrawPanel1(scoreposx, scoreposy, factor, true);
            DrawPanel2(scoreposx2, scoreposy2, factor, false);
            WriteScoreTitleBox(scoreposx, scoreposy, scoreposx2, scoreposy2, factor, false)
        } else {
            sizetype = 3;
            // we put one only
            var sizex = 500; // do not change is hardcoded
            factorx = (wwidth - 100) / sizex;
            factory = (wheight / 2 - 300) / 130;
            factor = factorx < factory ? factorx : factory;
            // factor = 1.5;
            scoreposy = 230;
            scoreposx = (wwidth - sizex * factor) / 2;
            scoreposy2 = 0;
            scoreposx2 = 0;
            DrawPanel1(scoreposx, scoreposy, factor);
            WriteScoreTitleBox(scoreposx, scoreposy, scoreposx2, scoreposy2, factor, false)
        }
    } else {
        // normal pc screen wide
        sizetype = 1;
        var sizex = 500;
        factorx = (wwidth - 100) / sizex;
        factory = (wheight / 2 - 320) / 130;
        factor = factorx < factory ? factorx : factory;
        //factor = 1;
        scoreposy = 230;
        scoreposx = wwidth / 2 - sizex * factor - 10;
        scoreposy2 = 230;
        scoreposx2 = wwidth / 2 + 10;
        DrawPanel1(scoreposx, scoreposy, factor, true);
        DrawPanel2(scoreposx2, scoreposy2, factor, true);
        WriteScoreTitleBox(scoreposx, scoreposy, scoreposx2, scoreposy2, factor, true)
    }
}

function WriteScore(record, i, scoreposx, scoreposy, factor) {
    i = i % 5;
    ctx.globalAlpha = 1.0;
    ctx.font = (20 * factor) + "px Papyrus";
    ctx.fillStyle = "white";
    ctx.textAlign = 'left';
    ctx.fillText(record.country, (scoreposx + 50 * factor), (scoreposy + 20 * factor + i * 26 * factor), 130);
    ctx.fillStyle = "#f2c667";
    ctx.textAlign = 'right';
    ctx.fillText(record.deaths, (scoreposx) + (270 + 60 + 50) * factor, (scoreposy + 20 * factor + i * 26 * factor));
    ctx.fillStyle = "white";
    ctx.fillText(record.cases, (scoreposx) + (160 + 70 + 50) * factor, (scoreposy + 20 * factor + i * 26 * factor));
    ctx.fillStyle = "lightgray";
    var mortality = (Math.round(record.deaths / record.cases * 10000) / 100).toFixed(2);
    ctx.fillText(mortality, scoreposx + (370 + 65 + 50) * factor, (scoreposy + 20 * factor + i * 26 * factor));
}

function DrawPanel1(scoreposx, scoreposy, factor, box) {
    // var scoreposy = 230;
    // var scoreposx = wwidth / 2 - 500 - 10;
    ctx.globalAlpha = 0.4;
    ctx.drawImage(sb1, scoreposx, scoreposy, 500 * factor, 130 * factor);
    ctx.fillStyle = "#FFFFFF";
    if (box) ctx.fillRect(scoreposx + (50 + 145) * factor, scoreposy - 20 * factor, 305 * factor, 20 * factor);
}

function DrawPanel2(scoreposx2, scoreposy2, factor, box) {
    // var scoreposy2 = 230;
    // var scoreposx2 = wwidth / 2 + 10;
    ctx.globalAlpha = 0.4;
    ctx.drawImage(sb2, scoreposx2, scoreposy2, 500 * factor, 130 * factor);
    ctx.fillStyle = "#FFFFFF";
    if (box) ctx.fillRect(scoreposx2 + (50 + 145) * factor, scoreposy2 - 20 * factor, 305 * factor, 20 * factor);
}

function WriteScoreTitleBox(scoreposx, scoreposy, scoreposx2, scoreposy2, factor, secondPanel) {
    ctx.globalAlpha = 1.0;
    ctx.font = (20 * factor) + "px Papyrus";
    ctx.fillStyle = "red";
    ctx.fillText("cases", (scoreposx) + (160 + 70 + 50) * factor /*scoreposx + 50 + 160*/, (scoreposy - 3), 130 * factor);
    ctx.fillText("deaths", (scoreposx) + (270 + 60 + 50) * factor, (scoreposy - 3), 130 * factor);
    ctx.fillText("mort.(%)", (scoreposx) + (370 + 60 + 50) * factor, (scoreposy - 3), 130 * factor);
    if (secondPanel) {
        ctx.fillText("cases", scoreposx2 + (160 + 70 + 50) * factor, (scoreposy2 - 3), 130 * factor);
        ctx.fillText("deaths", scoreposx2 + (270 + 60 + 50) * factor, (scoreposy2 - 3), 130 * factor);
        ctx.fillText("mort.(%)", scoreposx2 + (370 + 60 + 50) * factor, (scoreposy - 3), 130 * factor);
    }
    ctx.font = "20px Papyrus";
    ctx.fillStyle = "white";
}

function absoff(element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element);

    return {
        top: top,
        left: left
    };
};

function GetData() {
    fetch("https://corona.lmao.ninja/countries")
        //await fetch("http://nogueron.net:88/countries")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            FullData = data;
            console.log(data);
        })
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

