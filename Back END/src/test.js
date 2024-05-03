const jwt = require("jsonwebtoken");

const getToken = () => {
    const token = jwt.sign({id: '123'}, 'authentication_token');
    console.log(token);

    console.log(jwt.verify(token, 'authentication_token'));
}

getToken();
