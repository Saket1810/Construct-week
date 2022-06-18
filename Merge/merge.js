let page2Data=[{
    title:  "MOVIES",
    img:    "https://www.indiatoday.in/movies/celebrities/story/sushant-singh-rajput-2nd-death-anniversary-sanjana-sanghi-shweta-singh-kirti-pen-heartfelt-notes-1962256-2022-06-14",
    img_title:  "Sushant Singh Rajput 2nd death anniversary: Celebs pen heartfelt notes <br>",
    para1:  "RRR gets a shoutout from DC's Batman Beyond writer Jackson Lanzing <br>",
    para2:  "Kiara Advani completes 8 years in films. Shahid Kapoor, Varun Dhawan congratulate",
    more:   "MORE FROM MOVIES >",
},
{
    title:  "LIFESTYLE",
    img:    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/kiara_advani.jpg?size=370:208",
    img_title:  "Kiara in simple black saree shows how to make noise with minimalism <br>",
    para1:  "Odisha celebrates Raja festival with great pomp and joy two years after Covid-19 pandemic <br>",
    para2:  "Kim in black bikini shares loved-up photos with boyfriend Pete",
    more:   "MORE FROM LIFESTYLE ",
},
{
    title:  "SPORTS",
    img:    "https://www.indiatoday.in/sports/cricket/story/sri-lanka-vs-australia-1st-odi-live-score-updates-sl-v-aus-pallekele-1962260-2022-06-14",
    img_title:  "Sri Lanka vs Australia, 1st ODI: Live Cricket Score and Updates from Pallekele <br>",
    para1:  "India qualify for Asian Cup Finals for 2nd successive time <br>",
    para2:  "Sri Lanka captain Dasun Shanaka meets young fan after viral celebration video",
    more:   "MORE FROM SPORTS ",
},
{
    title:  "PODCASTS",
    img:    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/IOD_India_Today_website.png?size=370:208",
    img_title:  "Kashmir and its Security Puzzle | In our Defence Ep 11 <br>",
    para1:  "From Gyanvapi to Shahi Idgah: Decoding the new mandir wapsi movement | Nothing But the Truth, Ep 08 <br>",
    para2:  "In our Defence, Ep 10 | Tour of Duty: A preposterous proposal?",
    more:   "MORE FROM INDIA TODAY PODCASTS ",
},
{
    title:  "TRENDING",
    img:    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/xxxx_(4).jpg?size=370:208",
    img_title:  "Majestic video of two tigers playing with each other goes viral <br>",
    para1:  "UP cop wins hearts after video of him offering mango slices to monkey goes viral <br>",
    para2:  "K'taka CM breaks down after watching 777 Charlie as he remembers his dog",
    more:   "MORE FROM TRENDING NEWS ",
},
{
    title:  "INDIA",
    img:    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/rahul_gandhi_ed_1200x768.jpeg?size=370:208",
    img_title:  "As ED calls in Rahul for 2nd day in a row, Baghel accuses BJP of 'political vendetta' <br>",
    para1:  "Political witch-hunt shameful, says TMC as CBI quizzes Abhishek's wife in coal scam <br>",
    para2:  "Over 100 booked for attacking teen who backed Nupur Sharma | India Today impact",
    more:   "MORE FROM INDIA ",
},

];

advertisement={
    link:   "https://tpc.googlesyndication.com/simgad/849167651671082313"
};

// -----------------slider Javascript-----------------------//

let num=0;

