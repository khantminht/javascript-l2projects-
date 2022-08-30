var getinput = document.getElementById("search");

var getul = document.getElementById("members");

var getli = getul.getElementsByTagName("li");
console.log(getli);     //HTML Collection

var getsortbtn = document.getElementById("sort");

getinput.addEventListener('keyup',filter);

getsortbtn.addEventListener('click', sortingazm1);

    // Method1 \\
    function sortingazm1(){
        console.log('iam working');
    }

    function filter(){
        // console.log(this.value);

        var inputfilter = this.value.toLowerCase();
        // console.log(inputfilter);

        for(var x=0; x< getli.length; x++){
            // console.log(getli[x].querySelector('a').textContent.toLowerCase());
            // console.log(getli[x].getElementsByTagName('a')[0].textContent.toLowerCase());

            var getavalue = getli[x].querySelector('a').textContent.toLowerCase();

            if(getavalue.indexOf(inputfilter) > -1){
                getli[x].style.display = '';
            }else{
                getli[x].style.display= "none";
            }
        }
    }