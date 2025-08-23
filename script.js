// login button function

document.getElementById("login-btn")
.addEventListener("click", function (e) {
    e.preventDefault()
    const mobileNumber = 1765777234
    const pinNumber = 123456

    const mobileNumberValue = document.getElementById("num-input").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)
    
    const pinNumberValue = document.getElementById("pin-input").value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    if(mobileNumber === mobileNumberValueConverted && pinNumber === pinNumberValueConverted){
        window.location.href="./home.html"
        
    } else{
        alert("Invalid Credential")
        
    }
    

    
 });
