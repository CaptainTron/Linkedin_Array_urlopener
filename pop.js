const btn  =  document.getElementById('here') 
btn.addEventListener('click',function() {
    getCurrentTab() ;  
});
async function getCurrentTab() {
        let queryOptions = { active: true, lastFocusedWindow: true };
        let [tab]  = await chrome.tabs.query(queryOptions);
        document.getElementById('demo').innerHTML = tab.title;
        return tab;
}