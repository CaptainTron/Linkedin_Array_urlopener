(()  => {
                // this will get the name and mail address of profile and put it on console
                let nameinfo = document.getElementById("app-container").querySelector('section .member-description .member-name span').innerText;
                let mailinfo = document.getElementById("app-container").querySelector('.profile-overview-container .contacts-container ul li div a') .innerText;
                // console here
                console.log(nameinfo);
                console.log(mailinfo);
                // talking to the popup.html and sending the data to pop;
                // Ex. name of profile and Mailaddress of the profile. 
                chrome.runtime.sendMessage({
                        data: nameinfo,mailinfo
                });  
})();