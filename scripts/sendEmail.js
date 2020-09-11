let sendEmail = (event) => {
    event.preventDefault();
    let requestUrl = "https://o7ihak94q1.execute-api.eu-central-1.amazonaws.com/sendContactEmail";
    let json = Object.keys(event.target).reduce((previous, current) => {
        if (event.target[current].type !== 'submit') {
            const attributeName = event.target[current].name;
            previous[attributeName] = event.target[current].value;
        }
        return previous
    }, {});
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", requestUrl, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(json));
}
export default sendEmail;