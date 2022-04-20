function clk() {
    //cara 1
    // document.querySelector('.menu').classList.toggle("menu-open");
    
    //cara 2
    var x = document.querySelector('.menu').style.display;

    if (x == 'none') {
        document.querySelector('.menu').style.display='block';
        document.querySelector('.menu').style.opacity =1;
     } else {
        document.querySelector('.menu').style.display='none';
        document.querySelector('.menu').style.opacity =0;
    }
}

