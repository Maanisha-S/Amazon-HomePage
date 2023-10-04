var slider_content=document.getElementById('box3');
    var pics=['Images/img1','Images/img2','Images/img3','Images/img4']
    var i=pics.length;
    var time=3000;
    
    function nextImage(){
      if(i<pics.length){
           i=i+1;
      }
      else{
        i=1;
      }
      slider_content.innerHTML="<img src="+pics[i-1]+".jpg>";
      
    }
    function prewImage(){
        if(i<pics.length+1 && i>1){
             i=i-1;
        }
        else{
          i=pics.length;
        }
        slider_content.innerHTML="<img src="+pics[i-1]+".jpg>";
        
      }
      setInterval(nextImage,time);