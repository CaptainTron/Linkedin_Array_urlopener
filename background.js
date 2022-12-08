
chrome.runtime.onStartup.addListener(startMMMUTlogin);

setInterval(startMMMUTlogin,1000);

function startMMMUTlogin(){
    let value = 1;
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(function (tab) {
          // do whatever you want with the tab
        //   console.log(tab.title);
          if(tab.url.includes("http://172.16.1.3:8090") ){
            //   console.log("Yes It is Open");
              value = 0;
          }
        });
        if(value==1){
            console.log("Opening a tab right now");
            chrome.tabs.create({ url: 'http://172.16.1.3:8090' });
            // This will send message to contentscript.js file
        //     chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        //  // this will print data incoming from contentscript.js file
        //     console.log(message)
        //  // this will send data
        //     sendResponse({ 
        //     data: username,
        //     data1:  password
        //     }); 
        //   });
        }

      });
}