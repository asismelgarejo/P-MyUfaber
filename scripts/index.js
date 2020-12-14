const categories = document.querySelectorAll('.categories__item h4');
console.log(categories)
categories.forEach(element => {
  element.addEventListener('click',e=>{
    const content = element.nextElementSibling;
    if(content.style.maxHeight){
      element.style.color = 'var(--color-main)';
      element.style.background = 'var(--color-inverse-main)';
      content.style.maxHeight = null;
    }else{
      element.style.color = 'var(--color-inverse-main)';
      element.style.background = 'var(--color-main)';
      content.style.maxHeight = content.scrollHeight+'px';
    }
  });
});
