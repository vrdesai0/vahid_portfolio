const pg1 = document.getElementById('pg1');
const pg2 = document.getElementById('pg2');
const pg3 = document.getElementById('pg3');
const pg4 = document.getElementById('pg4');

const page1 = document.getElementById('page1');
const page3 = document.getElementById('page3');

pg1.addEventListener('click', ()=> {
    page1.classList.add('flip');
});

pg3.addEventListener('click', ()=> {
    page3.classList.add('flip');
    setTimeout(() => {
        page3.style.zIndex = '4';
    }, 1000);
});

pg4.addEventListener('click', ()=> {
    page3.classList.add('rev_flip2');
    page3.classList.remove('flip');
    setTimeout(() => {
        page3.classList.remove('rev_flip2');
    }, 3500);

});

pg2.addEventListener('click', ()=> {
    page1.classList.add('rev_flip2');
    
    page1.classList.remove('flip');

    setTimeout(() => {
        page3.style.zIndex = '0';
    }, 1000);

    setTimeout(() => {
        page1.classList.remove('rev_flip2');
    }, 4000);
    
});


