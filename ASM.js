var dsimg = ["1.jpg" , "2.jpg" , "3.jpg" , "4.jpg" , "5.png" , "6.jpg" , "7.jpg" ];
var index = 0;
document.getElementById('slide').src="image/"+dsimg[index];

function back(){
    index++;
    if(index==dsimg.length){
        index=0;
    }
    document.getElementById('slide').src="image/"+dsimg[index];
}

function next(){
    index++;
    if(index==dsimg.length){
        index=0;
    }
    document.getElementById('slide').src="image/"+dsimg[index];
}