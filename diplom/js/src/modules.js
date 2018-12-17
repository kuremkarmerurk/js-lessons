window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let showVideo = require('./parts/video.js'),
        changePage = require('./parts/changeModules');


    
    changePage();
    showVideo();
});