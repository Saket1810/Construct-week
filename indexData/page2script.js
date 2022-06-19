
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
// ----------Butons Activity-------------------


   document.querySelector("#app1").addEventListener("click",function(){
    window.location.href="https://goo.gl/qtxzZf"
   });

   document.querySelector("#app2").addEventListener("click",function(){
    window.location.href="https://goo.gl/BGCmrr"
   });

   document.querySelector("#app3").addEventListener("click",function(){
    window.location.href="https://goo.gl/S8unuW"
   });