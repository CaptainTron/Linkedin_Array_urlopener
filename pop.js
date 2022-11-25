const btn  =  document.getElementById('here');
btn.addEventListener('click',function(){
    let url = document.getElementById('inputhere').value;
    if(url==""){
        alert("Nothing to Open !!");
        return;
    }
    const arrays = JSON.parse("[" + url + "]");
    alert(arrays);
    // let arrays = ["https://google.com","https://google.com","https://google.com"];
    openlinks(arrays);
});

function openlinks(name){
        let i = name.length;
        for(let k = 0;k<i;k++){
            if(name[k].includes("https://www.linkedin.com/*")){
                setTimeout(function(){
                    chrome.tabs.create({url : name[k]});
                },1000)
            }
            else{
                alert("Wrong Url Has been Provided")
                console.log("Url is not correct");
                return;
            }
        } 
}






// async function getCurrentTab() {
//         let queryOptions = { active: true, lastFocusedWindow: true };
//         let [tab]  = await chrome.tabs.query(queryOptions);
//         document.getElementById('demo').innerHTML = tab.title;
//         return tab;
// }