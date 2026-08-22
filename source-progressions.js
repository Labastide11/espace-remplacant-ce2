/* Espace Remplaçant V1.1 — données lues depuis Progressions CE2 */
(function(global){
'use strict';
const BASE='https://labastide11.github.io/progressions-ce2/';
const FILES=[
  'emploi-du-temps-data-p1.js','emploi-du-temps-data-p2.js','emploi-du-temps-data-p3.js','emploi-du-temps-data-p4.js','emploi-du-temps-data-p5.js',
  'public-emploi-du-temps.js',
  'data/remplacant-programme.js','data/remplacant-cahier-journal.js','data/remplacant-infos-pratiques.js',
  'data/devoirs-p1.js','data/devoirs-p2.js','data/devoirs-p3.js','data/devoirs-p4.js','data/devoirs-p5.js'
];
function load(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=BASE+src+'?sync='+Date.now();s.onload=resolve;s.onerror=()=>reject(new Error('Impossible de charger '+src));document.head.appendChild(s)})}
global.REMPLACANT_SOURCE_READY=(async()=>{for(const f of FILES)await load(f);return true})().catch(err=>{console.error('[Remplaçant]',err);global.REMPLACANT_SOURCE_ERROR=err;return false});
global.REMPLACANT_SOURCE_BASE=BASE;
})(window);
