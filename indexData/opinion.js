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