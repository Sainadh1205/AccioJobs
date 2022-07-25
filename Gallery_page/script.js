function removeselected() {
    for(let i=1;i<=10;i++){
        let panelName="panel"+i;
        let panelId="panel"+i;
        panelName= document.getElementById(panelId);
        panelName.className='panel';
    }
}

function addclass(idname) {
    removeselected();
    document.getElementById(idname).className = 'panel selected';
}
