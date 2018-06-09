var colors = ['#8CADDC', '#DF367C', '#5B7BA1', '#455a64']; // ['#0097a7', '#dab30a', '#c21858', '#455a64'];
var isClicked;

function highlight(id) {
        document.getElementById(id).style.backgroundColor = colors[0];//colors[parseInt(id) - 1];
        document.getElementById(id).style.color = 'white';
}

function noHighlight(id) {
    if (id != isClicked) {
            document.getElementById(id).style.backgroundColor = 'transparent';
            document.getElementById(id).style.color = '#cfd8dc';
    }
    else {
        document.getElementById(id).style.backgroundColor = colors[1];
    }
}
function displayContent(id) {
    isClicked = id;
    for (n = 1; n < 5; n++) {
        document.getElementById(n).style.backgroundColor = 'transparent'; 
        document.getElementById(n).style.color = '#cfd8dc';
        document.getElementById('s' + n).style.maxHeight = '0ex';
        document.getElementById('s' + n).style.opacity = '0';
    }
    /* Careful with this value, it must be larger than the whole content.*/
    document.getElementById('s' + id).style.maxHeight = '300ex';
    document.getElementById('s' + id).style.opacity = '1';
    document.getElementById(id).style.backgroundColor = colors[1];
    document.getElementById(id).style.color = 'white';
}

function displayArticle(id) {
    _height = document.getElementById('a-' + id).style.maxHeight;
    if ( _height == '0ex' || _height == '') {
        document.getElementById('a-' + id).style.maxHeight = '120ex';
    }
    else {
        document.getElementById('a-' + id).style.maxHeight = '0ex';
    }
}