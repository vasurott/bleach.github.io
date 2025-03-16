/*--------------------

.shinigami

----------------------*/
const kyouraku_img = document.querySelector('.kyo_image');
const kyouraku_text = document.querySelector('.kyo_text');
const sumi = document.querySelector('.black');
const kyouraku_word = document.querySelector('.kyo_word');

kyouraku_img.addEventListener('click', function(){
    kyouraku_img.classList.toggle('active');
    kyouraku_text.classList.toggle('active');
    sumi.classList.toggle('active');
    kyouraku_word.classList.toggle('active');
});

/*--------------------

.arankaru

----------------------*/
const stark_img = document.querySelector('.sta_image');
const stark_text = document.querySelector('.sta_text');
const wolf = document.querySelector('.blue');
const stark_word = document.querySelector('.sta_word');

stark_img.addEventListener('click', function(){
    stark_img.classList.toggle('active');
    stark_text.classList.toggle('active');
    wolf.classList.toggle('active');
    stark_word.classList.toggle('active');
});

/*--------------------

.mekkyaku

----------------------*/
const askin_img = document.querySelector('.ask_image');
const askin_text = document.querySelector('.ask_text');
const poison = document.querySelector('.purple');
const askin_word = document.querySelector('.ask_word');

askin_img.addEventListener('click', function(){
    askin_img.classList.toggle('active');
    askin_text.classList.toggle('active');
    poison.classList.toggle('active');
    askin_word.classList.toggle('active');
});

/*--------------------

.other

----------------------*/
const don_img = document.querySelector('.don_image');
const don_text = document.querySelector('.don_text');
const mix = document.querySelector('.gradation');
const don_word = document.querySelector('.don_word');

don_img.addEventListener('click', function(){
    don_img.classList.toggle('active');
    don_text.classList.toggle('active');
    mix.classList.toggle('active');
    don_word.classList.toggle('active');
});

/*--------------------

.menu

----------------------*/
const toggle = document.querySelector('.toggle');
const all = document.querySelector('.all');

toggle.addEventListener('click', function(){
    toggle.classList.toggle('active');
    all.classList.toggle('active');
});
