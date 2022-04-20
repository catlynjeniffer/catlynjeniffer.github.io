function clkAbout() {
    var x = document.querySelector('#about').style.display;

    if (x == 'none') {
        document.querySelector('#about').style.display='block';
        document.querySelector('#interest').style.display='none';
        document.querySelector('#experience').style.display='none';

        //ubah warna tombol
        document.querySelector('.tombol1').style.backgroundColor ='rgb(244, 238, 255)';
        document.querySelector('.tombol2').style.backgroundColor ='rgb(238, 238, 238)';
        document.querySelector('.tombol3').style.backgroundColor ='rgb(238, 238, 238)';
     } else {
        document.querySelector('#about').style.display='none';
        document.querySelector('.tombol1').style.backgroundColor ='rgb(244, 238, 255)';
     } 
}
function clkEdu() {
    var x = document.querySelector('#experience').style.display;

    if (x == 'none') {
        document.querySelector('#experience').style.display='block';
        document.querySelector('#about').style.display='none';
        document.querySelector('#interest').style.display='none';

        //ubah warna tombol
        document.querySelector('.tombol2').style.backgroundColor ='rgb(220, 214, 247)';
        document.querySelector('.tombol1').style.backgroundColor ='rgb(238, 238, 238)';
        document.querySelector('.tombol3').style.backgroundColor ='rgb(238, 238, 238)';
     } else {
        document.querySelector('#experience').style.display='none';
        document.querySelector('.tombol2').style.backgroundColor ='rgb(220, 214, 247)';
    }
}

function clkInt() {
    var x = document.querySelector('#interest').style.display;

    if (x == 'none') {
        document.querySelector('#interest').style.display='block';
        document.querySelector('#about').style.display='none';
        document.querySelector('#experience').style.display='none';

        //ubah warna tombol
        document.querySelector('.tombol3').style.backgroundColor ='rgb(166, 177, 225)';
        document.querySelector('.tombol2').style.backgroundColor ='rgb(238, 238, 238)';
        document.querySelector('.tombol1').style.backgroundColor ='rgb(238, 238, 238)';
    } else {
        document.querySelector('#interest').style.display='none';
        document.querySelector('.tombol3').style.backgroundColor ='rgb(166, 177, 225)';
    }
}
     