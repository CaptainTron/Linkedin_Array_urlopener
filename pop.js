const btn  =  document.getElementById('here');
btn.addEventListener('click',function(){
    let urls = document.getElementById('inputhere').value;
    if(urls===""){
        alert("Nothing to Open !!");
        return;
    }
    const arrays = JSON.parse(urls);
    alert(arrays);
    openlinks(arrays);
});
function openlinks(name){
        let i = name.length;
        for(let k = 0;k<i;k++){
            if(name[k].includes("linkedin.com")){
                chrome.tabs.create({url : name[k]});
            }
            else{
                alert("Array Contain Wrong Links")
                console.log("Url is not correct");
                return;
            }
        } 
}




