// send email function start

function sendEmail() {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const body = document.getElementById("message");

    let emailBody = `
        <b> Name: </b> ${name.value}
        <br/>
        <b> email: </b> ${email.value}
        <br/>
        <b> body: </b> ${message.value}
    `

    Email.send({
        SecureToken: "acea353e-3bb2-4191-9615-88a1c84d9998",
        To: 'mr.ibrar3344@gmail.com',
        From: "mr.ibrar3344@gmail.com",
        Subject: "Contact From Portfolio website",
        Body: emailBody
    }).then(
        message => alert(message)
    );
}

// send email function end

// scroll function start

function moveToContact() {
    document.getElementsByClassName("footer-top").scrollIntoView();
}

// scroll function end