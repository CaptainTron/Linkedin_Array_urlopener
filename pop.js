let name = document.querySelector('.logindetails')

let username = "it2021071042";
let password = 6387305168;
let status = `  [ Active ]`;
name.innerHTML = "Vaibhav Yadav" + status;
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     // this will print data incoming from contentscript.js file
//     console.log(message)
//     // this will send data
//     sendResponse({ 
//         data: username,
//         data1:  password
//     }); 
// });












// // this method will open the linkedin feed in the background of page and passs the data of Like count and comment count to contentscript.js using internal messaging system
// go.addEventListener('click',function(){
//     // grab the active tab and initialte the update method
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         var tab = tabs[0]; 
//         // this will open the tabs here;
//         chrome.tabs.update(tab.id, {url: 'https://www.linkedin.com/feed/'});
//         })
//         // this method will pass the likecount and commentcount data to contentscript.js file
//     })  