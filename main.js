var d = document; // сокращаем document
window.addEventListener('DOMContentLoaded',function(){ // загрузка страницы
    if(d.querySelector('section.product')) productModal(); // проверяем есть ли секция с товарами на странице и создаем функцию productModal()
});
function productModal(){ // Вызываем функцию на странице
        // получаем массив с товарами. Где 'section.product' - родитель, 
        //'.product-item' - Карточка товара. 
        // el - Название функции
    d.querySelectorAll('section.product .product-item').forEach( function(el){
         // el - Получаем элемент "button" (Внутри карточки товара тк указан el). Вешаем событие "Клика" на кнопку и создаем функцию
        el.querySelector('button').addEventListener('click',function(){
            // openModal - Получаем форму модального окна  
            var openModal = d.querySelector('#openModal');
            //  openModal.querySelector('img') - Получаем аттрибут SRC внутри openModal и присваеваем ему SRC img из карточки товара (el.querySelector('img').getAttribute('src'))
            openModal.querySelector('img').setAttribute('src',el.querySelector('img').getAttribute('src'));
            //  openModal.querySelector('h2') -  Получаем текст из openModal и заменяем его текстом из карточки товара (el.querySelector('h3').innerText;)
            openModal.querySelector('h2').innerText=el.querySelector('h3').innerText;
             //  openModal.querySelector('h2') -  Получаем html код из openModal и заменяем на html код из карточки товара (el.querySelector('.content-product').innerHTML;)
            openModal.querySelector('.modal-content').innerHTML=el.querySelector('.content-product').innerHTML;
        });
    });
};
