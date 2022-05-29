let passwordDb = ''
let inpPassword = document.getElementById('create')
let loginPass = document.getElementById('check')
let passCreateValid = document.getElementById('signupValid')
let passCreateInvalid = document.getElementById('signupInvalid')
let loginValid = document.getElementById('loginValid')
let loginInvalid = document.getElementById('loginInvalid')
let e1 = document.getElementById('em1')
let e2 = document.getElementById('em2')
let e3 = document.getElementById('em3')
let e4 = document.getElementById('em4')

const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    a:'x',b:'y',c:'z',d:'a',e:'b',f:'c',g:'d',
    h:'e',i:'f',j:'g',k:'h',l:'i',m:'j',n:'k',
    o:'l',p:'m',q:'n',r:'o',s:'p',t:'q',u:'r',
    v:'s',w:'t',x:'u',y:'v',z:'w',
    '0':'7','1':'8','2':'9','3':'0','4':'1',
    '5':'2','6':'3','7':'4','8':'5','9':'6',
    '-':'*', '_':'#', '@':'$', '#':'$', '$':'+',
    '.':'<',',':'<','!':'@','*':'^','^':'%','/':'+',
    '+':'&','&':'.'
  };

const encode = (input) => {
    return input.split('').map((chars) => lookup[chars]).join('')
}

const decode = (coded) => {
    const upKeys = Object.keys(lookup)
    const upValues = Object.values(lookup)
    let encoded = coded.split('').map(chars => {
        let index = upValues.findIndex(element => element === chars)
        return upKeys[index]
    })
    return encoded.join('')
}

const signup = () => {
    let inputPassword = inpPassword.value
    if(inputPassword.length <= 6){
        passCreateInvalid.style.display = 'block'
        e1.style.display = 'none'
        e2.style.display = 'none'
        e3.style.display = 'none'
        e4.style.display = 'none'
        passCreateValid.style.display = 'none'
    }else{
        passwordDb = encode(inputPassword)
        passCreateValid.style.display = 'block'
        e1.style.display = 'none'
        e2.style.display = 'none'
        e3.style.display = 'none'
        e4.style.display = 'none'
        console.log(passwordDb)
        console.log(decode(passwordDb))
    }
}

const login = () => {
    let inputPassword = loginPass.value
    if (inputPassword === decode(passwordDb)) {
        loginValid.style.display = 'block'
        loginInvalid.style.display = 'none'
    } else {
        loginInvalid.style.display = 'block'
        loginValid.style.display = 'none'
    }
}


const validate = () => {
    passCreateValid.style.display = 'none'
    passCreateInvalid.style.display = 'none'
    let word = inpPassword.value 
    if (word.length < 1) {
        e1.style.display = 'block'
        e2.style.display = 'none'
        e3.style.display = 'none'
        e4.style.display = 'none'
    } else if (word.length >= 1 && word.length <= 6) {
        e2.style.display = 'block'
        e1.style.display = 'none'
        e3.style.display = 'none'
        e4.style.display = 'none'
    } else if (word.length >= 7 && word.length <= 10) {
        e3.style.display = 'block'
        e2.style.display = 'none'
        e1.style.display = 'none'
        e4.style.display = 'none'
    } else {
        e4.style.display = 'block'
        e1.style.display = 'none'
        e2.style.display = 'none'
        e3.style.display = 'none'
    }
}
