let biID = 1;

$('#buttonAdd').click(() => {
    if (document.getElementById('inputText').value !== '') {
        biID = biID + 1;
        $('#boxInner').append(`
            <div class="boxItems" id="${biID}">
                <div class="boxItem" id="${biID}">${document.getElementById('inputText').value}</div>
                <button class="boxTrashbin" id="${biID}" onclick="funcRemove(${biID})"></button>
                <button class="boxDone" id="${biID}" onclick="funcDone(${biID})"></button>
            </div> <!--boxItems-->
        `);
        document.getElementById('inputText').value = '';
    }
})

function funcRemove(i) {
    var myobj = document.getElementById(i);
    myobj.remove();
}

function funcDone (i) {
    var myBoxItem = document.getElementById(i).getElementsByClassName("boxItem")[0];
    myBoxItem.innerHTML = `<span style="font-weight: lighter">${myBoxItem.innerHTML}</font>`;

    var myBoxDone = document.getElementById(i).getElementsByClassName("boxDone")[0];
    myBoxDone.disabled = true;
    myBoxDone.classList.remove('boxDone');
    myBoxDone.classList.add('boxDoneInvisible');
}    
