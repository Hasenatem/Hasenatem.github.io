function change_page(language) {
    if (language === 'en') {
        document.getElementById('en_page').style.display='block';
        document.getElementById('ger_page').style.display='none';
    } else if (language === 'ger') {
        document.getElementById('ger_page').style.display='block';
        document.getElementById('en_page').style.display='none';
    } else {
        console.log("This should not happen");
    }
}