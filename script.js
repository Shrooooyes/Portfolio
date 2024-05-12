const sendEmail = () => {
    let url = "https://mail.google.com/mail/?view=cm&fs=1&to=shreyashsawant37@gmail.com";
    window.location.href = url;
}

const openNav = () => {
    document.getElementById("item2").style.width = "50%";
}

const closeNav = () => {
    document.getElementById("item2").style.width = "0%";
}