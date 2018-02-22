import {addNewContact, 
    getContacts, 
    getContactWithID, 
    updateContact,
deleteContact } from "../controllers/demoController";

const routes = (app) => {
    app
      .route("/contact")
    //   .get((req, resp, next) => {
    //       //middleware  
    //       console.log(req);
    //       console.log(`request from ${req.originalUrl}`);
    //       console.log(`req type ${req.method}`);
    //       next();
    //     }, (req, resp, next) => {
    //       resp.send("GET request success");
    //     })
    .get((req, resp, next) => {
        //middleware  
        console.log(req);
        console.log(`request from ${req.originalUrl}`);
        console.log(`req type ${req.method}`);
        next();
      }, getContacts)
      //.post((req, resp) => resp.send("POST request success"));
      //POST endpoint
        .post(addNewContact);

    app.route('/contact/:contactId')
    //get specific contact
    .get(getContactWithID)
    // .put((req,resp) =>
    //     resp.send("PUT req success")
    // )
    .put(updateContact)
    // .delete((req,resp) =>
    //     resp.send("DEL req success")
    // );
    .delete(deleteContact);
}

export default routes;