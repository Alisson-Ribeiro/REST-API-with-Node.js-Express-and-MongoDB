import { addNewContact, 
        getContacts, 
        getContactWithId, 
        updateContact, 
        deleteContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    // get all contacts
    .get((req, res, next) => {
        //middleware 
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)

    // post a new contact
    .post(addNewContact);

    app.route('/contact/:contacId')
    // get specific contact
    .get(getContactWithId)
    // update a contact
    .put(updateContact)
    // delete a contact
    .delete(deleteContact)
}

export default routes;