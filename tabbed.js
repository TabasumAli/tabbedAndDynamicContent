// alert("hello");
const btns = document.querySelectorAll('.btn');
// console.log(btns);
const contents = document.querySelectorAll('.content');
// console.log(contents);

btns.forEach((btn, index)=>{
    btn.addEventListener('click', (e)=>{
        btns.forEach((btn)=>{btn.classList.remove('active')});
        btn.classList.add('active');
        contents.forEach((content)=>{content.classList.remove('active')});
        contents[index].classList.add('active');
        let line = document.querySelector('.line');
        line.style.width= e.target.offsetWidth + 'px';
        line.style.left= e.target.offsetLeft + 'px';
        // btn.style.outline= none;
    })

});