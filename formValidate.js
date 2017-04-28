$(document).ready(function(){
    $("#myForm").validate({
        rules: {
            youName: {
                required: true
            },
            youPhone:{
                required: true,
                minlength: 6,
                digits: true
            },
            youText:{
                required: true
        }
        },
        messages: {
            youName: {
                required: "напишите свое имя"
            },
            youPhone:{
                required: "напишите свой телефон",
                minlength: "введите минимум 6 символов",
                digits: "введите корректный номер"
            },
            youText:{
                required: "Введите сообщение"
            }
        },
        focusCleanup: true,
        focusInvalid: false
    });
    
    $("#ModalForm1").validate({
        rules: {
            youName: {
                required: true
            },
            youPhone:{
                required: true,
                minlength: 6,
                digits: true
            },
            youText:{
                required: true
        }
        },
        messages: {
            youName: {
                required: "напишите свое имя"
            },
            youPhone:{
                required: "напишите свой телефон",
                minlength: "введите минимум 6 символов",
                digits: "введите корректный номер"
            },
            youText:{
                required: "Введите сообщение"
            }
        },
        focusCleanup: true,
        focusInvalid: false
    });
});