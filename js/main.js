'use strict';

//(function ($) {
//    $(document).ready(function () {
//        $('.song__list')
//    });
//})(jQuery);


var playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
 },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
 },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
 },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
 },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
 },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
 },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
 },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
 }
];


var counter = playList.length;
//declaration
var list = document.createElement('ol'),
    listLi = document.createElement('li');


//structurisation
var wrapperMain = document.querySelector('.wrapper');
wrapperMain.append(list);
list.classList.add("song__list");

//-------
var btnList = document.querySelector('.btnShowList');
btnList.style.color = 'red';
//btnList.onclick = showPlaylist();

btnList.onclick = function showPlaylist() {
    var i = 0;
    if (list.innerHTML == '') {
        var timerId = setTimeout(function addSong() {

            if (i < playList.length) {

                var j = i,
                    listLi = document.createElement('li');
                listLi.classList.add("list__item");
                listLi.innerHTML = (`<p class="itemSong{i}">` + playList[j].author + ' - ' + playList[j].song + '</p>');
                list.append(listLi);
                i++;
            }
            timerId = setTimeout(addSong, 100);
        }, 100);
    }
}

var btnEjectClick = document.querySelector('.btnEject');
btnEjectClick.onclick = function deletePlaylist() {
    list.innerHTML = '';
}

