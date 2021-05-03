
let imgheader = ['001.jpg','002.jpg','003.jpg','004.jpg','005.jpg','001.jpg','007.jpg',
'008.jpg','0010.jpg'];
let headeride = document.getElementById("headerid");
let nameweb = document.getElementById("namesit");
let colorname = ["#000","#114d27ed","#15E118","#541CCB","#EE1BC1","#871001","#2411ffd","#452027"];
let item = document.querySelectorAll("#conitem >div");
let gallry = ['001.jpg','002.jpg','003.jpg','004.jpg','005.jpg','006.jpg','007.jpg','008.jpg','0011.jpg','0010.jpg']
let gallryone = ["gallery1/001.jfif","gallery1/002.jfif","gallery1/003.jfif",
"gallery1/004.jfif","gallery1/006.jpg","gallery1/007.jfif","gallery1/008.jpg",
"gallery1/009.jpg","gallery1/0010.jfif"];   
let gallrybadroom = ["boderoom/001.jpg","boderoom/002.jpg","boderoom/003.jpg","boderoom/004.jpg",
"boderoom/005.jpg","boderoom/006.jpg","boderoom/007.jpg","boderoom/008.jpg",
"boderoom/009.jpg","boderoom/0010.jpg"] ;
let classicroom = ["classic/001.jpg","classic/002.jfif","classic/003.jfif","classic/004.jfif",
"classic/005.jpg","classic/006.jfif","classic/007.jpg","classic/008.jpeg",
"classic/009.jfif","classic/0010.jpg"];
let dinnertable =["tabel/001.jfif","tabel/002.jfif","tabel/003.jfif","tabel/005.jpg",
"tabel/006.jfif","tabel/007.jfif","tabel/008.jfif","tabel/009.jpg","tabel/0010.jfif"]
let gallrymodern = ["gallerymodern/001.jfif","gallerymodern/002.jfif","gallerymodern/003.jpg",
"gallerymodern/004.jpg","gallerymodern/005.jfif","gallerymodern/006.jfif","gallerymodern/007.jfif",
"gallerymodern/008.jfif","gallerymodern/009.jfif","gallerymodern/0010.jpg"];
//  =====================================================================================
                                    // start display img in headeride
// ========================================================================================                                    
 let backgroundimgcolor = setInterval (randomviweimg,3000)   ;
function randomviweimg(){
        let randomcolor = Math.floor(Math.random()*colorname.length);
        let randomimgdisss = Math.floor(Math.random()*imgheader.length);
        headeride.style.backgroundImage = `url(${imgheader[randomimgdisss]})`;
        nameweb.style.color = `${colorname[randomcolor]}`;
        headeride.style.transition = "all 2s linear";
    }
    

//  =====================================================================================
                                    // start display img in headeride
// ========================================================================================                                    
    
/*
                        =======================
                        create data for prodects  
                         ======================= 
                        */
                       let prodects = [
                        {
                            thisname:"modern bedroom furniture",
                            price:5000+"$",
                            color :'brown',
                            madein : 'egypt',
                            Piece : 5,
                            },
                            {
                                thisname:"badroom",
                                price:2000+"$",
                                color :'brown and whit',
                                madein : 'egypt',
                                Piece : 4,
      
                            },
                            {
                                thisname:"classic badroom",
                                price:4000+"$",
                                color :'black and silver',
                                madein : 'egypt',
                                Piece : 7,
                                },
                            {
                                thisname:"dinner tabel",
                                price:1000 + "$",
                                color :'silver and whit and black',
                                madein : 'egypt',
                                Piece : 5,
                                },
                            {
                                thisname:"classprodect5",
                                price: 1500  + "$",
                                color :'brown'+""+ "silver" +" "+ "red" +" "+ "grren"
                                + "purpel",
                                madein : 'egypt',
                                Piece : 5,
                                },
                            {
                                thisname:"chandelier",
                                price:800 + "$",
                                color :'brown'+" "+"red",
                                madein : 'egypt',
                                Piece : 1,
                                },
                            {
                                thisname:"Modern chandelier",
                                price:800 +"$",
                                color :'silver',
                                madein : 'egypt',
                                Piece :1 ,
                                },
                            {
                                thisname:"classprodect8",
                                price:11000,
                                color :'brown',
                                madein : 'egypt',
                                Piece : 5,
                                },
                            {
                                thisname:"classprodect11",
                                price:11000,
                                color :'brown',
                                madein : 'egypt',
                                Piece : 5,
                                },
                            {
                                thisname:"classprodect10",
                                price:11000,
                                color :'brown',
                                madein : 'egypt',
                                Piece : 5,
                                },
                            {
                                thisname:"classprodect11",
                                price:11000,
                                color :'brown',
                                madein : 'egypt',
                                Piece : 5,
                                },
                            {
                                thisname:"classprodect12",
                                price:11000,
                                color :'brown',
                                madein : 'egypt',
                                Piece : 5,
                                }
                           
                        ];
 

                 
                    // start displaydata in item

