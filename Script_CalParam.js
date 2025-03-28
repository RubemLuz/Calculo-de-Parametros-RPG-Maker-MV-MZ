
let MaxLv = 0;
let Min = 0;
let Max = 0;
let Porcen = 0;

let sttsCurrent = 0;
let calMin = 0;

let sttsRound;
let sttList = [];

let addSdd = ["[","]"];

function Calcular(){
 CalcularHP(); CalcularMP(); CalcularATK(); CalcularDEF(); CalcularMAT(); CalcularMDF(); CalcularAGI(); CalcularLCK();
}
function CalcularHP()
{
    sttList.length = 0

    MaxLv = document.getElementById("levelMax").value;
    Min = document.getElementById("HPMin").value;
    Max = document.getElementById("HPMax").value;
    Porcen = document.getElementById("HP%").value;

    calMin = Min * (1 + Porcen/100);
    calMax = Max * (1 + Porcen/100);

    let sttPorNv = (calMin - calMax) / (MaxLv - 1);

    for(let i = 1; i <= 99;i++)
    { 
        sttsRound = Math.round(calMin);  
        sttList.push(sttsRound);
        calMin += -sttPorNv;

        if(calMin >= calMax)
        {
            calMin = calMax;
        }
    }

    document.getElementById("HPparPrint").innerHTML = addSdd[0] + addSdd[0] + "1" + "," + sttList.join(",") + addSdd[1];
}   
function CalcularMP()
{
    sttList.length = 0;

    MaxLv = document.getElementById("levelMax").value;
    Min = document.getElementById("MPMin").value;
    Max = document.getElementById("MPMax").value;
    Porcen = document.getElementById("MP%").value;

    calMin = Min * (1 + Porcen/100);
    calMax = Max * (1 + Porcen/100);

    let sttPorNv = (calMin - calMax) / (MaxLv - 1);

    for(let i = 1; i <= 99;i++)
    {   
        sttsRound = Math.round(calMin);  
        sttList.push(sttsRound);
        calMin += -sttPorNv;

        if(calMin >= calMax)
        {
            calMin = calMax;
        }
    }
    document.getElementById("MPparPrint").innerHTML = addSdd[0] + "0" + "," + sttList.join(",") + addSdd[1];
}
function CalcularATK()
{
    sttList.length = 0

    MaxLv = document.getElementById("levelMax").value;
    Min = document.getElementById("ATKMin").value;
    Max = document.getElementById("ATKMax").value;
    Porcen = document.getElementById("ATK%").value;

    calMin = Min * (1 + Porcen/100);
    calMax = Max * (1 + Porcen/100);

    let sttPorNv = (calMin - calMax) / (MaxLv - 1);

    for(let i = 1; i <= 99;i++)
    {   
        sttsRound = Math.round(calMin);  
        sttList.push(sttsRound);
        calMin += -sttPorNv;

        if(calMin >= calMax)
        {
            calMin = calMax;
        }
    }
    document.getElementById("ATKparPrint").innerHTML = addSdd[0] + "1" + "," + sttList.join(",") + addSdd[1];
}
function CalcularDEF()
{
    sttList.length = 0

    MaxLv = document.getElementById("levelMax").value;
    Min = document.getElementById("DEFMin").value;
    Max = document.getElementById("DEFMax").value;
    Porcen = document.getElementById("DEF%").value;

    calMin = Min * (1 + Porcen/100);
    calMax = Max * (1 + Porcen/100);

    let sttPorNv = (calMin - calMax) / (MaxLv - 1);

    for(let i = 1; i <= 99;i++)
    {   
        sttsRound = Math.round(calMin);  
        sttList.push(sttsRound);
        calMin += -sttPorNv;

        if(calMin >= calMax)
        {
            calMin = calMax;
        }
    }
    document.getElementById("DEFparPrint").innerHTML = addSdd[0] + "1" + "," + sttList.join(",") + addSdd[1];
}
function CalcularMAT()
{
    sttList.length = 0

    MaxLv = document.getElementById("levelMax").value;
    Min = document.getElementById("MATMin").value;
    Max = document.getElementById("MATMax").value;
    Porcen = document.getElementById("MAT%").value;

    calMin = Min * (1 + Porcen/100);
    calMax = Max * (1 + Porcen/100);

    let sttPorNv = (calMin - calMax) / (MaxLv - 1);

    for(let i = 1; i <= 99;i++)
    {   
        sttsRound = Math.round(calMin);  
        sttList.push(sttsRound);
        calMin += -sttPorNv;

        if(calMin >= calMax)
        {
            calMin = calMax;
        }
    }
    document.getElementById("MATparPrint").innerHTML = addSdd[0] + "1" + "," + sttList.join(",") + addSdd[1];
}
function CalcularMDF()
{
    sttList.length = 0

    MaxLv = document.getElementById("levelMax").value;
    Min = document.getElementById("MDFMin").value;
    Max = document.getElementById("MDFMax").value;
    Porcen = document.getElementById("MDF%").value;

    calMin = Min * (1 + Porcen/100);
    calMax = Max * (1 + Porcen/100);

    let sttPorNv = (calMin - calMax) / (MaxLv - 1);

    for(let i = 1; i <= 99;i++)
    {   
        sttsRound = Math.round(calMin);  
        sttList.push(sttsRound);
        calMin += -sttPorNv;

        if(calMin >= calMax)
        {
            calMin = calMax;
        }
    }
    document.getElementById("MDFparPrint").innerHTML = addSdd[0] + "1" + "," + sttList.join(",") + addSdd[1];
}
function CalcularAGI()
{
    sttList.length = 0

    MaxLv = document.getElementById("levelMax").value;
    Min = document.getElementById("AGIMin").value;
    Max = document.getElementById("AGIMax").value;
    Porcen = document.getElementById("AGI%").value;

    calMin = Min * (1 + Porcen/100);
    calMax = Max * (1 + Porcen/100);

    let sttPorNv = (calMin - calMax) / (MaxLv - 1);

    for(let i = 1; i <= 99;i++)
    {   
        sttsRound = Math.round(calMin);  
        sttList.push(sttsRound);
        calMin += -sttPorNv;

        if(calMin >= calMax)
        {
            calMin = calMax;
        }
    }
    document.getElementById("AGIparPrint").innerHTML = addSdd[0] + "1" + "," + sttList.join(",") + addSdd[1];
}
function CalcularLCK()
{
    sttList.length = 0

    MaxLv = document.getElementById("levelMax").value;
    Min = document.getElementById("LCKMin").value;
    Max = document.getElementById("LCKMax").value;
    Porcen = document.getElementById("LCK%").value;

    calMin = Min * (1 + Porcen/100);
    calMax = Max * (1 + Porcen/100);

    let sttPorNv = (calMin - calMax) / (MaxLv - 1);

    for(let i = 1; i <= 99;i++)
    {   
        sttsRound = Math.round(calMin);  
        sttList.push(sttsRound);
        calMin += -sttPorNv;

        if(calMin >= calMax)
        {
            calMin = calMax;
        }
    }
    document.getElementById("LCKparPrint").innerHTML = addSdd[0] + "1" + "," + sttList.join(",") + addSdd[1] + addSdd[1];
}


function Page_CalBattle(){ window.location.href = "pag2.html";    }