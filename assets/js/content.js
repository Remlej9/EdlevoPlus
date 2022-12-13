var linksContainer = document.getElementsByClassName("studyplanToolBar");
var activationContainer = document.createElement("span");
var activationIcon = document.createElement("span");
var activationText = document.createElement("span");
var header = document.getElementsByClassName("studyplan-block padding-top-24");
var parent = document.getElementsByClassName("table");
var children = parent[0].innerHTML;
var canva = document.createElement("div");
var pieA = document.createElement("div");
var pieB = document.createElement("div");
var pieC = document.createElement("div");
var pieD  = document.createElement("div");
var pieE = document.createElement("div");
var pieF = document.createElement("div");
var cover = document.createElement("div");
var container = document.createElement("div");
var meritcontainer = document.createElement("div");
var merittitle = document.createElement("div");
var merittext = document.createElement("h1");
var meritcontent = document.createElement("div");
var meritcontenttext = document.createElement("h1");
var meritcontentadd = document.createElement("h2");
var legend = document.createElement("div");
var legendtextA = document.createElement("div");
var legendtextB = document.createElement("div");
var legendtextC = document.createElement("div");
var legendtextD = document.createElement("div");
var legendtextE = document.createElement("div");
var legendtextF = document.createElement("div");
var cA = document.createElement("div");
var cB = document.createElement("div");
var cC = document.createElement("div");
var cD = document.createElement("div");
var cE = document.createElement("div");
var cF = document.createElement("div");
var datalabelA = document.createElement("label");
var datalabelB = document.createElement("label");
var datalabelC = document.createElement("label");
var datalabelD = document.createElement("label");
var datalabelE = document.createElement("label");
var datalabelF = document.createElement("label");

var childCut = children.substring(children.indexOf("Avslutade Kurser") + 200);
childCut = childCut.substring(1, childCut.indexOf("</tbody>"));

meritcontainer.className = "meritcontainer";
merittitle.className = "merittitle";
merittext.className = "merittext";
meritcontent.className = "meritcontent";
meritcontenttext.className = "meritcontenttext";
meritcontentadd.className = "meritcontentadd";
meritcontainer.appendChild(merittitle);
meritcontainer.appendChild(meritcontent);
merittitle.appendChild(merittext);
meritcontent.appendChild(meritcontenttext);
meritcontent.appendChild(meritcontentadd);
merittext.innerHTML = "Meritvärde";

container.classList.add("piecontainer")
legend.classList.add("legend")
legendtextA.classList.add("legendtext");
legendtextB.classList.add("legendtext");
legendtextC.classList.add("legendtext");
legendtextD.classList.add("legendtext");
legendtextE.classList.add("legendtext");
legendtextF.classList.add("legendtext");
canva.classList.add("pie");
cover.classList.add("cover")
datalabelA.classList.add("pielabel");
datalabelB.classList.add("pielabel");
datalabelC.classList.add("pielabel");
datalabelD.classList.add("pielabel");
datalabelE.classList.add("pielabel");
datalabelF.classList.add("pielabel");
datalabelA.innerHTML = "A";
datalabelB.innerHTML = "B";
datalabelC.innerHTML = "C";
datalabelD.innerHTML = "D";
datalabelE.innerHTML = "E";
datalabelF.innerHTML = "F";
pieA.classList.add("pie__segment");
pieB.classList.add("pie__segment");
pieC.classList.add("pie__segment");
pieD.classList.add("pie__segment");
pieE.classList.add("pie__segment");
pieF.classList.add("pie__segment");
pieA.appendChild(datalabelA);
pieB.appendChild(datalabelB);
pieC.appendChild(datalabelC);
pieD.appendChild(datalabelD);
pieE.appendChild(datalabelE);
pieF.appendChild(datalabelF);
canva.appendChild(pieA);
canva.appendChild(pieB);
canva.appendChild(pieC);
canva.appendChild(pieD);
canva.appendChild(pieE);
canva.appendChild(pieF);
cA.classList.add("colorcircle");
cB.classList.add("colorcircle");
cC.classList.add("colorcircle");
cD.classList.add("colorcircle");
cE.classList.add("colorcircle");
cF.classList.add("colorcircle");
cA.style.backgroundColor = "#CDA2C7";
cB.style.backgroundColor = "#BCD5FB";
cC.style.backgroundColor = "#CCD3C1";
cD.style.backgroundColor = "#91A8C1";
cE.style.backgroundColor = "#8FC0A6";
cF.style.backgroundColor = "#B664E5";

