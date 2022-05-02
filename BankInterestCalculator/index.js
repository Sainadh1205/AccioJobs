
function calculate() {
    
    let balances = [document.getElementById('balance1').value, document.getElementById('balance2').value, document.getElementById('balance3').value, document.getElementById('balance4').value, document.getElementById('balance5').value]
    

    for (let i = 0; i < balances.length; i++){

        balances[i] = Number(balances[i])
        if (balances[i] > 200000) {
            balances[i] = balances[i] + balances[i] * 0.1
            balances[i] = balances[i] - balances[i] * 0.002
        }
        else if (balances[i] > 100000) {
            balances[i] = balances[i] + balances[i] * 0.05
            balances[i] = balances[i] - balances[i] * 0.0005
        }
        else {
            balances[i] = balances[i] + balances[i] *0.03
        }
    }
    document.getElementById('output1').value = balances[0]
    document.getElementById('output2').value = balances[1]
    document.getElementById('output3').value = balances[2]
    document.getElementById('output4').value = balances[3]
    document.getElementById('output5').value = balances[4]
}
