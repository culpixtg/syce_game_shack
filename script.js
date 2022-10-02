let bannerMessageNum = "4"
const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle"),
        //searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

        body.style.display = "block"

        // startup
        let mode = localStorage.getItem("mode")
        if(mode === null){
            mode === "Dark"
            localStorage.setItem("mode", "Dark")
            
            body.classList.toggle("dark");
                
            // if(body.classList.contains("dark")){
            //     modeText.innerText = "Light mode";
            // }else{
            //     modeText.innerText = "Dark mode";
            // }
        } else {
            if(mode === "Dark" || mode === "Dark Themed"){
                body.classList.toggle("dark");
                
                // if(body.classList.contains("dark")){
                //     modeText.innerText = "Light mode";
                // }else{
                //     modeText.innerText = "Dark mode";
                // }
            }
        }

        toggle.addEventListener("click" , () =>{
            sidebar.classList.toggle("close");
        })

        if(localStorage.getItem("openSidebar") === "true") sidebar.classList.toggle("close");

        // searchBtn.addEventListener("click" , () =>{
        //     sidebar.classList.remove("close");
        // })

        // modeSwitch.addEventListener("click" , () =>{
        //     body.classList.toggle("dark");
            
        //     if(body.classList.contains("dark")){
        //         modeText.innerText = "Light mode";
        //         localStorage.setItem("mode", "dark")
        //     }else{
        //         modeText.innerText = "Dark mode";
        //         localStorage.setItem("mode", "light")
        //     }
        // });

function gamepage(){
    document.getElementById("gameViewFullscreen").style.display = "none"
    document.getElementById("gamepage").style.display = "none"
    document.getElementById("mainpage").style.display = "block"
    document.getElementById("gameIframe").src = ""
    document.body.style.overflow = "visible"
    document.getElementById("importantMessage").style.display = "none"

    if(localStorage.getItem("openSidebar") === "true" && body.querySelector('nav').classList.value === "sidebar close") body.querySelector('nav').classList.toggle("close")
}

function blog(){
    document.getElementById("blogPage").style.display = "none"
    document.getElementById("blog").style.display = "block"
}

function fullscreen(){
    document.getElementById("gameIframe").focus();
    if(window.location == window.parent.location){
        var elem = document.getElementById("gameIframe")
        if(elem.requestFullscreen){
            elem.requestFullscreen();
        } else if(elem.webkitRequestFullscreen){
            elem.webkitRequestFullscreen();
        } else if(elem.msRequestFullscreen){
            elem.requestFullscreen();
        }
    } else {
        window.location = "gamepage-full.html"
    }    
}

var container = document.getElementsByClassName("container")

resizeWidth()
function resizeWidth(){
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width
    if(document.getElementById("gameIframe") !== null){
        let newHeight = `${document.querySelector("iframe").getBoundingClientRect().width / 1.778}px`
        document.getElementById("gameIframe").style.height = newHeight
        document.getElementById("iframeFocus").style.height = newHeight
    }
    if(width >= 0 && width < 699) for(i = 0; i < container.length; i++){
        container[i].style.width = "30%";
    }
    if(width >= 700 && width < 959) for(i = 0; i < container.length; i++){
        container[i].style.width = "30%";
    }
    if(width >= 960 && width < 1279) for(i = 0; i < container.length; i++){
        container[i].style.width = "22.2%";
    }
    if(width >= 1280 && width < 1599) for(i = 0; i < container.length; i++){
        container[i].style.width = "17.7%";
    }
    if(width >= 1600 && width < 1919) for(i = 0; i < container.length; i++){
        container[i].style.width = "14.8%";
    }
    if(width >= 1920 && width < 2239) for(i = 0; i < container.length; i++){
        container[i].style.width = "12.6%";
    }
    if(width >= 2240 && width < 2559) for(i = 0; i < container.length; i++){
        container[i].style.width = "11%";
    }
    if(width >= 2560 && width < 2879) for(i = 0; i < container.length; i++){
        container[i].style.width = "9.8%";
    }
    if(width >= 3500) for(i = 0; i < container.length; i++){
        container[i].style.width = "8.89%";
    }
    console.log(width)
}

window.addEventListener("resize", function(){ resizeWidth(); })

//Settings
gameIconSetting();

