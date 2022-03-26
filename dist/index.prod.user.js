// ==UserScript==
// @name        Show-Me-The-Porn-Trailer
// @namespace
// @version     0.0.0
// @author      TROJAN <ytj1996@gmail.com>
// @source      https://github.com/Trim21/webpack-userscript-template
// @match       https://www.naughtyamerica.com/*
// @require     https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js
// @require     https://cdn.jsdelivr.net/npm/axios@0.26.1/dist/axios.min.js
// @require     https://cdn.jsdelivr.net/npm/axios-userscript-adapter@0.1.11/dist/axiosGmxhrAdapter.min.js
// @grant       GM.xmlHttpRequest
// @connect     httpbin.org
// @run-at      document-end
// ==/UserScript==


/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/utils/add-video-btn.js
function AddBtn(obj) {
  // 创建按钮元素
  let btn = document.createElement('a');
  btn.innerText = '▶︎ 播放预告片'; // 按钮样式

  btn.style.padding = '10px 20px';
  btn.style.position = 'absolute';
  btn.style.right = '10px';
  btn.style.top = '10px';
  btn.style.background = 'white';
  btn.style.borderRadius = '8px'; // 文字样式

  btn.style.fontSize = '16px';
  btn.style.color = 'black';
  btn.style.textDecoration = 'none'; // 按钮属性

  btn.target = 'blank';
  btn.href = obj.videoUrl; // 添加显示按钮

  obj.div.appendChild(btn);
}
;// CONCATENATED MODULE: ./src/makers/naughty-america.js
function NA() {
  // ----- 获取视频地址 -----
  // 获取系列名称首字母
  let seriesCap = '';
  let seriesName = document.querySelector('.site-title').innerText;
  seriesName.split(' ').forEach(n => seriesCap += n.at(0));
  seriesCap = seriesCap.toLowerCase();

  switch (seriesCap) {
    case 'sbac':
      seriesCap = 'sbc';
      break;
  } // 获取演员名字组合


  let nameString = [];
  let aList = document.querySelectorAll('.scene-info .performer-list > a');
  aList.forEach(a => nameString.push(a.innerText.split(' ')[0]));
  nameString = nameString.join('').toLowerCase();
  console.log('演员名称字符串', nameString); // 拼接视频地址

  let videoUrl;
  videoUrl = `https://videos.naughtycdn.com/${seriesCap}/trailers/${seriesCap}${nameString}trailer_720.mp4`;
  console.log('视频地址', videoUrl); // ---- 添加页面按钮 -----

  let div = document.querySelector('.contain-start-card');
  return {
    div: div,
    videoUrl: videoUrl
  };
}
;// CONCATENATED MODULE: ./src/index.ts



async function main() {
  AddBtn(NA());
}

main().catch(e => {
  console.log(e);
});
/******/ })()
;