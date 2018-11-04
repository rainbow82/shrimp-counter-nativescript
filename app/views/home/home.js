var frameModule = require('ui/frame');
const view = require("tns-core-modules/ui/core/view");

let counter = 0;

function onTapIncrease(args){
    counter++;
    console.log('counter ' + counter);
    let button = args.object;
    let parent = button.parent;
    let shrimpCount = view.getViewById(parent, "shrimpCount");
    shrimpCount.text = 'Shrimp Eaten: ' + counter;
}

function onTapDecrease(args){
    counter--;
   if (counter <= 0){
    counter = 0;
    }
    console.log('counter ' + counter);
    let button = args.object;
    let parent = button.parent;
    let shrimpCount = view.getViewById(parent, "shrimpCount");
    shrimpCount.text = 'Shrimp Eaten: ' + counter;
}


exports.onTapIncrease = onTapIncrease;
exports.onTapDecrease = onTapDecrease;


// const view = require("tns-core-modules/ui/core/view");
// let count = 0;
// function buttonTap(args) {
//     count++;
//     let button = args.object;
//     let parent = button.parent;
//     if (parent) {
//         let lbl = view.getViewById(parent, "Label1");
//         if (lbl) {
//             lbl.text = "You tapped " + count + " times!";
//         }
//     }
// }
// exports.buttonTap = buttonTap;