let itemcunter = 0 ; 
let prodectscunter  = 0 ;
function display(){
    for (let i =  0 ; i < item.length ; i++){
        item[itemcunter].firstElementChild.innerHTML = prodects[prodectscunter].thisname;
        item[itemcunter].children[2].innerHTML = prodects[prodectscunter].price;
        itemcunter++;
        prodectscunter++;
    }
}
display();
                    // end display data 
                                        /*
                                 =======================   
                                        end data prodects  
                                 ==========================
                                        */

                   /*
                    ===============================
                            control option
                    ===============================
                    */
 let buttontosid = document.getElementById("tosid"),
     buttongalleryview = document.getElementById("gallerysaid"),
     defoualticon = document.getElementById("defoualt");

     buttontosid.onclick = ()=>{
        deletea();
         for (let i = 0 ; i<item.length ; i++){
             item[i].classList.toggle("col1");
         }
     }
     buttongalleryview.onclick = ()=>{
        deletea();
         for (let i = 0 ; i<item.length ; i++){
             item[i].classList.add("col3");
         }
     }
     defoualticon.onclick = ()=>{
        deletea();
        
     }

 
   
                        /*
                        =======================
                            END CONTROLLIST
                        ======================= 
                        */

                       /*
                       =======================
                           START DELETE CLASS
                       ======================= 
                       */
function deletea(){
    item.forEach(e=>{
        e.classList.remove("col1","col3")
    });
}
                        /*
                        =======================
                            END DELET CLASS
                        ======================= 
                        
                    */
                        /*
                        =========================
                     start create element to viwe data
                        ==========================
                        */
let continer = document.getElementById("conitem");

