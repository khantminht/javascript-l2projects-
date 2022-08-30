var gettablinks = document.getElementsByClassName("tablinks");      //HTML Collection

var gettabpanes = document.getElementsByClassName("tab-pane");
console.log(gettabpanes.length);

var tabpanes = Array.from(gettabpanes);

var getbtnclose = document.querySelectorAll(".btn-close");          //Nodelist
console.log(gettablinks);

// using for loop
// function gettab(evn,linkid){

//     for(var x=0; x< gettabpanes.length; x++){
//         gettabpanes[x].style.display= "none";
//     }

//     document.getElementById(linkid).style.display = 'block';
// }

// using forEach loop
function gettab(evn,linkid){

    tabpanes.forEach(function(tabpane){
        tabpane.style.display = 'none';
    });

    for(var x=0; x < gettablinks.length; x++){
        gettablinks[x].className="tablinks";

        getbtnclose[x].addEventListener('click',function(){
            // document.getElementById(linkid).style.display = 'none';
            this.parentElement.style.display = 'none';
        });
    }

    document.getElementById(linkid).style.display = 'block';

    // evn.target.className += " active";
    evn.target.classList.add("active");

    // console.log(evn.target);
    // console.log(evn.currentTarget);
}

document.getElementById("autoclick").click();

