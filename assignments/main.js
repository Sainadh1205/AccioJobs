let acc1 = Number(prompt('ENter your Balance: '))
let acc2 = Number(prompt('ENter your Balance: '))
let acc3 = Number(prompt('ENter your Balance: '))
let acc4 = Number(prompt('ENter your Balance: '))
let acc5 = Number(prompt('ENter your Balance: '))
let arr = [acc1, acc2, acc3, acc4, acc5]


for (let i = 0; i < 5; i++){
    if (arr[i] > 200000) {
        console.log('acc'+(i+1) + ' is applicable with taxation and you have to pay a tax of ' + (arr[i]*0.9))
    }
}
