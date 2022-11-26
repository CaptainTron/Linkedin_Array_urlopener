// here grabbing all the classs and of the popup page
const btn  =  document.getElementById('here');
const datainput = document.querySelector('.datainput');
const dataoutput = document.querySelector('.dataoutput');
const nextbtn = document.querySelector('.nextbtn');
const backbtn = document.querySelector('.backbtn');
const detail = document.querySelector('.details');
const name = document.querySelector('.nameinfo');
// this will execute when user click the button on the popup , it will execute the function
btn.addEventListener('click',function(){
    let urls = document.getElementById('inputhere').value;
    if(urls===""){
        alert("Nothing to Open !!");
        return;
    }
    const arrays = JSON.parse(urls);
    datainput.classList.add('hidden');
    dataoutput.classList.remove('hidden');
    opendetails(arrays);
});
// this function will display the results into  the pop and put it there
function opendetails(profileinfo){
    let urldetails;
    let i = profileinfo.length,k=0;
    detail.innerHTML = `<p><i class="fa fa-link"></i>  ${profileinfo[k].replace("https://www.","")}</p>`
    openlinks(`${profileinfo[k]}`);
    // when user click the nextbtn it will execute the funciton +>
    nextbtn.addEventListener('click',function(){
        if(k<i){
            ++k;
            openlinks(`${profileinfo[k]}`);
            detail.innerHTML = `<p><i class="fa fa-link"></i>  ${profileinfo[k].replace("https://www.","")}</p>`;
            if(k>0){
                backbtn.classList.remove('hidden');
            }
            if(k==(i-1)){
                nextbtn.classList.add('hidden');
            }
        }else{
            nextbtn.classList.add('hidden');
            }
        });
        // when the user click backbtn it will execute here 
    backbtn.addEventListener('click',function(){
        if(k>0){
            --k;
            openlinks(`${profileinfo[k]}`);
            detail.innerHTML = `<p><i class="fa fa-link"></i> ${profileinfo[k].replace("https://www.","")}</p>`;
            if(k<i){
                nextbtn.classList.remove('hidden')
            }
            if(k==0){
                backbtn.classList.add('hidden');
            }
        }else{
            backbtn.classList.add('hidden');
        }
    })
}

// this function will open the links background of pop and open links one by one
function openlinks(links) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        // this will open the tabs here;
        chrome.tabs.update(tab.id, {url: links});
    });
    };
    // This will fetch the data from the content_scripts file and display it here
    chrome.runtime.onMessage.addListener(function (message) {
        // getting data from the contentScript.js and putting it on popup.html
        document.querySelector('.nameinfo').innerHTML = message.data; 
        document.getElementById('mail').innerHTML = `<i class="fa fa-envelope"></i>  ` + message.mailinfo; 
        console.log(message);
    });