
### 부모페이지 (iframe 호출 페이지)
```javascript
    //부모창
	window.addEventListener('message', postMessageController, false);
	function postMessageController(e){
		if(e.origin ==='https://m.shop.kt.com:444'){
			//console.log('자식한테 받은 높이값',e.data)
			document.querySelector('#iphoneFrame').style.height = e.data+'px';
		}
	}
```
### 자식페이지(iframe 주소페이지)
```javascript
    let selects = document.querySelectorAll('.selector-dropdown');
    window.addEventListener('resize', iframeResize);
    window.addEventListener('load', iframeResize);
    selects.forEach(function(obj){
        obj.addEventListener('change',iframeResize )  
    }); 


    function iframeResize(){
        let height = $('.channel-html').height();   
        //console.log('자식창 높이',height);
        window.parent.postMessage(height, '*'); 
    }
```
