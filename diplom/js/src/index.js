window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let changePage = require('./parts/changePage'),
        showVideo = require('./parts/video.js'),
        mainSlider = require('./parts/mainSlider.js');


    mainSlider();
    changePage();
    showVideo();
});