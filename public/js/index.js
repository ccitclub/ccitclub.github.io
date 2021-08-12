import sal from 'sal.js';

const pathName = window.location.pathname.split('/')[1];
ready(() => {
  if(pathName === 'executives')
      sal({threshold:0.001})
  else 
    sal({threshold: 0.38})
});


function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }