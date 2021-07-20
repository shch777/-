
    let x = 0,
        y = 0,
        mx = 0,
        my = 0,
        speed =0.09;

    let cursor,
        yesBtn,
        noBtn;
    

    window.onload = function(){
        window.addEventListener('mousemove',cursorFunc,false);
       
        yesBtn = document.querySelector('#yes');
        noBtn = document.querySelector('#no');
        cursor = document.querySelector('.cursor');
        circle = document.querySelector('.circle');

        //네 버튼
        yesBtn.addEventListener('mouseover', function(){
            console.log('cursor')
            cursor.classList.add('on');
        });
        yesBtn.addEventListener('mouseout', function(){
            cursor.classList.remove('on');
        });

        //아니오 버튼
        noBtn.addEventListener('mouseover', function(){
            console.log('cursor')
            cursor.classList.add('on');
        });
        noBtn.addEventListener('mouseout', function(){
            cursor.classList.remove('on');
        });

        function cursorFunc(e){
            x = e.clientX;
            y = e.clientY;
        }

        loop();
    }

    function loop(){

        mx += (x-mx)*speed;
        my += (y-my)*speed;
        

        cursor.style.transform = "translate("+mx+"px,"+my+"px)";

        window.requestAnimationFrame(loop);
    }