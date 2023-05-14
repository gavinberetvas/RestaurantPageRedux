import _ from 'lodash';
import './style.css';
// import component from './modules/test'
import wtf from './test.js';

 function component() {
   const element = document.querySelector('#content');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

   return element;
 }


 document.body.appendChild(component());
 document.body.append(wtf());