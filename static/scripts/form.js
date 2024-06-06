document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById('user-form');
    const username = document.getElementById('username');
    const phone = document.getElementById('phone');
    const animal = document.getElementById('animal')
    const issue = document.getElementById('issue')
    const currentRequestDataDiv = document.getElementById('current-data')
    const currentRequestButton = document.getElementById("info-button");

    currentRequestButton.addEventListener('click', e => {
        e.preventDefault();
        get_current_request();

    });

    form.addEventListener('submit', e=> {
        e.preventDefault();
        validateInputs();
    

    });
    const setError = (element, message) => {
        const form_group = element.parentElement;
        const errorDisplay = form_group.querySelector('.error');
    
        errorDisplay.innerText = message;
        form_group.classList.add('error');
        form_group.classList.remove('success');
        
    }

    const setSuccess = element => {
        const form_group = element.parentElement;
        const errorDisplay = form_group.querySelector('.error');
    
        errorDisplay.innerText = '';
        form_group.classList.add('success');
        form_group.classList.remove('error');
    };

    const is_valid_phone = phone => {
        const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return re.test(String(phone));
    }

    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const phoneValue = phone.value.trim();
        const animalValue = animal.value.trim();
        const issueValue = issue.value.trim();
        let isValid = true;
       
    
        if(usernameValue === '') {
            setError(username, 'Введите ваше ФИО');
            isValid = false;
        } else {
            setSuccess(username);
        }
    
        if(phoneValue === '') {
            setError(phone, 'Введите ваш номер телефона');
            isValid = false;
        } else if (!is_valid_phone(phoneValue)) {
            setError(phone, 'Введите корректный номер телефона в формате +7 XXX XXX XXXX');
            isValid = false;
        } else {
            setSuccess(phone);
        }
    
    
        if(animalValue === '') {
            setError(animal, 'Выберите вашего питомца');
            isValid = false;
        } else {
            setSuccess(animal);
        }
        
        if(issueValue === '') {
            setError(issue, 'Опишите что случилось с вашим питомцем');
            isValid = false;
        } else {
            setSuccess(issue);
        }

        if (isValid){
            const userData = {
                Имя: usernameValue,
                Телефон: phoneValue,
                Питомец: animalValue,
                "Причина обращения":issueValue
            };
            currentRequestDataDiv.innerText = JSON.stringify(userData);
            form.reset();
        }}


    
    const popupContainer = document.getElementById("popup-container");
    const closePopupButton = document.getElementById("close-popup");
    const overlay = document.getElementById("overlay")
    
    closePopupButton.addEventListener("click", () => {
        popupContainer.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflowY = "";
    })


    //Отображаем заявку во всплывающем окне
    const get_current_request = () =>{
            
        popupContainer.style.display = "flex";
        popupContainer.style.flexDirection = "column";
        overlay.style.display = "block";
        overlay.style.position = "fixed";
        document.body.style.overflowY = "hidden";
        const current_data = document.getElementById("current-data").innerText;
        if (current_data === ""){
            document.getElementById("popup-current-data").innerText = "Нет текущей заявки. Что бы мы могли с вами связаться заполните форму и отправьте нам. Мы свяжемся с вами в ближайшее время.";
            return
        }
        
        jsonObject = JSON.parse(current_data)
        let displayText = '';

        for (const key in jsonObject) {

            displayText += `${key}: ${jsonObject[key]}\n`;      
        }


        document.getElementById("popup-current-data").innerText = displayText;

        }

    });


