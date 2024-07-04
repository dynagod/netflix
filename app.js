let languageSelects = document.querySelectorAll(".languageSelect");
let emails = document.querySelectorAll(".email");
let buttons = document.querySelectorAll(".questionsButton");

languageSelects.forEach(languageSelect => {
    languageSelect.addEventListener("click", function() {
        const i = this.closest('.select').querySelectorAll(".i");
        i.forEach(i => {
            languageSelect.focus();
        });
    });

    languageSelect.addEventListener('change', function (event) {
        const selectedLanguage = event.target.value;
        if (selectedLanguage === 'english') {
            window.location.href = "index.html";
        } else if (selectedLanguage === 'हिंदी') {
            window.location.href = "index-hi.html";
        }
    });
});

emails.forEach(email => {
    email.addEventListener("focus", () => {
        const labelId = email.getAttribute("id");
        const labels = document.querySelectorAll(".emailLabel");
        labels.forEach(label => {
            const forLabel = label.getAttribute("for");
            if(labelId === forLabel){
                label.classList.add("focusedLabel");
            }
        });
    });

    email.addEventListener("focusout", () => {
        if(email.value === ""){
            const labels = document.querySelectorAll(".emailLabel");
            labels.forEach(label => {
                label.classList.remove("focusedLabel");
            });
        }
    });

    email.addEventListener("focusout", function() {
        const emailRequired = this.closest('.typeEmail').querySelector(".err-emailRequired");
        const emailInvalid = this.closest('.typeEmail').querySelector(".err-emailInvalid");
        if(email.value !== ""){
            if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
                emailRequired.classList.add("hidden");
                emailInvalid.classList.remove("hidden");
                email.classList.add("redBorder");
                email.classList.remove("greenBorder");
            }
            
            email.addEventListener("input", function() {
                if(email.value.length < 5){
                    emailInvalid.classList.add("hidden");
                    emailRequired.classList.remove("hidden");
                    email.classList.add("redBorder");
                    email.classList.remove("greenBorder");
                }else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
                    emailRequired.classList.add("hidden");
                    emailInvalid.classList.remove("hidden");
                    email.classList.add("redBorder");
                    email.classList.remove("greenBorder");
                }else{
                    emailInvalid.classList.add("hidden");
                    emailRequired.classList.add("hidden");
                    email.classList.add("greenBorder");
                    email.classList.remove("redBorder");
                }
            });
        }
    });
});

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const id = document.getElementById(targetId);
        const i = button.querySelector("i");
        if(id.classList.contains("hidden")){
            id.classList.remove("hidden");
            i.classList.add("rotate");
        }else{
            id.classList.add("hidden");
            i.classList.remove("rotate");
        }
    });
});