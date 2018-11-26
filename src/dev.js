/** 
 * 该类用于开发调试, 打包时会忽略此文件.
 */
import { setLocal, getLocal } from './index';

setLocal('abc', 111);

document.querySelector('#app').innerHTML = `<h1>${getLocal('abc')}</h2>`;