activationContainer.classList.add("toggle-card-view");
activationIcon.classList.add("educon-graph");
activationText.classList.add("diagramReport");
activationText.innerHTML = "Visa Diagram";
activationText.tabIndex = 0;
activationText.setAttribute("role", "button");
container.appendChild(legend);
container.appendChild(canva);
legend.appendChild(legendtextA);
legend.appendChild(legendtextB);
legend.appendChild(legendtextC);
legend.appendChild(legendtextD);
legend.appendChild(legendtextE);
legend.appendChild(legendtextF);
legendtextA.innerHTML = "A";
legendtextB.innerHTML = "B";
legendtextC.innerHTML = "C";
legendtextD.innerHTML = "D";
legendtextE.innerHTML = "E";
legendtextF.innerHTML = "F";
legendtextA.appendChild(cA);
legendtextB.appendChild(cB);
legendtextC.appendChild(cC);
legendtextD.appendChild(cD);
legendtextE.appendChild(cE);
legendtextF.appendChild(cF);
canva.appendChild(cover);

container.appendChild(meritcontainer);

let activated = false;
activationText.addEventListener(
	"click",
  function () {
    if (activated == false) {
      header[0].appendChild(container);
      activationText.innerHTML = "Dölj Diagram";
      console.log("Load Piechart");
      activated = true;
    } else {
      container.remove();
      activationText.innerHTML = "Visa Diagram";
      console.log("Unload Piechart");
      activated = false;
    }
	},
	false
);

//header[0].appendChild(pieChart);
linksContainer[0].appendChild(activationContainer);
activationContainer.appendChild(activationIcon);
activationContainer.appendChild(activationText);

var i = 0;
const grade = [];
const course = [];
const points = [];

//console.log(childCut);

while (childCut.indexOf(",") > 0) {
  //Get the grade
  grade[i] = childCut.substring(
    childCut.indexOf(",") - 1,
    childCut.indexOf(",")
  );

  //Get the course name
  var courseCut = childCut.substring(0, childCut.indexOf(","));
  courseCut = courseCut.substring(0, courseCut.lastIndexOf("<td>"));
  courseCut = courseCut.substring(0, courseCut.lastIndexOf("<td>"));
  course[i] = courseCut.substring(
    courseCut.lastIndexOf("<td>") + 4,
    courseCut.lastIndexOf("</td>")
  );

//Get the points
    var pointsCut = childCut.substring(0, childCut.indexOf(","));
    pointsCut = pointsCut.substring(0, pointsCut.indexOf('<td nowrap="">'));
    points[i] = pointsCut.substring(
        pointsCut.lastIndexOf("<td>") + 4,
        pointsCut.lastIndexOf("</td>")
    );

    points[i] = points[i].replace(/\s/g, '');
    points[i] = points[i].replace("p", '');

    points[i] = parseInt(points[i]);

    //console.log(grade[i] + "" + course[i] + "" + points[i]);
  childCut = childCut.substring(childCut.indexOf(",") + 1);
  i += 1;
}

let Acount = 0;
let Bcount = 0;
let Ccount = 0;
let Dcount = 0;
let Ecount = 0;
let Fcount = 0;

for (let i = 0; i < grade.length; ++i) {
  if (grade[i] == "A") Acount++;
  if (grade[i] == "B") Bcount++;
  if (grade[i] == "C") Ccount++;
  if (grade[i] == "D") Dcount++;
  if (grade[i] == "E") Ecount++;
  if (grade[i] == "F") Fcount++;
}

if (Acount == 0) {
  datalabelA.remove();
  legendtextA.remove();
}
if ((Bcount == 0)) {
  datalabelB.remove();
  legendtextB.remove();
}
if ((Ccount == 0)) {
  datalabelC.remove();
  legendtextC.remove();
}
if ((Dcount == 0)) {
  datalabelD.remove();
  legendtextD.remove();
}
if ((Ecount == 0)) {
  datalabelE.remove();
  legendtextE.remove();
}
if ((Fcount == 0)) {
  datalabelF.remove();
  legendtextF.remove();
}

let complete = Acount + Bcount + Ccount + Dcount + Ecount + Fcount;
let letterover50 = "";

if (Acount > (complete / 2)) {
  letterover50 = "A";
}
if (Bcount > (complete / 2)) {
  letterover50 = "B";
}
if (Ccount > (complete / 2)) {
  letterover50 = "C";
}
if (Dcount > (complete / 2)) {
  letterover50 = "D";
}
if (Ecount > (complete / 2)) {
  letterover50 = "E";
}
if (Fcount > (complete / 2)) {
  letterover50 = "F";
}

