webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

// xdsafdsfsdffdsfdssfdsd
// if(process.env.NODE_ENV != 'production'){
//   console.log('looks like we are in development mode!');
// }
function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!'
  element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 5)).then(module => {
    var print = module.default;
    print();
  });

  return element;
}

document.body.appendChild(component());
// function getComponent() {
//  //  var element = document.createElement('pre');
//  //  // var btn = document.createElement('button');
//  //
//  //  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//  //  // lodash, now imported by this script
//  //  element.innerHTML = [
//  //    'Hello webpack!',
//  //    '5 cubed is equal to '+ cube(5)
//  //  ].join('\n\n');
//  //  // btn.innerHTML = 'Click me and check the console!';
//  //  // btn.onclick = printMe;
//  //  // element.appendChild(btn);
//  //
//  //  // element.classList.add('hello');
//  //
//  // // var myIcon = new Image();
//  // // myIcon.src = Icon;
//  //
//  //  //element.appendChild(myIcon);
//  //
// 	// return element;
// 	//
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//      var element = document.createElement('div');
//
//      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//      return element;
//
//    }).catch(error => 'An error occurred while loading the component');
//
// }

// async function getComponent() {
//   var element = document.createElement('div');
//   const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
//
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//   return element;
// }

// getComponent().then(component => {
//    document.body.appendChild(component);
// })
// document.body.appendChild(component());
// let element =component();
// document.body.appendChild(element);

// if(module.hot){
// 	module.hot.accept('./print.js', function(){
// 		console.log('Accepting the updated printMe module!');
// 		// printMe();
// 		document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//
// 	});
// }


/***/ })
],[1]);