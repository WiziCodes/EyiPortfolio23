const Name = document.getElementById("name")
const email = document.getElementById("email")
const textArea = document.getElementById("textArea")
const statusMsg = document.getElementById("msg")


function send() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "oeyiowuewi2020@gmail.com",
        Password: "EB719A0B21439DEE074DA13358144F474EA4",
        To: 'oeyiowuewi2020@gmail.com',
        From: 'oeyiowuewi2020@gmail.com',
        Subject: "Test Run Mssage",
        Body: `Full Name: ${Name.value} <br>
        Message: ${textArea.value}<br>
        Email:${email.value}`
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Succes",
                    text: "Message sent successfully",
                    icon: "success"
                });
                statusMsg.innerHTML = "Message sent successfully"
            }
            else {
                statusMsg.innerHTML = "Message not sent"
                statusMsg.style.color="red"
            }
        }
    );
    // message => {
    //     if (message == "OK") {
    //          Swal.fire({
    //             title: "Succes",
    //             text: "Message sent successfully",
    //             icon: "success"
    //         });
    //         statusMsg.innerHTML="Message sent successfully"
    //     }
    //     else{
    //         statusMsg.innerHTML="Message not sent"
    //     }

    // console.log(`${email.value}`)
    // console.log(Name.value)

}
