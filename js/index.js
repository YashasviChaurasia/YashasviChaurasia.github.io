// display sections on clicking on the link
function displaySection(link,section){
    let lnk = document.querySelector(`#${link}`);
    lnk.onclick = (event) => {
       
        let jiran = lnk.parentElement.children;
        for(j of jiran){
            j.classList.remove("active");
        }
        
        event.preventDefault() ; 
        lnk.classList.add("active");
        let sec = document.querySelector(`#${section}`);

        for(elem of sec.parentElement.children){
            elem.style.display ="none";
        }
        sec.classList.remove("section");
        sec.style.display = "block";
        sec.style.animationName = "section";
        sec.style.animationDuration = "1.2s";
    };
}

// dark and light mode 
document.documentElement.style.setProperty('--background-color', '#fafafa');
function switchDarkLightMode() {
    let icon = document.querySelector("#switch-container img");
   
    icon.onclick = () => {
    let darkColor = "#111216"; 
    let darkTextColor = "#999";
    let darkTextTitleColor = "#eee";
    let darkTextHoverColor = "#ddd";
    let darkAccentColor = "#222";
    icon.onmouseover = () => {
        console.log("James");
        icon.setAttribute("src","images/moon-full.svg");
    }
    icon.onmouseout = () => {
        icon.setAttribute("src","images/moon.svg");
    }
    let color = getComputedStyle(document.documentElement).getPropertyValue("--background-color");
    if(color == "#fafafa"){
        icon.setAttribute("src","images/sun.svg");
        document.documentElement.style.setProperty('--background-color',darkColor);
        document.documentElement.style.setProperty('--text-color',darkTextColor);
        document.documentElement.style.setProperty('--text-title-color',darkTextTitleColor);
        document.documentElement.style.setProperty('--text-hover-color',darkTextHoverColor);
        document.documentElement.style.setProperty('--light-accent-color',darkAccentColor);
        icon.onmouseover = () => {
                icon.setAttribute("src","images/sun-filled.svg");
        }
        icon.onmouseout = () => {
                icon.setAttribute("src","images/sun.svg");
        }
    
    } else {
        icon.setAttribute("src","images/moon.svg");
        document.documentElement.style.setProperty('--background-color', '#fafafa');
        document.documentElement.style.setProperty('--text-color', '#111');
        document.documentElement.style.setProperty('--text-hover-color',"#000");
        document.documentElement.style.setProperty('--text-title-color',"#111");
        document.documentElement.style.setProperty('--light-accent-color',"#ccc");

        icon.onmouseover = () => {
            console.log("James");
            icon.setAttribute("src","images/moon-full.svg");
        }
        icon.onmouseout = () => {
            icon.setAttribute("src","images/moon.svg");
        }
    }
    }
}
  

switchDarkLightMode();
displaySection("about-me","about-me-section");
displaySection("skills","skills-section");
displaySection("projects","projects-section");
displaySection("links","links-section");
