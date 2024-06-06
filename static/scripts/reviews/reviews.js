document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var openPopupBtn = document.getElementById("reviews-button");
    var closeBtn = document.getElementsByClassName("close-btn")[0];

    openPopupBtn.onclick = function() {
        popup.style.display = "block";
    }

    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

    document.getElementById("popupForm").onsubmit = function(event) {
        event.preventDefault();
        alert("Ваш отзыв отправлен. Скоро он будет опубликован на сайте");
        popup.style.display = "none";
        document.getElementById("popupForm").reset()
    }
});

