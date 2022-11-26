(()  => {

                let nameinfo = document.getElementById("app-container").querySelector('section .member-description .member-name span').innerText;
                let mailinfo = document.getElementById("app-container").querySelector('.profile-overview-container .contacts-container ul li div a') .innerText;
                console.log(nameinfo);
                console.log(mailinfo);
                chrome.runtime.sendMessage({
                        data: nameinfo,mailinfo
                    });
})();