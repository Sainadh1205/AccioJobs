const chefReceived = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 8000);
    })
}
const pizzaSauceAdded = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve()
        }, 15000);
    })
}
const firstLayerOfCheezaAdded = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve()
        }, 5000);
    })
}
const secondLayerOfCheezeAdded = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve()
        }, 12000);
    })
}
const pizzaBaked = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve()
        }, 5000);
    })
}
const oreganoAdded = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve()
        }, 10000);
    })
}
const packageReceivedAtCounter = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve()
        }, 2000);
    })
}
