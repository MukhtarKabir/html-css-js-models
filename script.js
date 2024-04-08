
var btns = document.querySelectorAll('button');
var close = document.getElementById('close-btn')
var models = document.querySelector('.models')
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',function(){
        models.classList.remove('hidden')
});         
}
function none(){
        models.classList.add('hidden')
    }
close.addEventListener('click',none)

document.addEventListener('keydown',function(e){
    if(e.key=='Escape' && !models.classList.contains('hidden')){
        none()
    }
})
