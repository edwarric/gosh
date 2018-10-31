function showInfoOn(object) {
    // remove other text boxes
    var x = document.getElementsByClassName('text-box');
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    // show this one
    document.getElementById(object).style.display = 'block';
}

function captionThis(action) {
    var y = document.getElementsByClassName('caption');
    var j;
    for (j = 0; j < j.length; j++) {
        y[j].style.display = 'none';
    }
    // show this one
    document.getElementById(action).style.display = 'flex';
}