function gameIconSetting(changed){
    if(changed === true){
        if(localStorage.getItem("gameIcon") === null || localStorage.getItem("gameIcon") === "true"){
            localStorage.setItem("gameIcon", false)
            document.getElementById("gameIconSwitch").style.left = "15px";
        } else {
            document.getElementById("gameIconSwitch").style.left = "30px";
            localStorage.setItem("gameIcon", true)
        }
    } else 
    {
        if(localStorage.getItem("gameIcon") === null || localStorage.getItem("gameIcon") === "true"){
            if(document.getElementById("gameIconSwitch") !== null) document.getElementById("gameIconSwitch").style.left = "30px";
        } else {
        }
    }
}

openSidebarSetting();

function openSidebarSetting(changed){
    if(changed === true){
        if(localStorage.getItem("openSidebar") === "false"){
            localStorage.setItem("openSidebar", true)
            document.getElementById("openSidebarSwitch").style.left = "30px";
        } else {
            document.getElementById("openSidebarSwitch").style.left = "15px";
            localStorage.setItem("openSidebar", false)
        }
    } else {
        if(localStorage.getItem("openSidebar") === "true"){
            if(document.getElementById("openSidebarSwitch") !== null) document.getElementById("openSidebarSwitch").style.left = "30px";
        } else {
        }
    }
}

altLinksSetting();

function altLinksSetting(changed){
    if(changed === true){
        if(localStorage.getItem("altLinks") === "false"){
            localStorage.setItem("altLinks", true)
            document.getElementById("altLinksSwitch").style.left = "30px";
            document.getElementById("altLinks").style.display = "none"
        } else {
            document.getElementById("altLinksSwitch").style.left = "15px";
            localStorage.setItem("altLinks", false)
            document.getElementById("altLinks").style.display = "block"
        }
    } else {
        if(localStorage.getItem("altLinks") === "true"){
            if(document.getElementById("altLinksSwitch") !== null) document.getElementById("altLinksSwitch").style.left = "30px";
            document.getElementById("altLinks").style.display = "none"
        } else {
        }
    }
}

setCloak()

function setCloak() {
    let icon = localStorage.getItem("tabCloak")
    if(!icon) icon = "Default"
    var link = document.querySelector("link[rel~='icon']");
    if(!link){
        link = window.document.createElement("link");
        link.rel = "icon"
        link.type = "image/png"
        window.document.getElementsByTagName("head")[0].appendChild(link);
    }

    // var link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    // link.type = "image/x-icon";
    // link.rel = "shortcut icon";
    // link.herf = "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico";
    // document.getElementsByTagName('head')[0].appendChild(link);
    // return;
    
    if(icon === "Default"){
        link.herf = "sgs-logo.png";
        document.title = "Syce's Game Shack"
    }

    if(icon === "Google Slides"){
        link.herf = "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico";
        document.title = "Google Slides"
    }

    if(icon === "Google Docs"){
        link.herf = "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";
        document.title = "Google Docs"
    }

    if(icon === "Google Drive"){
        link.herf = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
        document.title = "Google Docs"
    }

    if(icon === "Schoology"){
        link.herf = "https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico";
        document.title = "Home | Schoology"
    }

    if(icon === "Desmos"){
        link.herf = "https://www.desmos.com/assets/img/touch-icon-192x192.png";
        document.title = "Desmos | Scientific Calculator"
    }
}

if(localStorage.getItem("tabCloak") === null){ localStorage.setItem("tabCloak", "Default"); }
var ddl = document.getElementById("cloakSelect");
if(ddl !== null){
    var opts = ddl.options.length
    for(var i = 0; i < opts; i++){
        if(ddl.options[i].value == localStorage.getItem("tabCloak")){
            ddl.options[i].selected = true;
            break;
        }
    }
}

function setMode(){
    let mode = localStorage.getItem("mode")
    if(!mode) mode = "Dark"

    if(mode === "Dark"){
        localStorage.setItem("mode", "Dark");
        if(body.classList[0] !== "dark") body.classList.toggle("dark");
        document.body.style.setProperty("--primary-color", "#3a3b3c");
        document.body.style.setProperty("--primary-text-color", "#ccc")
    }
    if(mode === "Dark Themed"){
        localStorage.setItem("mode", "Dark Themed");
        if(body.classList[0] !== "dark") body.classList.toggle("dark");
        loadTheme()
    }
    if(mode === "Light"){
        localStorage.setItem("mode", "Light");
        if(body.classList[0] === "dark") body.classList.toggle("dark");
        loadTheme();
    }
}