item.forEach(n =>{
    n.children[1].addEventListener("click",()=>{
        
            
        //create div continer انشاء العنصر الرئيسى 
        let divdisplay = document.createElement("div");
        divdisplay.classList.add("divdisplay");
        document.body.appendChild(divdisplay);

        //create close mark انشاء زر الاعلاق
        let closemark = document.createElement("span");
        closemark.innerHTML = "close";
        closemark.className="closemark";
        divdisplay.appendChild(closemark);
    
        //colse toole work لاغلاق النافذه 
        closemark.addEventListener("click",()=>{
            divdisplay.parentNode.removeChild(divdisplay);
        })

         //create marklaft انشاء علامه الاتجاه يسار
         let spanmarklaft = document.createElement("span");
         spanmarklaft.innerHTML = "<";
         spanmarklaft.className="marklaft";
         divdisplay.appendChild(spanmarklaft);
         spanmarklaft.setAttribute("id","laft");
         let back = document.getElementById("laft");


        //create div to show imgcontiner 
        let divimg = document.createElement("div");
        divimg.className="divimg";
        divdisplay.appendChild(divimg);
        
        
        //create div diteles انشاء عنصر لاظهار بيانات 
        let divditels = document.createElement("div");
        divditels.classList.add("divditels");
        divimg.appendChild(divditels);

        //creat counterslider
        let numerimg = document.createElement("span");
        numerimg.className = "numerslider";
        divditels.appendChild(numerimg);
       
        //create p in the divditles
        let infor = document.createElement("p");
        infor.className = 'pin';
        infor.setAttribute("id","procdect")
        divditels.appendChild(infor);
        let dataviweinf = document.getElementById("procdect");

      //create div to viwe img 

        let imgviwe = document.createElement("div");
        imgviwe.className = "divviweimg";
        divimg.appendChild(imgviwe);
        imgviwe.setAttribute("id","imgv");
        let viweimg = document.getElementById("imgv");
       
     
        //create markright انشاء علامه الاتجاه يمين 

        let spanmarkright = document.createElement("span");
        spanmarkright.innerHTML = ">";
        spanmarkright.className="markright";
        divdisplay.appendChild(spanmarkright);
        spanmarkright.setAttribute("id","right");
        let next = document.getElementById("right");

          //  /////// start  DISPLAY DATA IN THE P  A   dataviweinf.innerHTML //////

          dataviweinf.style.fontSize = "18px";
          if (n .getAttribute("data") == 1){
            dataviweinf.innerHTML =

                                ` this room name  is: ${prodects[0].thisname} <br>
                                price is ${prodects[0].price} <br>
                                color is ${prodects[0].color} <br>
                                medein is ${prodects[0].madein} <br>
                                cunte of Piece ${prodects[0].Piece}`;

           
          }else if (n .getAttribute("data") == 2){
            dataviweinf.innerHTML =`

                                    this room name  is :${prodects[1].thisname} <br>
                                price is    ${prodects[1].price} <br>
                                color is    ${prodects[1].color} <br>
                                medein is    ${prodects[1].madein} <br>
                                cunte of Piece ${prodects[1].Piece}`;

            
          }else if (n .getAttribute("data") == 3){
            dataviweinf.innerHTML =`

                                this name room is :${prodects[2].thisname} <br>
                            price is    ${prodects[2].price} <br>
                            color is    ${prodects[2].color} <br>
                            medein is    ${prodects[2].madein} <br>
                            cunte of Piece   ${prodects[2].Piece}`;

          }else if (n .getAttribute("data") == 4){
            dataviweinf.innerHTML =`

                                this name room is : ${prodects[3].thisname} <br>
                            price is  ${prodects[3].price}  <br>
                            color is  ${prodects[3].color}  <br>
                            medein is  ${prodects[3].madein} <br>
                            cunte of Piece  ${prodects[3].Piece}`;

          }else if (n .getAttribute("data") == 5){
            dataviweinf.innerHTML =`

                            thisname room is :${prodects[4].thisname} <br>
                            price is ${prodects[4].price} <br>
                            color is ${prodects[4].color} <br>
                            medein is ${prodects[4].madein} <br>
                            cunte of Piece ${prodects[4].Piece}`;

          }else if (n .getAttribute("data") == 6){
            dataviweinf.innerHTML =`
            
                            thisname room is :${prodects[5].thisname} <br>
                            price is ${prodects[5].price} <br>
                            color is ${prodects[5].color} <br>
                            medein is ${prodects[5].madein} <br>
                            cunte of Piece ${prodects[5].Piece}`;

          }else if (n .getAttribute("data") == 7){
            dataviweinf.innerHTML =`

                            thisname room is :${prodects[5].thisname} <br>
                            price is ${prodects[5].price} <br>
                            color is ${prodects[5].color} <br>
                            medein is ${prodects[5].madein} <br>
                            cunte of Piece ${prodects[5].Piece}`;

          }else if (n .getAttribute("data") == 8){
            dataviweinf.innerHTML =`

                            thisname room is: ${prodects[7].thisname} <br>
                            price is ${prodects[7].price} <br>
                            color is ${prodects[7].color} <br>
                            medein is ${prodects[7].madein} <br>
                            cunte of Piece ${prodects[7].Piece}`;

          }else if (n .getAttribute("data") == 9){
            dataviweinf.innerHTML =`

                            thisname room is: ${prodects[8].thisname} <br>
                            price is ${prodects[8].price} <br>
                            color is ${prodects[8].color} <br>
                            medein is ${prodects[8].madein} <br>
                            cunte of Piece ${prodects[8].Piece}`;

          }else if (n .getAttribute("data") == 10){
            dataviweinf.innerHTML =`

                            thisname room is :${prodects[9].thisname} <br>
                            price is ${prodects[9].price} <br>
                            color is ${prodects[9].color} <br>
                            medein is ${prodects[9].madein} <br>
                            cunte of Piece ${prodects[9].Piece}`;

          }else if (n .getAttribute("data") == 11){
            dataviweinf.innerHTML =`

                            thisname room is :${prodects[10].thisname} <br>
                            price is ${prodects[10].price} <br> 
                            color is ${prodects[10].color} <br>
                            medein is ${prodects[10].madein} <br>
                            cunte of Piece ${prodects[10].Piece}`;

          }else if (n .getAttribute("data") == 12){
            dataviweinf.innerHTML =`

                        thisname room is :${prodects[11].thisname} <br>
                        price is ${prodects[11].price} <br>
                        color is ${prodects[11].color} <br>
                        medein is ${prodects[11].madein} <br>
                        cunte of Piece ${prodects[11].Piece}`;

          }else{

              alert("no data to display");
          }
          /////// end  DISPLAY DATA IN THE P  A   dataviweinf.innerHTML //////


let counterimggallry = 1;

          //  ///////////////////   next button  //////////////////
                    next.onclick = nextttt;          

                        function nextttt(){
                            if(counterimggallry == gallry.length){
                            }else{
                            counterimggallry++;
                            show();
                            }
                        }         
          //  ///////////////////  END next button  //////////////////     
          
          
       //  ///////////////////   back button  //////////////////
                        back.onclick = backkk;          
                        function backkk(){
                        if(counterimggallry == 1){
                        } else {
                            counterimggallry--;
                            show();
                        }
                        }        
         //  ///////////////////  END back button  //////////////////    


        //  ///////////////////  start display gallary  //////////////////

 function show(){
    if (n .getAttribute("data") == 1){

                imgv.innerHTML = `<img src = ${gallrybadroom[counterimggallry -1]} class = "imgv">`;
                numerimg.innerHTML= counterimggallry + "/" + gallrybadroom.length;

    }else if (n .getAttribute("data") == 2){

                imgv.innerHTML = `<img src = ${gallryone[counterimggallry -1]} class = "imgv">`;
                numerimg.innerHTML= counterimggallry + "/" + gallryone.length;

    }else if (n .getAttribute("data") == 3){

                imgv.innerHTML = `<img src = ${classicroom[counterimggallry -1]} class = "imgv">`;
                numerimg.innerHTML= counterimggallry + "/" + classicroom.length;

    }else if (n .getAttribute("data") == 4){

                imgv.innerHTML = `<img src = ${dinnertable[counterimggallry -1]} class = "imgv">`;
                numerimg.innerHTML= counterimggallry + "/" + dinnertable.length;

    }else if (n .getAttribute("data") == 5){

                imgv.innerHTML = `<img src = ${gallrymodern[counterimggallry -1]} class = "imgv">`;
                numerimg.innerHTML= counterimggallry + "/" + gallrymodern.length;
    }else{

                imgv.innerHTML = `<img src = ${gallry[counterimggallry -1]} class = "imgv">`;
                numerimg.innerHTML= counterimggallry + "/" + gallry.length;
    }
 }

show();

            //  ///////////////////  end display gallary  //////////////////



        
        })
})

                            /* ==============
                           data element spacial item
                              ==================
                             */
                            let spicalitemviwe =[
                                {
                                    srcs : "slider_K8gmKv.jpg",
                                    h1 : "Modern Line ",
                                    h3 : "haru safe"
                                },
                                {
                                    srcs : "slider_dqAnx9.jpg",
                                    h1 : "Modern Liveing set ",
                                    h3 : "HerMan"
                                },
                                {
                                    srcs : "slider_iqiMHi.jpg",
                                    h1 : "L-Shop Corner ",
                                    h3 : "AKimbo"
                                },
                                {
                                    srcs : "slider_kTE1qV.jpg",
                                    h1 : "L-Shop Corner ",
                                    h3 : "orgainc"
                                },
                            
                            ];

                         /*
                        ========================
                            end data 
                        ========================
                        */

                        /*
                        ========================
                             Display data  
                        ========================
                        */



                    let lichoose = document.querySelectorAll("#imgdiv li");
                    let infor = document.getElementById("info");
                    let h1imgdtad = document.getElementById("h2");
                    let pr = document.getElementById("p2");
                    let spaicalimg = document.getElementById("displayimg");


                        spaicalimg.src = ` ${spicalitemviwe[0].srcs}`;
                        h1imgdtad.innerHTML = `${spicalitemviwe[0].h1} `;
                        pr.innerHTML = `${spicalitemviwe[0].h3}`;
                        infor.style.backgroundColor = "#545a74";
        lichoose[0].onclick = ()=>{
                        spaicalimg.src = ` ${spicalitemviwe[0].srcs}`;
                        console.log(spaicalimg)
                        h1imgdtad.innerHTML = `${spicalitemviwe[0].h1} `;
                        pr.innerHTML = `${spicalitemviwe[0].h3}`;
                        infor.style.backgroundColor = "#545a74";
        
        };
        lichoose[1].onclick = ()=>{

                        spaicalimg.src = ` ${spicalitemviwe[1].srcs}`;
                        h1imgdtad.innerHTML = `${spicalitemviwe[1].h1} `;
                        pr.innerHTML = `${spicalitemviwe[1].h3}`;
                        infor.style.backgroundColor = "#37392f"
            
        };
        lichoose[2].onclick = ()=>{

                    spaicalimg.src = `${spicalitemviwe[2].srcs}`;
                    h1imgdtad.innerHTML = `${spicalitemviwe[2].h1} `;
                    pr.innerHTML = `${spicalitemviwe[2].h3}`;
                    infor.style.backgroundColor ="#171717"
                
        };
        lichoose[3].onclick = ()=>{

                    spaicalimg.src = ` ${spicalitemviwe[3].srcs}`;
                    h1imgdtad.innerHTML = `${spicalitemviwe[3].h1} `;
                    pr.innerHTML = `${spicalitemviwe[3].h3}`;
                    infor.style.backgroundColor ="#483417"
        }


                         /* ==============
                            End display
                         ==================
                                     */
                            /* 
                              ==================
                Display CART and save in local storge
                              ==================
                        */
                    let cartbtn  = document.querySelector("#cart");
                    let divcart = document.getElementById("cartdisplay");
                    let numberofcount = document.getElementById( "number_of_item");
                    let displaycontiner = document.getElementById("displaycontiner");
                    
  

                    
                        //=======================// start  display cart  ==============

                    cartbtn.onclick = btncart;
                    function btncart() {
                        divcart.classList.toggle("activediv"); 

                    }

                    //====================// end display cart  ========================

                    const hdname = document.getElementById("nameitem").innerHTML ;                          
