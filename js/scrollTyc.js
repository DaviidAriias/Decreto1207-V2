function goTop(){
    const bodyCont = window.parent.document.getElementById('bodyMain').parentElement;
    bodyCont.scrollTo({top: 0, behavior: 'smooth'});
    //console.log(bodyCont);
}

function rszIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}