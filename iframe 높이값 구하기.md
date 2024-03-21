
### 부모페이지 (iframe 호출 페이지)
```javascript
    //부모창
    <iframe src="childre.html" id="iphoneFrame" frameborder="0" ></iframe>
    <script>
       	window.addEventListener('message', postMessageController, false);
        function postMessageController(e){         
            console.log('자식한테 받은 높이값',e.data)  
            document.querySelector('#iphoneFrame').style.height = e.data;
            
        }
    </script>
```
### 자식페이지(iframe 주소페이지)
```javascript
    <div id="objHeight" style="height:500px;">
        height:500
        <button onclick="big()">본문 크게</button>
    </div>
    
    <script>

    function iframeResize(){
        var  height = document.querySelector('#objHeight').style.height; 
        //console.log('자식창 높이',height);
        window.parent.postMessage(height, '*'); 
    }
    iframeResize();
    function big(){
        document.querySelector('#objHeight').style.height="1000px";
        iframeResize();
    }
    </script>
```
