let button = document.getElementById('button')

button.addEventListener('click', display)

function display(){
    let a = document.getElementById('searchBar').value
    let li = document.createElement('li')
    let bt = document.createElement('button')
    li.innerText = a+'   '
    bt.innerHTML = 'delete'
    document.getElementById('container').append(li)
    li.append(bt)
    bt.addEventListener('click',Delete)

    function Delete(){
        li.style.display = 'none'
    }
    document.getElementById('searchBar').value = ''
}