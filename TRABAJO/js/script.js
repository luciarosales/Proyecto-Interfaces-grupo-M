

(function(){
    const titleQuestion = [...document.querySelectorAll('.questions__title')];
    /*guardamos en ese variable todas las preguntas*/

    /*iteramos cada pregunta*/
    titleQuestion.forEach(question =>{
        /*cada vez que pulsemos creo variables*/
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling; //coge el hermano es decir el siguiente elem, por ej el siguiente elem de h3 es p, por lo q answer == p
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');

            //obtengo el 1º hijo == span y obtengo las clases del span y le añado o quito segun si tiene, vamos lo q hace es q la flchea gire
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){ //si el tamaño es igual a 0 es q esta cerrado
                height = answer.scrollHeight; //para q tenga el alto minimo y se muestre el mensaje bien
            }

            //le doy el tam height al answer, es decir al p
            answer.computedStyleMap.height = `${height}px`
        });
    });

})();



/*para las alertas que salte un mensaje:

question.addEventListener('click', ()=>{
            alert('mensaje de la alerta')

})
*/