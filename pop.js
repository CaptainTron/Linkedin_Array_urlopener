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


    // detail.innerHTML = `${arrays[0]}`
    opendetails(arrays);
    // chrome.tabs.create({active:true},{url : "https://google.com"});
});
function opendetails(profileinfo){
    let urldetails;
    let i = profileinfo.length,k=0;
    detail.innerHTML = `${profileinfo[k].replace("https://www.","")}`
    openlinks(`${profileinfo[k]}`);
    nextbtn.addEventListener('click',function(){
        if(k<i){
            // urldetails=profileinfo[++k];
            ++k;
            openlinks(`${profileinfo[k]}`);
            alert(profileinfo[k])
            // urldetails = profileinfo[k].replace("https://www.","");
            detail.innerHTML = `${profileinfo[k].replace("https://www.","")} ${i} ${k}`;
            // name.innerHTML = `${urldetails.replace("linkedin.com/in/","")}`
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
            detail.innerHTML = `${profileinfo[k].replace("https://www.","")} ${i} ${k}`;
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