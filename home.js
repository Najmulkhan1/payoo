document.getElementById("add-money-btn")
         .addEventListener("click", function(e){
            e.preventDefault()

            const pin = 1234;
            console.log('add money button');
            const addAmount = document.getElementById("add-amount").value
            const addAmountConverted = parseInt(addAmount)
            const bankSelect = document.getElementById('bank').value
            const availableBalance = parseInt(document.getElementById('avaible-balance').innerText) 

            const accountNum = document.getElementById("bank-account-num").value

            const pinValidInput = document.getElementById('pin-num').value

            if(!bankSelect){
                alert("Please select a bank")
                return
            }

           if (accountNum.length < 11) {
            alert("Please provide a valid account number");
            return; // stop execution
        }
            if(pin !== pinValidInput){
                alert("please provide a valid pin number")
                return
            }

            
            
            const newAvailableBalance = addAmountConverted+availableBalance

            document.getElementById('avaible-balance').innerText = newAvailableBalance


            document.getElementById("myFrom").reset()
            
         });
