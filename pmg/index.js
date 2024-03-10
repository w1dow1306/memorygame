
const grid  = document.querySelectorAll(".card")
const images = ["😀","😎","🥶","🥵","🙄","🤡","👽","🤧"]
score=0
time =0
index=0;

const pairs =[]



function duplicate(n1,n2){
    /**
     * CHECK IF THE PAIR IS ALREADY GENERATED
     */
    a = false;
    if(n1==n2){
        a=true;
    }
    pairs.forEach((pair)=>{
        if(pair.includes(n1)||pair.includes(n2)){
            a= true;
        }
    })    
        return a;
}






function createpairs(){
    /**
     * create 8 random pairs for each emoji 
     */
    while(index<8){
        x = Math.floor(Math.random() * 16);
        y = Math.floor(Math.random() * 16);
        if(!duplicate(x,y)){
            pairs[index]=[x,y]
            index+=1;
        }
    } 
    index=0;
}





function won(){
    /** when the user wins this is excted */
    hgh = parseInt(document.cookie.split("=")[1])
    confirm(`score :   ${time}`)
    if(time>hgh||!(document.cookie)){
        document.cookie="highscore="+time;
    }
    document.location.reload();
}




function check(pair){
    /** chcks if the two boxes selected are of same emoji or not */
   box1= grid[pair[0]];
   box2= grid[pair[1]];
   for(let pairx of pairs){
    if(pairx.includes(pair[0])&&pairx.includes(pair[1])){
        box1.classList.add("found")
        box2.classList.add("found")
        box1.children[0].classList.add("ss")
        box2.children[0].classList.add("ss")
        score+=1;
        if(score==8){
            setTimeout(won(),1000)
        }
    }else{
        setTimeout(()=>{
            box1.classList.remove("showing")
            box2.classList.remove("showing")
            box1.children[0].classList.remove("ss")
            box2.children[0].classList.remove("ss")
        },500)
    }
   }
}





function main(){
    try{
        update()
    }catch(e){console.error(e)}
    boxpair=[0,1]
    count = 0;
    grid.forEach((box,bn)=>{
        box.addEventListener('click',(e)=>{
            box.classList.add("showing")
            box.children[0].classList.add("ss")
            if(count==1){
                boxpair[count]=bn;
                check(boxpair)
                count=0;
            }else{
                boxpair[count]=bn;
                count+=1;
            }
        })
    })
}


function update(){
    index=0;
    createpairs()
    images.forEach((image,i)=>{
        z = pairs[i][0]
        k = pairs[i][1]
        grid[z].children[0].innerText=image;
        grid[k].children[0].innerText=image;
    })
}


function stopwatch(){
    console.log("Stopwatch started")
    const inter = setInterval(() => {
        time+=1;
        document.getElementById("tm").innerText = time +"s";
    }, 1000);
}





start = document.getElementById("startg")
start.addEventListener('click',(e)=>{
    /**disables clicking without starting the game */
    grid.forEach((item)=>{
        item.style.pointerEvents = "all";
    })
    stopwatch()
})

main()
document.getElementById("highscore").innerHTML = document.cookie.split("=")[1]+" sec";





/**
 * code writeen completely from scratch and nt copied 
 * if you liked it follow me on insta https://www.instagram.com/bitfo.dev/
 * if you liked it follow me on insta https://www.instagram.com/_avinash__1306/
 * github: https://github.com/w1dow1306?tab=repositories
 * thanks 
 




                                                                                                     -----------Peace✌------------                                                                      -w1dow              












*/