const getmap = document.querySelector('.map-container');

var getsmallcolor = document.getElementById('smallcolor'),
    getmediumcolor = document.getElementById('mediumcolor'),
    getlargecolor = document.getElementById('largecolor');

var circleidx = 0;

getmap.addEventListener('click',function(e){
    circleidx++;
    // console.log('iam working');

    if(e.target.classList.contains('map-container')){
        const cx = e.clientX;
        const cy = e.clientY;

        const mapleft = e.target.offsetLeft;
        const maptop = e.target.offsetTop;

        const curx = cx - mapleft;
        const cury = cy - maptop;
        // console.log(curx, cury);

        const circle = document.createElement('span');
        circle.id = circleidx;
        circle.classList.add('circle');
        // console.log(circle);

        circle.style.left = `${curx}px`;
        circle.style.top = `${cury}px`;

        e.target.appendChild(circle);
    }

    removepointer(e);
});

function removepointer(e){

    // console.log(e.target);

    if(e.target.id > 0){
        e.target.remove();
    }
}