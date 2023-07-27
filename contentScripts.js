(() => {
  
  // creating variabls to store value so that it can be used for loops
  let ID = 'it2021071042', Password = 0;
  let Uname = "Mr.Vaibhav Yadav";
  let inputuserID = document.querySelector('#credentials #username');
  let inputpassword = document.querySelector('#credentials #password');
  let specialgreet = "";
  // receiveing message and sending message form pop.js file
  // parsing data to int so that it can be used as nummbers

  // This wil handle the ID and Password for the login text;
  inputuserID.value = ID;
  inputpassword.value = Password;
  // This one to insert the Image to the Web Page
  // Creating the img container that will hold the IMG
  let imgdiv = document.createElement("div");
  const holdImg = document.createElement("img");
  holdImg.src = chrome.runtime.getURL("Images/Space_Images.jpg");
  // getting Inner width of browser
  // It will get data instant at the opening browser
  holdImg.style.width = window.innerWidth + "px";
  holdImg.style.height = window.innerHeight + "px";
  // Contain the background of Image
  holdImg.style.backgroundClip = "contain"
  imgdiv.appendChild(holdImg);
  // setting position absolute
  imgdiv.style.position = "absolute";
  // setting z -index to -1 
  imgdiv.style.zIndex = "-1";
  imgdiv.style.top = "0vh";
  imgdiv.style.left = "0vh";
  // Appending the div Container that will hold image and set z-index to -1 so that it appear in background
  document.querySelector('body').appendChild(imgdiv);


  document.querySelector('#footerdiv').remove();
  document.querySelector('.panel').style.boxShadow = '2px 2px 5px #15164a,6px 6px 11px #15164a';
  document.querySelector('.panel .panel-body').style.border = "thin solid black";
  document.querySelector('#panelheading').style.backgroundColor = '#021130';
  document.querySelector('.panel ').style.backgroundColor = '#040c21';
  document.querySelector('#signin-caption').style.color = '#8a8a0a';
  document.querySelector('.button').style.backgroundColor = '#14165e';
  // This will remove the CLG logo
  let getlogo = document.querySelector('#logo').remove();


  // This will Reduce the margin of Body to save space
  document.body.style.marginTop = "2vh";

  // This will add timer to extension to count time from last login

  let DOM_Timer = document.querySelector('.panel .panel-body');
  // This will get the submit button to activate once clicked
  let btnonclick = document.getElementById("loginbutton");
  // OnClick events will be handled here
  btnonclick.addEventListener('click', function () {
    facts();
    Keeptrackoftime();
  })

  // This function will show couner over the login page

  function Keeptrackoftime() {
    let Counter = document.createElement("h4");
    Counter.style.textShadow = "1px 1px 9px yellow, 1px 1px 14px red, 1px 1px 18px blue";
    let Dtxt = document.createElement("p");
    Dtxt.innerHTML += `Uptime : `;
    Dtxt.style.textShadow = "1px 1px 9px yellow, 1px 1px 14px red, 1px 1px 18px blue";

    // This will grab the DOM Div container where we will put our TImer
    // Here We will Keep track of Time since we are last login
    let Hours = 0;
    let Minutes = 0;
    let Seconds = 0;
    // setinterval method to update the Date and time in seconds 
    setInterval(() => {
      if (Minutes == 60) {
        Hours++;
        Minutes = 0;
      }
      if (Seconds == 60) {
        Minutes++;
        Seconds = 0;
      }
      DOM_Timer.innerHTML = "";
      Counter.innerHTML = `<h2>${Hours} : ${Minutes} : ${Seconds}</h2>`;
      DOM_Timer.appendChild(Dtxt);
      DOM_Timer.appendChild(Counter);
      Seconds++;
    }, 1000);

  }
  
  
  const facts = async () => {
    try {
      let One = Math.floor(Math.random() * 1000)
      fetch(`https://type.fit/api/quotes`)
      .then((result)=>result.json())
      .then((res)=>{
        document.querySelector('#panelheading').style.color = 'yellow';
        document.querySelector('#panelheading').innerHTML = `<p>${res[One].text}</p><p>- by ${res[One].author}</p>`;
      })
      .catch((err)=>console.log(err.message, err))
    }
    // If error happened Catch it here, "TypeError" Happence only when there is Network problem !
    catch (err) {
      console.log(err.message, err)
      // Changes the Color to red of the Notice 
      document.querySelector('#panelheading').style.color = 'red';
      // set Notice here
      document.querySelector('#panelheading').innerHTML = `No Internet Access🚫 !! <br> <h4>Try Again later !</h4>`
      // finally hide the timer 
      DOM_Timer.style.display = "none";
    }
  }

    


  // Here Greeting starts from here
  let mor = "Morning🌄";
  let afnn = "Afternoon🌞";
  let eve = "Evening🌇";
  let Night = "Night🌔";
  let Greet = "Good ";
  const d = new Date();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  if ((hour >= 5) && (hour <= 11 && minutes <= 59)) {
    Greet += mor;
    specialgreet = `<br> "Great Way To Go!"`;
    document.querySelector('font').style.color = 'green';
    document.querySelector('font').style.textShadow = '0 0 2px green,0 0 2px yellow';
  } else if (hour >= 12 && (hour <= 16 && minutes <= 59)) {
    Greet += afnn;
    document.querySelector('font').style.color = 'yellow';
    document.querySelector('font').style.textShadow = '0 0 5px yellow,0 0 10px red';
  } else if (hour >= 17 && (hour <= 20 && minutes <= 59)) {
    Greet += eve;
    document.querySelector('font').style.color = 'orange';
    document.querySelector('font').style.textShadow = '0 0 16px orange';
  } else {
    Greet += Night;
    specialgreet = `<br> "Time To Recharge Yourself Champ!"`
    document.querySelector('font').style.color = 'orange';
    document.querySelector('font').style.textShadow = '0 0 16px orange,0 0 2px yellow';
  }
  document.querySelector('font').innerHTML = Greet + "! " + Uname + specialgreet;

  // This will send data to the Background Js file to handle the data
  // chrome.runtime.sendMessage({
  //   data: "This one from Contentscript"
  // }, function (response) {
  //   console.log(response);
  // });




})();