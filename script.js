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


