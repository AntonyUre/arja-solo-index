$(document).ready(function(){    var form, form2, form3, countryField;    form = $('#country-contact-form');    form2 = $('#products-contact-form');    form3 = $('#spare-contact-form');    countryField = $('.campopais');    $(location).attr('href');    $('.location').val(location);    $('#modal-parts').on('hidden.bs.modal', function () {        $("#spare-contact-form").get(0).reset();        $('#spare-contact-form .error-recachat').hide();        $("#spare-contact-form").css('display','block');    });    $('#modal-crushing').on('hidden.bs.modal', function () {        $("#products-contact-form").get(0).reset();        $(form2).css('display','block');        $('#products-contact-form .error-recachat').hide();        $("#success-contact-submit-crushing").addClass('disabled');    });    $('.modal-contact').on('click',function(){        var image, campo, email, title, clase, subject;        image = $(this).data('image');        campo = $(this).data('campo');        email = $(this).data('mail');                title = $(this).data("title");        clase = $(this).data("class");        subject = $(this).data("subject");        $("#img-modal").attr("src", image).addClass(clase);        $(".title-modal").html(title);        $('#email-to').val(email);        $('#subject-to').val(subject);        if(campo == 'visible'){            $("#country").prop('required', true);            countryField.removeClass('hidden');        }else{            $("#country").prop('required', false);            countryField.addClass('hidden');        }        $('#modal-contact').on('hidden.bs.modal', function () {            $("#img-modal").removeClass(clase);            $("#country-contact-form").get(0).reset();            $("#success-contact-submit").addClass('disabled');            $('form .error-recachat').hide();            $(form).css('display','block');        });    });    form.validator().on('submit',function(ec){        $response = grecaptcha.getResponse(recaptcha2);        if(!$response.length){            $("form>.error-recachat").show("fast");            ec.preventDefault();        } else {            $('form>.error-recachat').hide();        }        if (ec.isDefaultPrevented()) {            return false;        } else {            return true;        }    });    form2.validator().on('submit',function(ec){        $response2 = grecaptcha.getResponse(recaptcha1);        if(!$response2.length){            $("#products-contact-form .error-recachat").show("fast");            ec.preventDefault();        } else {            $('#products-contact-form .error-recachat').hide();        }        if (ec.isDefaultPrevented()) {            return false;        } else {            return true;        }    });    form3.validator().on('submit',function(ec){        $response3 = grecaptcha.getResponse(recaptcha3);        if(!$response3.length){            $("#spare-contact-form .error-recachat").show("fast");            ec.preventDefault();        } else {            $('#spare-contact-form .error-recachat').hide();        }        if (ec.isDefaultPrevented()) {            return false;        } else {            return true;        }    });});