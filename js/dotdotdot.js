<span id="wait">.</span>

<script>
    window.dotsGoingUp = true;
    var dots = window.setInterval( function() {
        var wait = document.getElementById("wait");
        if ( window.dotsGoingUp ) 
            wait.innerHTML += ".";
        else {
            wait.innerHTML = wait.innerHTML.substring(1, wait.innerHTML.length);
            if ( wait.innerHTML === "")
                window.dotsGoingUp = true;
        }
        if ( wait.innerHTML.length > 9 )
            window.dotsGoingUp = false;



        }, 100);
    </script>