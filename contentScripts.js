(()  => {
    // creating variabls to store value so that it can be used for loops
        let ID = 'it2021071042', Password = 6387305168;
        let Uname = "Mr.Vaibhav Yadav";
        let inputuserID = document.querySelector('#credentials #username');
        let inputpassword = document.querySelector('#credentials #password');
        let clickbtn = document.querySelector('.buttonrow a');
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
            inputuserID.value = ID;
            inputpassword.value = Password;
            let con = document.querySelector('body');
            con.style.backgroundColor = 'black';
            let mar = document.querySelector('marquee');
            mar.style.backgroundColor = 'black';
            document.querySelector('marquee').remove();
            document.querySelector('#footerdiv').remove();
            document.querySelector('font').remove();
            document.querySelector('.panel').style.boxShadow = '2px 2px 5px #15164a,6px 6px 11px #15164a';
            document.querySelector('#panelheading').style.backgroundColor = 'black';
            document.querySelector('.panel ').style.backgroundColor = '#040c21';
            document.querySelector('#signin-caption').style.color = '#8a8a0a';
            document.querySelector('.button').style.backgroundColor = '#14165e';
            
            let getlogo = document.querySelector('#logo')
            getlogo.style.backgroundImage = 'none'
            
            
            let mor = "Morning🌄";
            let afnn = "Afternoon🌞";
            let eve = "Evening🌇";
            let Night = "Night🌙";
            const d = new Date();
            let Greet = "Good ";
            let hour = d.getHours();
            if (hour>=5 && hour<=12){
              Greet+=mor;
            }else if(hour>12 && hour<=17){
            Greet+=afnn;
            }else if(hour >17 && hour<=21){
              Greet+=eve;
            }else{
              Greet+=Night;
            }
            let e_mji = ["😀","😁","😂","🤣","😆","😋","😎","😍","🥰"]
            let e_len = e_mji.length,i=0;

            document.querySelector('font').style.textShadow = '0 0 16px red,0 0 2px blue';
            document.querySelector('font').innerHTML = Greet +"! "+ Uname;
            
      




            let facts = () => {
            fetch("https://type.fit/api/quotes")
            .then((data) => data.json())
            .then((res)=>{
              console.log(res);
              let count = Math.floor(Math.random() * 1644);
              // document.querySelector('#panelheading').style.color = '#392eb8';
              document.querySelector('#panelheading').style.color = 'yellow';
              let quote = Math.random
              document.querySelector('#panelheading').innerHTML =`<p>${res[count].text}</p>`;
              // console.log(res[0].text);
            });

            }
            facts();
            clickbtn.click();


          })();