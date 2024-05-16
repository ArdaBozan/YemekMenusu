/* Tanımlamalar */
//Food
const meal1 = document.querySelector("#meal1text");
const meal2 = document.querySelector("#meal2text");

const meal1sauce = document.querySelector("#meal1sauce");
const meal1ig = document.querySelector("#meal1ig");
const meal2sauce = document.querySelector("#meal2sauce");
const meal2ig = document.querySelector("#meal2ig");


//Drink
const drink1 = document.querySelector("#drink1text");
const drink2 = document.querySelector("#drink2text");

const drink1small = document.querySelector("#drink1small");
const drink1med = document.querySelector("#drink1med");
const drink2small = document.querySelector("#drink2small");
const drink2med = document.querySelector("#drink2med");


//Total TextBox
const totalTxt = document.querySelector("#totalTxt");


//Other Variables
let meal1total = 0;
let meal2total = 0;

let drink1total = 0;
let drink2total = 0;

let total = 0;


//Kontroller
if(meal1sauce.checked = true){ meal1total += 3; }       else{ null }
if(meal1ig.checked = true){ meal1total += 6; }          else{ null }
if(meal2sauce.checked = true){ meal2total += 10; }      else{ null }
if(meal2ig.checked = true){ meal2total += 8; }          else{ null }

if(drink1small.checked = true){ drink1total += 17; }    else{ null }
if(drink1med.checked = true){ drink1total += 19; }      else{ null }
if(drink2small.checked = true){ drink2total += 33; }    else{ null }
if(drink2med.checked = true){ drink2total += 1; }       else{ null }

//Yazdırma
meal1.value = meal1total;
meal2.value = meal2total;

drink1.value = drink1total;
drink2.value = drink2total;

//Toplam Hesaplama
function showTotal(){
    total = meal1total + meal2total + drink1total + drink2total;
    totalTxt.value = total;
}

//Temizleme
function reset(){
    meal1.value = "";
    meal2.value = "";
    drink1.value = "";
    drink2.value = "";
    totalTxt.value = "";

    meal1sauce.checked = false;
    meal1ig.checked = false;
    meal2sauce.checked = false;
    meal2ig.checked = false;

    drink1small.checked = false;
    drink1med.checked = false;
    drink2small.checked = false;
    drink2med.checked = false;
}

//Başlangıçta checkbox ve radiobuttonlar kapalı
meal1sauce.checked = false;
meal1ig.checked = false;
meal2sauce.checked = false;
meal2ig.checked = false;

drink1small.checked = false;
drink1med.checked = false;
drink2small.checked = false;
drink2med.checked = false;