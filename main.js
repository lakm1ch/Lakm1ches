let classLink = '.main-link';



window.onscroll = function() {
    let h = document.documentElement.clientHeight;
    if (window.scrollY >=h*4){
        classLink = '.comments-link';
    } else if (window.scrollY>=h*3){
        classLink = '.works-link';
    } else if (window.scrollY>=h*2){
        classLink = '.skills-link';
    } else if (window.scrollY>=h    ){
        classLink = '.about-link';
    } else{
        classLink = '.main-link';
    }

    let newActiveBtn = document.querySelector(classLink);
    let activeBtn = document.querySelector('.active');

    if (!newActiveBtn.classList.contains('active')){
        newActiveBtn.classList.add('active');
        activeBtn.classList.remove('active');
        let mobile = document.querySelector('.mobile-menu')
        if (!mobile.classList.contains('hide'))
            mobile.classList.add('hide')
    }
};


document.querySelector('.mobile-button').addEventListener('click', function (event){

    document.querySelector('.mobile-menu').classList.toggle('hide');

});