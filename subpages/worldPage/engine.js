



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