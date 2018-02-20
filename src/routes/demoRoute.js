const routes = (app) => {
    app.route('/contact')
    .get((req,resp)=>
    resp.send('GET request success')
    )
    .post((req,resp)=>
    resp.send("POST request success")
    );

    app.route('/contact/:contactId')
    .put((req,resp) =>
        resp.send("PUT req success")
    )
    .delete((req,resp) =>
        resp.send("DEL req success")
    );
}

export default routes;