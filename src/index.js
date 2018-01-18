import _ from "lodash";

// if(process.env.NODE_ENV != 'production'){
//   console.log('looks like we are in development mode!');
// }

function getComponent() {
 //  var element = document.createElement('pre');
 //  // var btn = document.createElement('button');
 //
 //  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
 //  // lodash, now imported by this script
 //  element.innerHTML = [
 //    'Hello webpack!',
 //    '5 cubed is equal to '+ cube(5)
 //  ].join('\n\n');
 //  // btn.innerHTML = 'Click me and check the console!';
 //  // btn.onclick = printMe;
 //  // element.appendChild(btn);
 //
 //  // element.classList.add('hello');
 //
 // // var myIcon = new Image();
 // // myIcon.src = Icon;
 //
 //  //element.appendChild(myIcon);
 //
	// return element;
	//
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
     var element = document.createElement('div');

     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

     return element;

   }).catch(error => 'An error occurred while loading the component');

}
getComponent().then(component => {
   document.body.appendChild(component);
})
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
