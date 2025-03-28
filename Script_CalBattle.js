


//Parametros Jogador
let actorAttack;
let actorDefence;
let actorMagic;
let actorDefenceMagic;
let actorAgility;
let actorLuck;

//Parametros Inimigo
let enemyAttack;
let enemyDefence;
let enemyMagic;
let enemyDefenceMagic;
let enemyAgility;
let enemyLuck;

//Parametros Gerais
let numHits;
let multi_atk;
let multi_def;

function PegarDados()
{

    numHits = document.getElementById("qntHit").value;
    multi_atk = document.getElementById("multi_atk").value;
    multi_def = document.getElementById("multi_def").value;

        //dados jogador
    actorAttack = document.getElementById("a.atk").value;
    actorDefence = document.getElementById("a.def").value;
    //actorMagic = document.getElementById("a.mdf").value;
    //actorDefenceMagic = document.getElementById("a.mat").value;
    //actorAgility = document.getElementById("a.agi").value;
    //actorLuck = document.getElementById("a.luk").value;

        //dados inimigo
    enemyAttack = document.getElementById("b.atk").value;
    enemyDefence = document.getElementById("b.def").value;
    //actorMagic = document.getElementById("b.mdf").value;
    //actorDefenceMagic = document.getElementById("b.mat").value;
    //actorAgility = document.getElementById("b.agi").value;
    //actorLuck = document.getElementById("b.luk").value;
}
function SimularHit()
{
    PegarDados();
    let calcular = (actorAttack * multi_atk) - enemyDefence * multi_def;
    document.getElementById("calculo").innerHTML = calcular;

}






function Page_ParamCalcule(){ window.location.href = "index.html"; }