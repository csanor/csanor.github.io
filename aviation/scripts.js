let dataBackground01 = {
    id: 1,
    photo: 'White-Wallpaper-For-Pc.jpg'
};

let dataBackground02 = {
    id: 2,
    photo: 'Brushed Aluminum Wallpapers.png'
};

let dataBackground03 = {
    id: 3,
    photo: 'wallpapertip_white-wallpaper-full-hd_1115846.png'
};

let dataBackground04 = {
    id: 4,
    photo: 'White-Lace-Wallpaper-Border.jpg'
};

let dataBackground05 = {
    id: 5,
    photo: 'White-Wallpaper-Background.jpg'
};


let pathBackground = './images/';
let arrayBackground = [dataBackground01,
                       dataBackground02,
                       dataBackground03,
                       dataBackground04,
                       dataBackground05];
let actBackgroundId = 1;

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

let pathGallery = './images/gallery/';
let arrayData = [data01, data02, data03, data04, data05, data06];
let actImageId = 1;

function unmarkThumb () {
    $(`#th0${actImageId}`).css('box-shadow', '10px 10px 10px #666');
}

function markThumb () {
    $(`#th0${actImageId}`).css('box-shadow', '10px 10px 10px #000');
}

function displayImage () {
    let strTemp = pathGallery.concat(arrayData[actImageId - 1].photo);
    $('#divImage').css('background-image', `url("${strTemp}"`);
    document.getElementById('divImageTitle').innerHTML = arrayData[actImageId - 1].title;
    document.getElementById('divImageText').innerHTML = arrayData[actImageId - 1].description;
    markThumb();
}

function displayThumbs () {
    arrayData.forEach((data) => {
        let strTemp = pathGallery.concat(data.photo);
        $(`#th0${data.id}`).css('background-image', `url("${strTemp}"`);
     });
}

function onLoadPage() {
    displayBackground();
    displayImage ();
    displayThumbs();
}

document.addEventListener("DOMContentLoaded", onLoadPage);

$('#buttonLeft').click(() => {
    if (actImageId > 1) {
        unmarkThumb();
        actImageId = actImageId - 1;
        displayImage();
    }
})

$('#buttonRight').click(() => {
    if (actImageId < arrayData.length) {
        unmarkThumb();
        actImageId = actImageId + 1;
        displayImage();
    }
})

$("#divThumbFrame").on('click', '.divThumb', function() {
    unmarkThumb();
    var str = this.id;
    actImageId = parseInt(str.substring(3, 4));
    displayImage();
})

function displayBackground() {
    let strTemp = pathBackground.concat(arrayBackground[actBackgroundId - 1].photo);
    $(`#divMainFrame`).css('background-image', `url("${strTemp}"`);
}

function changeBackground() {
    if (actBackgroundId == 5) {
        actBackgroundId = 1;
    } else {
        actBackgroundId++;
    }
    displayBackground();
}

$('#divMainFrame').click(() => {
    if (event.srcElement.id == 'divMainFrame') {
        changeBackground();
    }
})

