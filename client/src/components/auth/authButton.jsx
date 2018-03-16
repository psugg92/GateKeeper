import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = withRouter(
    ({ history }) => {
        if (isLoggedIn()) {
            return <Link className="btn mr-3 text-light" to="/logout">Logout</Link>;
        } else {
            return <Link className="btn mr-3 text-light" to="/login">Login</Link>;
        }
    }
);

export default AuthButton;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { isLoggedIn } from '../../services/user';

// const AuthButton = (props) => {
//     if (isLoggedIn()) {
//         return <Link className="btn btn-info" to="/logout">Logout</Link>;
//     } else {
//         return <Link className="btn btn-info" to="/login">Login</Link>;
//     }
// };

// export default AuthButton;