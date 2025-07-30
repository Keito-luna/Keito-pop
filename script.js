
document.addEventListener('DOMContentLoaded', function() {
    var texteSuiveur = document.getElementById('blocSuiveur');

    document.addEventListener('mousemove', function(e) {
        texteSuiveur.style.left = (e.pageX + 10) + 'px';
        texteSuiveur.style.top = (e.pageY + 10) + 'px';
    });
});