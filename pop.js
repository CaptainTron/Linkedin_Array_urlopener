const like = document.querySelector('.cbtn');
const comment = document.querySelector('.cmbtn');
const btnv = document.querySelector('.btn');
const go = document.querySelector('.gobtn');
like.addEventListener('keyup',function(){
    if(like.value!="" && comment.value!=""){
        btnv.classList.remove('hidden');
    }else{
        btnv.classList.add('hidden')
    }
})
comment.addEventListener('keyup',function(){
    if(like.value!="" && comment.value!=""){
        btnv.classList.remove('hidden');
    }else{
        btnv.classList.add('hidden');
    }
})
go.addEventListener('click',function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                var tab = tabs[0]; 
                // this will open the tabs here;
                chrome.tabs.update(tab.id, {url: 'https://www.linkedin.com/feed/'});
})
})
//     // This will fetch the data from the content_scripts file and display it here
//     chrome.runtime.onMessage.addListener(function (message) {
//         // getting data from the contentScript.js and putting it on popup.html
         
//     });    