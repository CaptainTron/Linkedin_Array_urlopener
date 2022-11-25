   async function getCurrentTab() {
           let details = { active: true, lastFocusedWindow: true };
           let [tab]  = await chrome.tabs.query(details);
           console.log(tab.title);
           return tab;
           }
           console.log("Hello I'm Here");
           console.log(getCurrentTab());
 
 