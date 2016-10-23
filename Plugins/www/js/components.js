var components = {
    
btnHandler: function(){
    var testbtn = document.getElementById('testbtn');
    testbtn.addEventListener('click',function(e1){
                             cam.openCamera();
                             });
}
}