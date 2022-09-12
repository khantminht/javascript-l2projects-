// Variable Declarition \\
const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup', function(e){
    // createemaillist(e.target.value);

    createemaillist(this.value);
});

function createemaillist(inputtext){
    // console.log(inputtext);

    // split by (',')
    // const eitems = inputtext.split(',');

    // remove empty
    // const eitems = inputtext.split(',').filter(rmempty => rmempty.trim() !== '');
    // console.log(eitems);

    const eitems = inputtext.split(',').filter(rmempty => rmempty.trim() !== '').map(rmempty => rmempty.trim());
    // console.log(eitems);

    getemcontainer.innerHTML= '';

    eitems.forEach(function(eitem){
        // console.log(eitem);

        const setnewspan = document.createElement('span');
        setnewspan.textContent = eitem;
        setnewspan.classList.add('email-item');
        // console.log(setnewspan);

        getemcontainer.appendChild(setnewspan);

    });
}

getbtn.addEventListener('click', function(e){
    sendemail();
    e.preventDefault();
});

function sendemail(){
    // console.log('iam working');

    const gettextvalue = gettextarea.value;
    // console.log(gettextvalue);

    const getaddresses = document.querySelectorAll('.email-item');
    // console.log(getaddresses);

    var persons = [];

    if(getaddresses.length > 0 && gettextvalue){
        getaddresses.forEach(function(getaddress){

            persons.push({
                email:getaddress.textContent,
                message:gettextvalue
            });
        });

        console.log(persons);
    }else{
        window.alert('Enter Message');
        gettextarea.focus();
    }
}