//calculate meritvärdet
let meritpoints = 0;
let gpoints = 0;
for (let i = 0; i < grade.length; ++i) {
  if (grade[i] == "A") {
    meritpoints += 20 * points[i];
  }
  if (grade[i] == "B") {
    meritpoints += 17.5 * points[i];
  }
  if (grade[i] == "C") {
    meritpoints += 15 * points[i];
  }
  if (grade[i] == "D") {
    meritpoints += 12.5 * points[i];
  }
  if (grade[i] == "E") {
    meritpoints += 10 * points[i];
  }
  if (grade[i] == "F") {
    meritpoints += 0 * points[i];
  }
    gpoints += points[i];
}
let merit = (meritpoints / gpoints).toFixed(1);
console.log(merit);

meritcontenttext.innerHTML = merit;
meritcontentadd.innerHTML = " ± 1.0";

let divider = 100 / complete;
Acount *= divider;
Bcount *= divider;
Ccount *= divider;
Dcount *= divider;
Ecount *= divider;
Fcount *= divider;

let count = 0;

if (letterover50 == "A") {
  pieA.setAttribute("style", "--offset: " + count + "; --value: " + Acount + "; --bg: #CDA2C7; --over50: 1;");
} else {
  pieA.setAttribute("style", "--offset: " + count + "; --value: " + Acount + "; --bg: #CDA2C7;");
}
datalabelA.setAttribute("style", "--offset: " + count + "; --value: " + Acount + "; --bg: #CDA2C7;");
count += Acount;
if (letterover50 == "B") {
  pieB.setAttribute("style", "--offset: " + count + "; --value: " + Bcount + "; --bg: #BCD5FB; --over50: 1;");
} else {
  pieB.setAttribute("style", "--offset: " + count + "; --value: " + Bcount + "; --bg: #BCD5FB;");
}
datalabelB.setAttribute("style", "--offset: " + count + "; --value: " + Bcount + "; --bg: #BCD5FB;");
count += Bcount;
if (letterover50 == "C") {
  pieC.setAttribute("style", "--offset: " + count + "; --value: " + Ccount + "; --bg: #CCD3C1; --over50: 1;");
} else {
  pieC.setAttribute("style", "--offset: " + count + "; --value: " + Ccount + "; --bg: #CCD3C1;");
}
datalabelC.setAttribute("style", "--offset: " + count + "; --value: " + Ccount + "; --bg: #CCD3C1;");
count += Ccount;
if (letterover50 == "D") {
  pieD.setAttribute("style", "--offset: " + count + "; --value: " + Dcount + "; --bg: #91A8C1; --over50: 1;");
} else {
  pieD.setAttribute("style", "--offset: " + count + "; --value: " + Dcount + "; --bg: #91A8C1;");
}
datalabelD.setAttribute("style", "--offset: " + count + "; --value: " + Dcount + "; --bg: #91A8C1;");
count += Dcount;
if (letterover50 == "E") {
  pieE.setAttribute("style", "--offset: " + count + "; --value: " + Ecount + "; --bg: #8FC0A6; --over50: 1;");
} else {
  pieE.setAttribute("style", "--offset: " + count + "; --value: " + Ecount + "; --bg: #8FC0A6;");
}
datalabelE.setAttribute("style", "--offset: " + count + "; --value: " + Ecount + "; --bg: #8FC0A6;");
count += Ecount;
if (letterover50 == "F") {
  pieF.setAttribute("style", "--offset: " + count + "; --value: " + Fcount + "; --bg: #B664E5; --over50: 1;");
} else {
  pieF.setAttribute("style", "--offset: " + count + "; --value: " + Fcount + "; --bg: #B664E5;");
}
datalabelF.setAttribute("style", "--offset: " + count + "; --value: " + Fcount + "; --bg: #B664E5;");
count += Fcount;

let Acourse = "";
let Bcourse = "";
let Ccourse = "";
let Dcourse = "";
let Ecourse = "";
let Fcourse = "";

for (let i = 1; i < grade.length; i++) {
  course[i] = course[i].trim();
  if (grade[i] == "A") Acourse += course[i] + "\n";
  if (grade[i] == "B") Bcourse += course[i] + "\n";
  if (grade[i] == "C") Ccourse += course[i] + "\n";
  if (grade[i] == "D") Dcourse += course[i] + "\n";
  if (grade[i] == "E") Ecourse += course[i] + "\n";
  if (grade[i] == "F") Fcourse += course[i] + "\n";
}

cA.setAttribute("title", Acourse);
cB.setAttribute("title", Bcourse);
cC.setAttribute("title", Ccourse);
cD.setAttribute("title", Dcourse);
cE.setAttribute("title", Ecourse);
cF.setAttribute("title", Fcourse);
