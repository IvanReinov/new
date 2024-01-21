'use strict';

const listImages = [
    {
        src: './csenes/заставка1.0.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: './csenes/заставка111.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: './csenes/заставка1111.jpg',
        nameImg: 'Воздушный шар',
    },
    {
        src: './csenes/сцена4.jpg',
        nameImg: 'Ещё что-то',
    },
    {
        src: './csenes/сцена5.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена6.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена7.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена8.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена9.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена10.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена11.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена12.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена13.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена14.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена15.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена16.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена17.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена18.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена19.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена20.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена21.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена22.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена23.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена24.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена25.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена26.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена27.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена28.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена29.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена30.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена31.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена32.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена33.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена34.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена35.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена36.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена37.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена38.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена39.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена40.png',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена41.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена42.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена43.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена44.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена45.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена46.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/школа47.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена48.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена49.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена50.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена51.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена52.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена53.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена54.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена55.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена56.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена57.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена58.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена59.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена60.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена61.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена62.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена63.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена64.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена65.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена66.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена67.jpg',
        nameImg: 'АА',
    },
    {
        src: './csenes/сцена68.jpg',
        nameImg: 'АА',
    },
    {
        src: 'бекстейдж5.jpg',
        nameImg: 'АА',
    },
    {
        src: 'бекстейдж1.jpg',
        nameImg: 'АА',
    },
    {
        src: 'бекстейдж2.jpg',
        nameImg: 'АА',
    },
    {
        src: 'бекстейдж3.jpg',
        nameImg: 'АА',
    },
    {
        src: 'бекстейдж4.jpg',
        nameImg: 'АА',
    },
        {
        src: 'бекстейдж6.jpg',
        nameImg: 'АА',
    },
];

const img= document.querySelector('img');
const button = document.querySelector('button');

const setImg = (currentDataImg) => {
    img.src = currentDataImg.src;
    img.alt = currentDataImg.nameImg;
}

setImg(listImages[0]);

button.addEventListener('click', onChangeImg);

let count = 0;

function onChangeImg() {
    count += 1;
    setImg(listImages[count]);
}