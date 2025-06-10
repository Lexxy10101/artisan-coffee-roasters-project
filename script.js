//Creating specific eveniments which will apply when an element is it collapsed, in my case the menu which is it completely closed or opened
document.addEventListener('DOMContentLoaded', function(){
    var navbarCollapse = document.getElementById('navbarNavAltMarkup');
    var body = document.body;
    if(navbarCollapse){
        navbarCollapse.addEventListener('shown.bs.collapse', function(){
            body.classList.add('navbar-open');
        });
        navbarCollapse.addEventListener('hidden.bs.collapse',function(){
            body.classList.remove('navbar-open');
        });
    }
});

//Footer
// Initialization for ES Users
import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });

//Newsletter
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        if(!emailInput.value.trim() || !emailInput.value.includes('.')){
            emailError.style.display='block';
            emailInput.classList.add('is-invalid');
        }else{
            emailError.style.display='none';
            emailInput.classList.add('is-valid');
            form.submit();
        }
    });
});