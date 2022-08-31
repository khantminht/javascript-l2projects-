var getform = document.getElementById("form");
var gettextbox = document.getElementById("textbox");
var getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
    // console.log('iam working');
    addnew();
    e.preventDefault();
});

    function addnew(todo){
        var todotext = gettextbox.value;
        // console.log(todotext);

        if(todo){
            todotext = todo.text;
        }

        const li = document.createElement('li');
        // li.textContent = todotext;

        if(todo && todo.done){
            li.classList.add('done');
        }

        li.appendChild(document.createTextNode(todotext));
        // console.log(li);

        getul.appendChild(li);
        gettextbox.value ="";

        updatelocalstroage();


        // Left Click \\
        li.addEventListener('click',function(){
            li.classList.toggle('done');
            updatelocalstroage();
        });

        // Right Click \\
        li.addEventListener('contextmenu',function(){
            li.remove();
            updatelocalstroage();
        })

    }

    function updatelocalstroage(){
        var getalllis = document.querySelectorAll('li');
        // console.log(getalllis);

        const todos = [];
        getalllis.forEach(function(getallli){
            todos.push({
                text:getallli.textContent,
                done:getallli.classList.contains('done')
            });
        });

        // console.log(todos);

        localStorage.setItem('todos',JSON.stringify(todos));
    }

var getlstodos = JSON.parse(localStorage.getItem('todos'));
    // console.log(getalllstodos);

    if(getlstodos){
        getlstodos.forEach(function(getlstodo){
            // console.log(getlstodos);
            console.log(getlstodo.text);

            addnew(getlstodo);
        });
    }