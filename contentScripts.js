(()  => {
    // creating variabls to store value so that it can be used for loops
        let ID = 'it2021071042', Password = 6387305168;
        let Uname = "Mr.Vaibhav Yadav";
        let inputuserID = document.querySelector('#credentials #username');
        let inputpassword = document.querySelector('#credentials #password');
        let specialgreet="";
        // receiveing message and sending message form pop.js file
        //   parsing data to int so that it can be used as nummbers
        

            console.log(ID);
            console.log(Password);
            inputuserID.value = ID;
            inputpassword.value = Password;
            let con = document.querySelector('body');
            con.style.backgroundColor = 'black';
            document.querySelector('#footerdiv').remove();
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
            let Night = "Night🌔";
            let Greet="Good ";
            const d = new Date();
            let hour = d.getHours();
            let minutes = d.getMinutes();
            if ((hour>=5) && (hour<=11 && minutes<=59)){
              Greet+=mor;
              specialgreet = `<br> "Great Way To Go!"`;
              document.querySelector('font').style.color = 'green';
              document.querySelector('font').style.textShadow = '0 0 2px green,0 0 2px yellow';
            }else if(hour>=12 && (hour<=16 && minutes<=59)){
              Greet+=afnn;
              document.querySelector('font').style.color = 'yellow';
              document.querySelector('font').style.textShadow = '0 0 5px yellow,0 0 10px red';
            }else if(hour>=17 && (hour<=20 && minutes<=59)){
              Greet+=eve;
              document.querySelector('font').style.color = 'orange';
              document.querySelector('font').style.textShadow = '0 0 16px orange';
            }else{
              Greet+=Night;
              specialgreet = `<br> "Time To Recharge Yourself Champ!"`
              document.querySelector('font').style.color = 'orange';
              document.querySelector('font').style.textShadow = '0 0 16px orange,0 0 2px yellow';
            }
            // document.querySelector('font').style.textDecoration = 'underline';
          
            document.querySelector('font').innerHTML = Greet +"! "+ Uname + specialgreet;
            
            // This will make promise and fetch data from the server and select randomly text from the data that we will get from
            let facts = () => {
            fetch("https://type.fit/api/quotes")
            .then((data) => data.json())
            .then((res)=>{
              console.log(res);
              let count = Math.floor(Math.random() * 1644);
              // document.querySelector('#panelheading').style.color = '#392eb8';
              document.querySelector('#panelheading').style.color = 'yellow';
              let quote = Math.random
              document.querySelector('#panelheading').innerHTML =`<p>${res[count].text}</p><p>- by ${res[count].author}</p>`;
              // console.log(res[0].text);
            });

            }
            facts();

              chrome.runtime.sendMessage({
                  data: "This one from Contentscript"
                   }, function (response) {
                    console.log(response);
                  });
                  
                  // alert('i made it');
                  // function clickthebtn(){
                  //   let clickbtn = document.querySelector('.buttonrow a');
                  //   clickbtn.click();
                  // }
                  // // setTimeout(clickthebtn, 4000);
          })();