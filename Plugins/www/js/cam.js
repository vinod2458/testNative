var cam = {
    
openCamera: function(){
    
    try{
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                    destinationType: Camera.DestinationType.FILE_URI });
        
        function onSuccess(imageURI) {
            var image = document.getElementById('myImage');
            image.src = imageURI;
        }
        
        function onFail(message) {
            alert('Failed because: ' + message);
        }
        //cordova.plugins.sample.coolMethod("test",function(e){alert(">>>>>"+e)},function(e){console.log(e)});
    } catch(e){
        alert('hi2' + e.message);
    }
    
}
}

var testbtn = document.getElementById('testbtn');
testbtn.addEventListener('click',function(e1){
                         cam.openCamera();
                         });