var ddl = document.getElementById("modeSelect");
if(ddl !== null){
    var opts = ddl.options.length
    for(var i = 0; i < opts; i++){
        if(ddl.options[i].value == localStorage.getItem("mode")){
            ddl.options[i].selected = true;
            break;
        }
    }
}

loadTheme();
function loadTheme(){
    let theme = localStorage.getItem("themeHex")
    if(!theme) theme = "#695CFE"
    if(localStorage.getItem("mode") === "Dark Themed"){
        document.body.style.setProperty("--primary-color", theme)
        document.body.style.setProperty("--primary-text-color", "#fff")
    }
    if(localStorage.getItem("mode") === "Light"){
        document.body.style.setProperty("--primary-color", theme)
    }
}

function setTheme(){
    let theme = localStorage.getItem("theme")
    if(theme === "Purple (Default)"){
        localStorage.setItem("themeHex", "#695CFE")
        loadTheme();
    }
    if(theme === "Green"){
        localStorage.setItem("themeHex", "#0ed929")
        loadTheme();
    }
    if(theme === "Light Blue"){
        localStorage.setItem("themeHex", "#16aee6")
        loadTheme();
    }
    if(theme === "Orange"){
        localStorage.setItem("themeHex", "#f6920e")
        loadTheme();
    }
    if(theme === "Red"){
        localStorage.setItem("themeHex", "#f6290e")
        loadTheme();
    }
    if(theme === "Yellow"){
        localStorage.setItem("themeHex", "#febb01")
        loadTheme();
    }
}

var ddl = document.getElementById("themeSelect");
if(ddl !== null){
    var opts = ddl.options.length
    for(var i = 0; i < opts; i++){
        if(ddl.options[i].value == localStorage.getItem("theme")){
            ddl.options[i].selected = true;
            break;
        }
    }
}

window.onload = (event) => {
    var cloakSelect = document.getElementById("cloakSelect")
    if(cloakSelect){
        cloakSelect.addEventListener("change", function(event){
            if(localStorage.getItem("tabCloak") === null){
                localStorage.setItem("tabCloak", "Default");
            }
            localStorage.setItem("tabCloak", event.target.value);
            setCloak();
        })
    }

    var modeSelect = document.getElementById("modeSelect")
    if(modeSelect){
        modeSelect.addEventListener("change", function(event){
            if(localStorage.getItem("mode") === null){
                localStorage.setItem("mode", "Dark");
            }
            localStorage.setItem("mode", event.target.value);
            setMode();
        })
    }

    var themeSelect = document.getElementById("themeSelect")
    if(themeSelect){
        themeSelect.addEventListener("change", function(event){
            if(localStorage.getItem("theme") === null){
                localStorage.setItem("theme", "Purple (Default)");
            }
            localStorage.setItem("theme", event.target.value);
            setTheme();
        })
    }

    document.getElementById("loader-wrapper").style.opacity = 0;
    document.body.style.overflow = "visible";
    setTimeout(() => {
        document.getElementById("loader-wrapper").style.display = "none";
    }, 500)

    if(localStorage.getItem("bannerMessageNum") !== bannerMessageNum || localStorage.getItem("bannerMessageNum") === null) document.getElementById("bannerMessage").style.display = "block"
}

window.onbeforeunload = function() {
    document.querySelector("html").style.backgroundColor = "#18191a"
    document.querySelector("body").style.display = "none";
}

function hideBanner(){
    document.getElementById("bannerMessage").style.display = "none"
    localStorage.setItem("bannerMessageNum", bannerMessageNum)
}

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

function toggleLoginPage(){
    let page = document.getElementById("loginPage")
    if(page.style.display === "block"){
        page.style.display = "none"
        document.body.style.overflow = "visible"
        var newlink = document.createElement("link").herf = "#hello"
        document.getElementsByTagName("head")[0].appendChild(newlink)
    } else {
        page.style.display = "block"
        page.style.position = "fixed"
        document.body.style.overflow = "hidden"
        var newlink = document.createElement("link").herf = "#login"
        document.getElementsByTagName("head")[0].appendChild(newlink)
    }
}
