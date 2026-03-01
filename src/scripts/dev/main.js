(function() {

    "use strict";
    const root = document.documentElement;
    const navToggle = document.querySelector("#js-navToggle");

    navToggle.addEventListener("click", function() {
        root.classList.toggle("show-nav");
    });
//burger-menu//

//pp//

    const reservePP = document.querySelector("#js-reservePP");

    if (reservePP) {
        const eventOpenBtn = document.querySelector("#js-eventOpenBtn");

        const closeEventPP = function(event) {
            function close() {
                document.removeEventListener("keyup", closeEventPP);
                reservePP.removeEventListener("click", closeEventPP);

                root.classList.remove("show-reserve-popup");
            };

            switch (event.type) {
                case "keyup":
                    if ( event.key === "Escape") close();
                    break;
                    case "click":
                        if (
                            event.target === this || 
                            event.target.classList.contains("js-ppCloseBtn")) {
                                close();
                                break;   
                            }         
            }
        };

        eventOpenBtn.addEventListener("click", function() {
            root.classList.add("show-reserve-popup");

            document.addEventListener("keyup", closeEventPP);
            reservePP.addEventListener("click", closeEventPP);
        });

       
    }
})();