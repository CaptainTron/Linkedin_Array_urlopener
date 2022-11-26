const btn  =  document.getElementById('here');
const datainput = document.querySelector('.datainput');
const dataoutput = document.querySelector('.dataoutput');
const nextbtn = document.querySelector('.nextbtn');
const backbtn = document.querySelector('.backbtn');
const detail = document.querySelector('.details');
const name = document.querySelector('.nameinfo');

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
function opendetails(profileinfo){
    let urldetails;
    let i = profileinfo.length,k=0;
    detail.innerHTML = `<p><i class="fa fa-link"></i>  ${profileinfo[k].replace("https://www.","")}</p>`
    openlinks(`${profileinfo[k]}`);
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

function openlinks(links) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: links});
    });
    };
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        document.querySelector('.nameinfo').innerHTML = message.data; 
        document.getElementById('mail').innerHTML = `<i class="fa fa-envelope"></i>  ` + message.mailinfo; 
        console.log(message);
    });
    // let nameinfo = document.getElementById("app-container").querySelector('section').querySelector('.member-description').querySelector('.member-name').querySelector('span').innerText;
    // console.log(nameinfo);



// btn.addEventListener('click',function(){
    // let urls = document.getElementById('inputhere').value;
    // if(urls===""){
    //     alert("Nothing to Open !!");
    //     return;
    // }
//     const arrays = JSON.parse(urls);
//     alert(arrays);
//     openlinks(arrays);
// });
// function openlinks(name){
//         let i = name.length;
//         for(let k = 0;k<i;k++){
//             if(name[k].includes("linkedin.com")){
//                 chrome.tabs.create({url : name[k]});
//             }
//             else{
//                 alert("Array Contain Wrong Links")
//                 console.log("Url is not correct");
//                 return;
//             }
//         } 
// }