import { addNewContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
    .get((req, res) => 
    res.send('Get request sucessful!')
    )

    .post(addNewContact);


    app.route('/contact/:contacId')
    .put((req, res) =>
    res.send('PUT request sucessful!')
    )


    .delete((req, res) =>
    res.send('DELETE request sucessful!')
    )
}

export default routes;