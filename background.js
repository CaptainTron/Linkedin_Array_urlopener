// This will open a tab just after starting a chrome browser
let tabid;
chrome.runtime.onStartup.addListener(function () {
  chrome.tabs.update({ url: "http://172.16.1.3:8090" }, (tab) => {
    tabid = tab.id;
  });
  // sendmsg();
});
// setInterval(() => {
//   chrome.tabs.update({ url: 'http://172.16.1.3:8090' });
// }, 3000);
// This tab will check for removed tab, rest will taken care by function
// chrome.tabs.onUpdated.addListener(function(){
// });
chrome.tabs.onRemoved.addListener(startMMMUTlogin);
// This function will check wheather there is any tab open or not if not it will open it else it will ignore it
function startMMMUTlogin() {
  let value = 1;
  // sendmsg();
  // This will query out through each tab on every single opened window of your chrome browser
  chrome.tabs.query({}, function (tabs) {
    tabs.forEach(function (tab) {
      // console.log(tab.id);
      if (tab.url.includes("http://172.16.1.3:8090")) {
        // tabid = tab.id;
        chrome.tabs.move(tab.id, { index: 0 })
        value = 0;
      }
    });
    if (value == 1) {
      console.log("Login Page has been closed. Opening a tab right now");
      chrome.tabs.create({ url: "http://172.16.1.3:8090", selected: false }, (tab) => {
        chrome.tabs.move(tab.id, { index: 0 })
        console.log("Login Tab shifted to leftmost side!!");
        tabid = tab.id;
      });
      // This will move the login page tab into starting index, Ex at the start of the index
      // chrome.tabs.move(tabid, {index:0})
    }
  });
}
// Send msg to contentscript.js file and open when done
// function sendmsg() {
//   chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     // this will print data incoming from contentscript.js file
//     console.log(message)
//     // this will send data
//     sendResponse({
//       data: "This msg from background page"
//     });
//   });
// }

chrome.tabs.onCreated.addListener((tab) => {
  console.log("New Tab has been opened");
  chrome.tabs.move(tabid, { index: 0 })
})


// chrome.tabs.onActivated.addListener((activeInfo)=>{
//   if(tabid == activeInfo.tabId){
//     console.log("Hello Vaibhav")
//     open("pop.html")
//   }
//   // console.log(activeInfo);
// })


// async function moveToFirstPosition(activeInfo) {

//   console.log(tab);
// try {
// if(activeInfo.includes('http://172.16.1.3:8090')){ 
// await chrome.tabs.move(activeInfo.tabId, {index: 0});
// console.log('Success.');
// }
// } 
// catch (error) {
//   if (error == 'Error: Tabs cannot be edited right now (user may be dragging a tab).') {
//     setTimeout(() => moveToFirstPosition(activeInfo), 50);
//   } else {
//     console.error(error);
//   }
// }
// }
// chrome.tabs.onActivated.addListener(function(){
//   chrome.tabs.get(tabId, tab)(
//   console.log(tab)
//   )
// }
// chrome.tabs.query({}, function(tabs) {
//   tabs.forEach(function (tab) {
//     if(tab.url.includes("http://172.16.1.3:8090")){
//       chrome.tabs.move(tab.id, {index: 0});
//       console.log(tab);
//     }
//     // if(tab.url =="https://www.google.com"){
//     //   chrome.tabs.update(tab.id,{ url: 'chrome://newtab' });
//     // }
//   });
// });
// });

// this will refresh each page after 9min so you don't need to login regularly
// setInterval(() => {
//   chrome.tabs.query({}, function(tabs) {
//     tabs.forEach(function (tab) {
//         if(tab.url.includes("http://172.16.1.3:8090")){
//           console.log("Timeout, Refreshing the Page");
//           chrome.tabs.update(tab.id,{ url: 'http://172.16.1.3:8090' });
//         }
//     });
//   });
// }, 40000);

chrome.tabs.onUpdated.addListener(function () {
  chrome.tabs.query({}, function (tabs) {
    tabs.forEach(function (tab) {
      if (tab.url == "https://www.google.com") {
        chrome.tabs.update(tab.id, { url: 'chrome://newtab' });
      }
    });
  });
});



    // Testing Zone
    // chrome.bookmarks.create({
    //   'index': 0,
    //   'title': 'baa',
    //   'url': 'https://developer.chrome.com/docs/extensions',
    // },()=>{
    //   console.log("Bookmarks Has been Created")
    // });