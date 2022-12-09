// This will open a tab just after starting a chrome browser
chrome.runtime.onStartup.addListener(function(){
    chrome.tabs.update({ url: 'http://172.16.1.3:8090' });
    sendmsg();
  });
  // This tab will check for removed tab, rest will taken care by function 
  chrome.tabs.onRemoved.addListener(startMMMUTlogin);
  // This function will check wheather there is any tab open or not if not it will open it else it will ignore it
  function startMMMUTlogin(){
    let value = 1;
    sendmsg();
    // This will query out through each tab on every single opened window of your chrome browser
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(function (tab) {
          if(tab.url.includes("http://172.16.1.3:8090") ){
            value = 0;
          }
        });
        if(value==1){
            console.log("Opening a tab right now");
            chrome.tabs.create({ url: 'http://172.16.1.3:8090' });
        }
      });
}
// Send msg to contentscript.js file and open when done
function sendmsg(){
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // this will print data incoming from contentscript.js file
    console.log(message)
    // this will send data
    sendResponse({ 
        data: "This msg from background page"
    }); 
});
}