let item_Array = [];

setdata();
function setdata(){
   item.forEach((i)=>{
                        i.children[3].addEventListener("click",()=>{     

                        const addtocart = i.children[3];    
                        const srcimg = i.children[1].src;
                        const pricitem = i.children[2].innerHTML;
                        divcart.classList.add("activediv");
                        item_Array.push({pricitem,hdname});
                     
                        console.log(parseInt(item_Array[0].pricitem));
                        for (let n = 0 ; n < item_Array.length ; n++ ){
                            console.log(item_Array.length);
                        }
                        


                        //====================== fillter Array to price  ===========
           

                            
                            //==============================================  

                     //======================// check if name of item is her  =============

 if(hdname){

                        addtocart.innerHTML = `<h2>In The Cart </h2>`;
                        addtocart.classList.add ("disb");                      
  }


                    //===================// display item in the cart  ====================

let numbercount = 0 ; 
  displaycontiner.innerHTML += `<div class = 'AllElement'>
                            <div class = "continerimg" >
                            <img src = ${srcimg} class = "imgitem" >
                            </div>
                            <div class = "nameitem">
                            <h4>${hdname}</h4>
                            </div>
                            <div class = "cunitem">
                            <span class = "mark" id="plusmark"> +</span>
                            <span  class = "mark" id = "itemcount">${numbercount}</span>
                            <span class = "mark"  id = "minsmark">-</span> 
                            </div>
                            <div class = "remove">
                            <i class="fas fa-trash-alt" id  = "removeitem"></i>
                            </div>
                            </div>
                            <hr>`; 

                            //===================// remove Button   =======================

                            let divAllElement = document.querySelector(".AllElement") ;                    
                            let BtnRemove = document.querySelectorAll("#removeitem");
                            let upbtn = document.querySelectorAll("#plusmark");
                            let downbtn = document.querySelectorAll("#minsmark");
                            let itemcounting = document.getElementById("itemcount");
                            console.log(itemcounting);
       
    //=================   Removeitem form cart and item_Array =====================

    function Removeitem() {
                            BtnRemove.forEach((REM)=>{
                            REM.addEventListener("click",(remVOE)=>{
                            let RemoneBtn = remVOE.target;
                            RemoneBtn.onclick = ()=>{
                            RemoneBtn.parentElement.parentElement.remove();
                                if(item_Array.includes(hdname)){
                                            item_Array.pop(pricitem);
                                            item_Array.pop(hdname);
                                } 
                                        console.log(item_Array)
                                    }
                                })
                                })
     }
                           //==============================================  

                            

      
    Removeitem() ;
    upButton(); 
    downButton();




                         //  =================== // UpBtn ====================

  function upButton(){               
         upbtn.forEach((up)=>{
              up.addEventListener("click",(e)=>{ 
                           let button = e.target;
                   button.onclick = ()=>{
                           numbercount ++;
                           console.log(numbercount)   

                   } 
              })
          })
}
                            //================// downButton  ======================


        function downButton(){               
            downbtn.forEach((down)=>{
                down.addEventListener("click",(Down)=>{
                    let BUTND = Down.target;
                    BUTND.onclick= ()=>{
                        numbercount -- ;
                        console.log(numbercount)
                    }
                })
            })
          }              
                    })
                    
                })
            };                     

        

                         //====================// totel priceview   ==============
;
