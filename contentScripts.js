(()  => {
    // creating variabls to store value so that it can be used for loops
        let ID = 'it2021071042', Password = 6387305168;
        let inputuserID = document.querySelector('#credentials #username');
        let inputpassword = document.querySelector('#credentials #password');
        // receiveing message and sending message form pop.js file
        // chrome.runtime.sendMessage({
        //     data: "Data Fectched Successfully"
        //      }, function (response) {
        //       console.log(response);
        //     //   parsing data to int so that it can be used as nummbers
        //       ID = response.data;
        //       Password = parseInt(response.data1)
            //   console loggint the data to browser page that si linkedin page
              console.log(ID);
              console.log(Password);
            //   alert(totalcount);
            inputuserID.value = ID;
            inputpassword.value = Password;
            setInterval(() => {
              document.querySelector('.buttonrow a').click();
            }, 1000);
            // btn.click();
        // })
})();

 
        