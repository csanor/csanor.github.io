let pathGallery = './images/gallery/';

let actId = 1;

let data01 = {
    id: 1,
    photo: '01.jpg',
    title: '"Learning to Fly" by Pink Floyd',
    description: "Standing in windswept fields and drawn inextricably to the skies above, the protagonist in this song sets off as a fledgling aviator. He's learning to fly, and it's pure bliss."
};


let data02 = {
    id: 2,
    photo: '02.jpg',
    title: '"Come Fly with Me" by Frank Sinatra',
    description: "This classic 1958 pop tune was written specifically for The Chairman of the Board, Frank Sinatra. It became part of his act over a spectacular career that spanned five decades. "
};

let data03 = {
    id: 3,
    photo: '03.png',
    title: '"Aeroplanes" by B.o.B. (featuring Haley Williams)',
    description: "Do you ever wish you could dial back time? The guy in this 2010 pop song does. He's been through a wild night of partying, and his ritzy lifestyle all seems so inauthentic."
};

let data04 = {
    id: 4,
    photo: '04.jpg',
    title: '"Wind Beneath My Wings" by Bette Midler',
    description: "What a tear-jerker this 1989 pop number is! The iconic songstress Bette Midler took home two Grammy Awards for this song (the theme some for the film, Beaches)."
};

let data05 = {
    id: 5,
    photo: '05.jpg',
    title: '"Turbulence" by Bowling for Soup',
    description: "We all need support, particularly when we're facing turbulence in our lives. (Some of us have rougher flights through life than others.)"
};

let data06 = {
    id: 6,
    photo: '06.jpg',
    title: '"Fly Away" by Lenny Kravitz',
    description: "This simple 1998 rock song, later used in commercials for Southwest Airlines, describes a narrator's wish to fly away, high into the sky. The man wishes to escape and travel over the seas like a dragonfly."
};

let arrayData = [data01, data02, data03, data04, data05, data06];

function unmarkThumb () {
    $(`#th0${actId}`).css('box-shadow', 'none');
}

function markThumb () {
    $(`#th0${actId}`).css('box-shadow', '10px 10px 10px #000');
}

function displayImage () {
    let strTemp = pathGallery.concat(arrayData[actId - 1].photo);
    $('#divImage').css('background-image', `url("${strTemp}"`);
    document.getElementById('divImageTitle').innerHTML = arrayData[actId - 1].title;
    document.getElementById('divImageText').innerHTML = arrayData[actId - 1].description;
    markThumb();
}

function displayThumbs () {
    arrayData.forEach((data) => {
        let strTemp = pathGallery.concat(data.photo);
        $(`#th0${data.id}`).css('background-image', `url("${strTemp}"`);
     });
}

function onLoadPage() {
    displayThumbs();
    displayImage ();
}

document.addEventListener("DOMContentLoaded", onLoadPage);

$('#buttonLeft').click(() => {
    if (actId > 1) {
        unmarkThumb();
        actId = actId - 1;
        displayImage();
    }
})

$('#buttonRight').click(() => {
    if (actId < arrayData.length) {
        unmarkThumb();
        actId = actId + 1;
        displayImage();
    }
})

$("#divThumbFrame").on('click', '.divThumb', function() {
    console.log(actId);
    unmarkThumb();
    var str = this.id;
    console.log(str);
    actId = parseInt(str.substring(3, 4));
    console.log(actId);
    displayImage();
});