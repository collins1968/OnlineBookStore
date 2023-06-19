import { getUsers, PostUsers } from "../controllers/UsersController.js";

const routes = (app) => {
    app.route('/users')
        .get(getUsers)
        .post(PostUsers);
}

export default routes;