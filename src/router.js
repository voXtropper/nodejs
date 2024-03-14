module.exports = (app) => {

    app.get(`/`, function (request, response) {
        response.send(
            `
            <html>
                <body>
                    Ultima School
                </body>
            </html>
            `
        );
    });


}