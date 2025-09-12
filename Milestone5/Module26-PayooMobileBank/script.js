
// login btn functionality
const loginBtn = document.getElementById("loginBtn").addEventListener("click", ()=>{
    // fixed num & pin
    const mobileNum = 12345
    const pin = 1234

    const formMobileNumber = document.getElementById("mobileNum").value
    const convertedNum = parseInt(formMobileNumber)

    const formPin = document.getElementById("pin").value
    const convertedPin = parseInt(formPin)
    // console.log(`Value: ${formMobileNumber.value}, PIN: ${formPin.value}`)

    if(convertedNum === mobileNum && convertedPin === pin){
        window.location.href="./home.html"
    }else{
        console.log("Wrong Credentials")
    }
})

