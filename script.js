function read_btt(){
    var bttn = document.getElementById("click");
    var read_para = document.getElementById("read");
     if(read_para.style.display ==="none"){
        read_para.style.display="inline";
        bttn.value = "Read Less";
     }
     else{
        read_para.style.display = "none";
        bttn.value = "Read More";
     }

}
