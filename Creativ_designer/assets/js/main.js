
const email = document.getElementById("email")
let btn = document.getElementById("btn")
let confirm = document.getElementById("confirm_page")
let ele = document.getElementById("formero")
let thanks = document.getElementById("thanks")
let sub = document.getElementById("sub")
let now = document.getElementById("now")
let home = document.getElementById("home")

function btncheck() {
    console.log(email.value);
    ele.style.display = "none"
    confirm.style.display ="block"
    confirm.style.height = "454px"
    confirm.style.widht  =  "150px"
    confirm.style.backgroundColor = "#dddddd"
    confirm.style.borderRadius = "20px"
    confirm.style.marginLeft ="450px"
    confirm.style.marginRight ="450px"
    thanks.innerHTML = "Your Email Has Been Confirmed"
    thanks.style.textAlign = "center"
    thanks.style.paddingTop = "100px"
    sub.innerHTML = "Thanks for Subscribing!"
    sub.style.paddingTop = "20px"
    sub.style.textAlign = "center"
    now.innerHTML = "Now we just need to confirm your email adress - please click the link in the email we sent you. Thanks!"
    now.style.paddingTop = "20px"
    now.style.paddingBottom = "20px"
    now.style.textAlign = "center"
    home.innerHTML = "<a href='#'>Back to designerchallenge.com</a>"
    home.style.marginLeft = "400px"
    home.style.padding = "15px"
    home.style.textAlign = "center"
}

function back() {
    if ( ele.style.display === "none") {
        ele.style.display = "flex"
        confirm.style.display = "none"
    }
}

console.log(thanks.value);