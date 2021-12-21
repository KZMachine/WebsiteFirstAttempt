function redirectHome(){
    window.location.href = 'index.html';
}

function redirectAboutMe(){
    window.location.href = 'AboutMe.html';
}

function redirectAboutMeHome(){

    var elem = document.getElementById("myAnimation");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
          clearInterval(id);
        } else {
            pos = 0; 
            elem.style.top = pos; 
            elem.style.left = pos + '%'; 
        }
    }
    //window.location.href = 'AboutMe.html';
}

function redirectPortfolio(){
    window.location.href = 'Portfolio.html';
}

function redirectQualifications(){
    window.location.href = 'Qualifications.html';
}

function redirectService(){
    window.location.href = 'Service.html';
}

function openPictureDrive() {
    window.open("https://drive.google.com/drive/folders/1tKsAO3zBKyqBsetFslE54QCPm_GArisW?usp=sharing")
}

function openUniversitySite() {
    window.open("https://www.tamu.edu/")
}

function openFreeRice() {
    window.open("https://www.freerice.com/")
}

function openTiger() {
    window.open("https://en.wikipedia.org/wiki/Tiger")
}

function openHarvey() {
    window.open("https://www.weather.gov/hgx/hurricaneharvey")
}

function openROS() {
    window.open("https://www.ros.org/about-ros/")
}

function openOpenCV() {
    window.open("https://opencv.org/about/")
}

function openCompEngr() {
    window.open("https://engineering.tamu.edu/ce/about/index.html")
}