slideshow(num)
    function slideshow(num){
        let slides=document.getElementsByClassName("slide");
        for(let key of slides){
            key.style.display="none";
        }
        slides[num].style.display="block";
    };

    document.querySelector("#prev").addEventListener("click",function(){
     
        num--;
        if(num==-1){
            num=4;
        }
        slideshow(num);
    });
    document.querySelector("#next").addEventListener("click",function(){
     
        num++;
        if(num==4){
            num=0;
        }
        slideshow(num);
    });

    let Data=[
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Bombay_stock_exchange_PTI_0.jpeg?bTDczYfAcbZxyc9PdZtbD9wR0mWn5lat&size=170:96",title:"Markets decline for 6th day; Sensex sheds 135 points",para: "Markets declined for the sixth day on Friday as Sensex crashed 135 points in choppy trade amid mixed global markets."},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/biz_1200x768.jpeg?CXjV1rw_IjpOcyqLOI5N19bKPfgOS4dG&size=170:96",title:"Rate, inflation worries set Indian shares for worst week since May 2020",para: "Indian shares slipped in volatile trade on Friday and were on course for their worst week in over two years."},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/gold_and_silver_5_1200x768.jpeg?deYzpKWaSiJV5sdWeNMSHqfdWdx9X3UK&size=170:96",title:"Gold, silver prices dip on MCX | Check city-wise rates here",para: "Gold, silver prices today: On Friday, June 17, both gold and silver are trading on the lower side of the Multi Commodity Exchange (MCX). Check the latest city-wise prices here."},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Bombay_stock_exchange_PTI.jpeg?sySX6o0EtgbMk7bjWRsF_AlhZ_2h0bfM&size=170:96",title:"Sensex drop over 1,000 pts, Nifty ends below 15,400 over aggressive policy risks",para: "The Sensex crashed over 1,000 points while Nifty slumped below 15,400 on June 16."},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/6SAMNTRT7VOPROLBF6PSNBNXIU_8_1200x768.jpeg?SFszD8KgJX.4R3HlB5barL1GQZL3lrcQ&size=170:96",title:"Bitcoin price rises, other cryptocurrencies gain",para: "Bitcoin price rose 5.16 per cent at $22,077 on Thursday. Ethereum, the second largest cryprtocurrency, rose 6.03 per cent $1,190.37."},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/spicejet_1200x768.jpeg?fwtPvQP0zDS0afjjqHPMhxUSZNVAq4mp&size=170:96",title:"SpiceJet demands 15% hike in airfare as jet fuel prices touch all-time high",para: "As jet fuel touched an all-time high, SpiceJet has demanded a minimum increase of 10-15% hike in fares, citing the rising prices."},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/gold,_silver_prices_1652022.jpg?nrDEKyXzQ6F9wu7Ckt1WnTTIpp86I.W3&size=170:96",title:"Gold, silver prices record hike on MCX | Check latest rates here",para: "Gold, silver prices today: On Thursday, June 16, both gold and silver are trading on the higher side of the Multi Commodity Exchange (MCX). Check the latest city-wise prices here."},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/stock_market_3_1200x768.jpeg?Jj8j55dovZVYTHaz3YielzalYoQJJzC7&size=170:96",title:"Sensex rises 300 points, Nifty gains | Top gaining shares",para: "Nifty 50 index pared initial gains and was up 0.48 per cent or 74.90 points at 15,814.5, while the BSE index rose 0.58 per cent or 303.24 points to 52,996.9."},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/fed_1200x768.jpeg?Qq4mi_bxlW1By7p9qnzd0NZY87VhT56V&size=170:96",title:"US Federal Reserve hikes rates by 0.75 percentage point, largest increase since 1994",para: "The US Federal Reserve raised its target interest rate by 0.75 percentage point on Wednesday to stem a disruptive surge in inflation."},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/bitcoinreuters_13072022_0.jpg?l5zV_5vm2cuqHYoPmoIHAVNmCZHalgKB&size=170:96",title:"Crash of the Crypto: Why are cryptocurrency investors fleeing?",para: "The market credibility of cryptocurrencies is at stake even as investors become victim to plummeting market value."},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/digital_lending_1200x768.jpeg?RxcXKlc0thQTRrhRJBa0CAJXMCa8NxUH&size=170:96",title:"What is digital lending and its future",para: "Digital Lending involves lending through web platforms or mobile apps, utilizing technology for authentication and credit evaluation."},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/WTO_FEATURE.JPEG_1200x768.jpeg?XZuUvTXz6WxMAJC92kG8ugQ5mygOzZhi&size=170:96",title:"Head of WTO wants extension of key meet as spectre of zero solutions rises",para: "This seems to be a desperate move by the head of the WTO as member nations are sticking to their entrenched positions, signalling that a no solution scenario is far better than going back home with an 'adverse solution'"},
      
    ];
    
    // {avatar: "",title:"",para: ""},
    // {avatar: "",title:"",para: ""},
    // {avatar: "",title:"",para: ""},
    // {avatar: "",title:"",para: ""},
    // {avatar: "",title:"",para: ""},
    
    
    
    
    
    
    let smallData1=[
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Agniveer_military_graphic.jpg?size=88:50",title:"",para: "Agnipath: 11 countries where military service is compulsary | Interactive"},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Capture_12_1200x768.png?size=88:50",title:"",para: "US midterm elections 2022: Biden's worries and key issues | Deep Dive"},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Admiral_1200x768.png?size=88:50",title:"",para: "Move to modernise, transform armed forces: Chief of Naval Staff on Agnipath scheme"},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/rishabhpantindvsat20wc_1200x768.jpeg?size=88:50",title:"",para: "Is time running out for Rishabh Pant in T20Is?"},
    ];
    
    let smallData2=[
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/bihar_1200x768.png?size=88:50",title:"",para: "RJD calls for Bihar bandh tomorrow over Agnipath scheme"},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/WhatsApp_Image_2022-06-17_at_4.jpeg?size=88:50",title:"",para: "Groom Kidnapping in Bihar: Veterinary Doctor Kidnapped, Forcefully Married in Begusarai"},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/YT_&_FB_HORIZONTAL_copy_(24)_0.png?size=88:50",title:"",para: "House of cards actor Kevin Spacey given bail, what happens to #metoo now?"},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/chole_1200x768.png?size=88:50",title:"",para: "Lizard Found In 'Chole Bhature' At Sagar Ratna In Chandigarh"},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/proytest_0_1200x768.png?size=88:50",title:"",para: "Agnipath protest: Rs 3 lakh looted from ticket counter at Bihiya railway station in Bihar"},
    ];
    
    let smallData3=[
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/train_1-88x50.jpeg?vLaXLP4VJ0kW6qI1UqXxrf7TEdPkgnqu",title:"",para: "Indian Railways Launched First Private Train Under 'Bharat Gaurav Scheme"},
        {avatar: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/bihar_0-88x50.png?8fYVrSokhC9z45WiYJb1gsOm0kPSG.nO",title:"",para: "Protests against Agnipath scheme rage on: Who's instigating aspirants and what's the way forward?"},
        
        
    ];

    Data.forEach(function(ele,ind){
        let main=document.createElement("div");
        let imgdiv=document.createElement("div");
        let textdiv=document.createElement("div");
        let titlediv=document.createElement("div");
        let paradiv=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",ele.avatar);
        titlediv.innerText=ele.title;
        imgdiv.setAttribute("class","imgdiv");
        titlediv.setAttribute("class","titlediv");
        paradiv.setAttribute("class","paradiv")
        paradiv.innerText=ele.para;
        imgdiv.append(img);
        textdiv.append(titlediv,paradiv);
        main.append(imgdiv,textdiv);
        document.querySelector("#big").append(main);
    
    
    
    
    
    
    
    });
    
    let smallHead1=document.createElement("div");
    let titleHead1=document.createElement("div");
    let emptyHead1=document.createElement("div");
        smallHead1.setAttribute("class","smallHead");
        titleHead1.setAttribute("class","titleHead");
        emptyHead1.setAttribute("class","emptyHead");
        titleHead1.innerText="READ THIS";
        smallHead1.append(titleHead1,emptyHead1);
        document.querySelector("#small").append(smallHead1);
    
    smallData1.forEach(function(ele,ind){
        let main=document.createElement("div");
        let imgdiv=document.createElement("div");
        let textdiv=document.createElement("div");
        let titlediv=document.createElement("div");
        let paradiv=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",ele.avatar);
        titlediv.innerText=ele.title;
        imgdiv.setAttribute("class","imgdiv");
        titlediv.setAttribute("class","titlediv");
        paradiv.setAttribute("class","paradiv")
        paradiv.innerText=ele.para;
        imgdiv.append(img);
        textdiv.append(titlediv,paradiv);
        main.append(textdiv,imgdiv);
        document.querySelector("#small").append(main);
    
    });
    
    
    
    let smallHead2=document.createElement("div");
    let titleHead2=document.createElement("div");
    let emptyHead2=document.createElement("div");
        smallHead2.setAttribute("class","smallHead");
        titleHead2.setAttribute("class","titleHead");
        emptyHead2.setAttribute("class","emptyHead");
        titleHead2.innerText="WATCH RIGHT NOW";
        smallHead2.append(titleHead2,emptyHead2);
        document.querySelector("#small").append(smallHead2);
    
    smallData2.forEach(function(ele,ind){
        let main=document.createElement("div");
        let imgdiv=document.createElement("div");
        let textdiv=document.createElement("div");
        let titlediv=document.createElement("div");
        let paradiv=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",ele.avatar);
        titlediv.innerText=ele.title;
        imgdiv.setAttribute("class","imgdiv");
        titlediv.setAttribute("class","titlediv");
        paradiv.setAttribute("class","paradiv")
        paradiv.innerText=ele.para;
        imgdiv.append(img);
        textdiv.append(titlediv,paradiv);
        main.append(textdiv,imgdiv);
        document.querySelector("#small").append(main);
    
    });
    
    
    let smallHead3=document.createElement("div");
    let titleHead3=document.createElement("div");
    let emptyHead3=document.createElement("div");
        smallHead3.setAttribute("class","smallHead");
        titleHead3.setAttribute("class","titleHead");
        emptyHead3.setAttribute("class","emptyHead");
        titleHead3.innerText="TOP TAKES";
        smallHead3.append(titleHead3,emptyHead3);
        document.querySelector("#small").append(smallHead3);
    
    smallData3.forEach(function(ele,ind){
        let main=document.createElement("div");
        let imgdiv=document.createElement("div");
        let textdiv=document.createElement("div");
        let titlediv=document.createElement("div");
        let paradiv=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",ele.avatar);
        titlediv.innerText=ele.title;
        imgdiv.setAttribute("class","imgdiv");
        titlediv.setAttribute("class","titlediv");
        paradiv.setAttribute("class","paradiv")
        paradiv.innerText=ele.para;
        imgdiv.append(img);
        textdiv.append(titlediv,paradiv);
        main.append(textdiv,imgdiv);
        document.querySelector("#small").append(main);
    
    });
    let arr=[
        {img:"https://akm-img-a-in.tosshub.com/indiatoday/styles/user_picture/public/images/reporter/202206/Temp-1200x1200-1200x768.jpg?21AUATAJmimA.xaatlNzURY9lImcjrk2",
        para:"The mystery of the paving stones | OPINION",
        name:"by Lt Gen (retd.) Rakesh Sharma"
        },
        {img:"https://akm-img-a-in.tosshub.com/indiatoday/styles/user_picture/public/images/reporter/202203/CN_0_x.jpeg?LE9mxhrGhXGbAt6fZ5uK2damXrPKKdso",
        para:"A possible solution to the Kashmir issue | OPINION",
        name:"by Rajiv Tuli"
        },
        {img:"https://akm-img-a-in.tosshub.com/indiatoday/styles/user_picture/public/images/reporter/202112/rajiv_tuli-1200x768.jpeg?FP7IlbnBdY6rn0NKAKF2MM7WNCCILX0r",
        para:"Agnipath is transformatory but its ramifications need to be handled carefully",
        name:"by Lt Gen (retd.) Rakesh Sharma"
        },
        {img:"https://akm-img-a-in.tosshub.com/indiatoday/styles/user_picture/public/images/reporter/202206/Sandeep-1200x768.PNG?9UbrMVlBx02B64bJ36c0TnIjyCZFWBRK",
        para:"Let’s please lower the temperature of TV debates",
        name:"by Chaiti Narula"
        },
        {img:"https://akm-img-a-in.tosshub.com/indiatoday/styles/user_picture/public/images/reporter/202110/1-1200x768.png?Z5VDhgqTGrINyomzFsLsENcLR9DDde4S",
        para:"PM Modi’s charisma and a golden era of history in the making",
        name:"by Rajiv Tuli"
        }
    ];
    let img=document.querySelector("#opinion>img");
    let para=document.querySelector("#opinion>h3");
    let name=document.querySelector("#opinion>p");
    let Btn1=document.querySelector("#btn1");
    let Btn2=document.querySelector("#btn2");
    let imgnum=0;
    
    Btn1.addEventListener("click",function(){
        if(imgnum==0){
            imgnum=arr.length-1;
        }
        else{
            imgnum--;
        }
        img.src=arr[imgnum].img;
        para.innerText=arr[imgnum].para;
        name.innerText=arr[imgnum].name;
    })
    
    
    Btn2.addEventListener("click",function(){
        if(imgnum===arr.length-1){
            imgnum=0;
            
        }
        else{
            imgnum++;
        }
        img.src=arr[imgnum].img;
        para.innerText=arr[imgnum].para;
        name.innerText=arr[imgnum].name;
    })