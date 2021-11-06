 let operation = document.getElementById('operation');

 let operationAnswer = document.getElementById('answer');

 let buttons = Array.from(document.getElementsByClassName('button'));

 buttons.map(button => {
     button.addEventListener('click', (e) => {
         switch (e.target.innerText) {
             case 'C':
                 operation.innerText = '';
                 operationAnswer.innerText = '';
                 break;
             case 'CE':
                 if (operation.innerText) {
                     operation.innerText = operation.innerText.slice(0, -1);
                 }
                 break;
             case '=':
                 try {
                     operationAnswer.innerText = eval(operation.innerText);
                 } catch {
                     operation.innerText = '';
                 }
                 break;
             default:
                 operation.innerText += e.target.innerText;
         }
     });
 });