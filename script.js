const inputbox= document.getElementById("input-box");
const listcontainer= document.getElementById("list-container");
function addTask(){
    if(inputbox.value===''){
        alert("You must Enter a Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    saveData();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML= localStorage.getItem("data");
}
showTask();

const translations = {
    en: {
        select : "SELECT A LANGUAGE",
        title : "TO-DO List",
        add : "ADD",
        addtxt : "Add your text",
        alr : "You must Enter a Task",
    },
    ar: {
        select : "اختر لغة",
        title : "قائمة المهام",
        add : "يضيف",
        addtxt : "أضف النص الخاص بك",
        alr : "يجب عليك إدخال مهمة",
    },
    hin: {
        select : "भाषा चुनें",
        title : "करने के लिए सूची",
        add : "जोड़ना",
        addtxt : "अपना पाठ जोड़ें",
    },
    ben: {
        select : "একটি ভাষা নির্বাচন করুন",
        title : "করণীয়-তালিকা",
        add : "যোগ করুন",
        addtxt : "আপনার টেক্সট যোগ করুন",
        alr : "You must Enter a Task",
    },
    ger: {
        select : "WÄHLEN SIE EINE SPRACHE",
        title : "TO-DO-Liste",
        add : "HINZUFÜGEN",
        addtxt : "Fügen Sie Ihren Text hinzu",
        alr : "You must Enter a Task",
    },
    jp: {
        select : "言語を選択してください",
        title : "TODOリスト",
        add : "追加",
        addtxt : "テキストを追加する",
        alr : "You must Enter a Task",
    },
    fr: {
        select : "CHOISIR UNE LANGUE",
        title : "Liste de choses à faire",
        add : "AJOUTER",
        addtxt : "Ajoutez votre texte",
        alr : "You must Enter a Task",
    },
    esp: {
        select : "SELECCIONA UN IDIOMA",
        title : "Lista de tareas pendientes",
        add : "AGREGAR",
        addtxt : "Añade tu texto",
        alr : "You must Enter a Task",
    }

}
const languageSelecttop = document.querySelector("select");
let h1 = document.getElementById("h1");
let titl = document.getElementById("titl");
let input = document.getElementsByClassName("plc");
let btn = document.getElementById("btn");

languageSelecttop.addEventListener("change", (event) => {
    setLanguage(event.target.value);
})

const setLanguage = (language) => {
    if(language=="ar"){
        h1.innerText = translations.ar.select;
        titl.innerText = translations.ar.title;
        input.innerText = translations.ar.addtxt;
        btn.innerText = translations.ar.add;
    }
    else if(language=="en"){
        h1.innerText = translations.en.select;
        titl.innerText = translations.en.title;
        input.innerText = translations.en.addtxt;
        btn.innerText = translations.en.add;
    }
    else if(language=="hin"){
        h1.innerText = translations.hin.select;
        titl.innerText = translations.hin.title;
        input.innerText = translations.hin.addtxt;
        btn.innerText = translations.hin.add;
    }
    else if(language=="ben"){
        h1.innerText = translations.ben.select;
        titl.innerText = translations.ben.title;
        input.innerText = translations.ben.addtxt;
        btn.innerText = translations.ben.add;
    }
    else if(language=="ger"){
        h1.innerText = translations.ger.select;
        titl.innerText = translations.ger.title;
        input.innerText = translations.ger.addtxt;
        btn.innerText = translations.ger.add;
    }
    else if(language=="jp"){
        h1.innerText = translations.jp.select;
        titl.innerText = translations.jp.title;
        input.innerText = translations.jp.addtxt;
        btn.innerText = translations.jp.add;
    }
    else if(language=="fr"){
        h1.innerText = translations.fr.select;
        titl.innerText = translations.fr.title;
        input.innerText = translations.fr.addtxt;
        btn.innerText = translations.fr.add;
    }
    else if(language=="esp"){
        h1.innerText = translations.esp.select;
        titl.innerText = translations.esp.title;
        input.innerText = translations.esp.addtxt;
        btn.innerText = translations.esp.add;
    }
}

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode','active');
}
const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode',null);
}

if(darkmode==="active"){
    enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    if(darkmode!=="active"){
        enableDarkmode();
    }
    else{
        disableDarkmode();
    }
})