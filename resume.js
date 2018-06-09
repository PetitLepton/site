var colors = ['#0097a7', '#dab30a', '#c21858', '#455a64'];
var isClicked;

function highlight(id) {
        document.getElementById(id).style.backgroundColor = colors[parseInt(id) - 1];
        document.getElementById(id).style.color = 'white';
}

function noHighlight(id) {
    if (id != isClicked) {
            document.getElementById(id).style.backgroundColor = 'white';
            document.getElementById(id).style.color = '#cfd8dc';
    }
    console.log(isClicked);
}
function displayContent(id) {
    isClicked = id;
    for (n = 1; n < 5; n++) {
        document.getElementById(n).style.backgroundColor = 'white';
        document.getElementById(n).style.color = '#cfd8dc';
        document.getElementById('s' + n).style.maxHeight = '0ex';
        document.getElementById('s' + n).style.opacity = '0';
    }
    /* Careful with this value, it must be larger than the whole content.*/
    document.getElementById('s' + id).style.maxHeight = '300ex';
    document.getElementById('s' + id).style.opacity = '1';
    document.getElementById(id).style.backgroundColor = colors[parseInt(id) - 1];
    document.getElementById(id).style.color = 'white';
    document.getElementById("largeHeader").style.backgroundColor = colors[parseInt(id) - 1];
    // document.getElementById("footer").style.backgroundColor = colors[parseInt(id) - 1];
    document.getElementById("largeHeader").style.color = 'white';
    // document.getElementById("footer").style.color = 'white';
    document.getElementById("main").style.backgroundColor = 'white';
    
    console.log(id);
}

function displayArticle(id) {
    _height = document.getElementById('a-' + id).style.maxHeight;
    if ( _height == '0ex' || _height == '') {
        /* document.getElementById('s' + id).style.display = 'block'; */
        document.getElementById('a-' + id).style.maxHeight = '120ex';
    }
    else {
        /* document.getElementById('s' + id).style.display = 'none'; */
        document.getElementById('a-' + id).style.maxHeight = '0ex';
    }
}
function h1Over(id) {
    document.getElementById(id).style.boxShadow = '0px 4px 6px 0px rgba(0, 0, 0, 0.25);';
}