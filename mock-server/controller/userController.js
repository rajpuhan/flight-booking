exports.login = function(req, res) {
        let userDetails = {"id":34,"username":"Admin123","email":"Admin@gmail.com","roles":"ADMIN","phone":"1234567890","name":"Admin","enabled":true,"tokenType":"Bearer","accessToken":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbjEyMyIsImlhdCI6MTY0Njk5Mzc2MCwiZXhwIjoxNjQ3MDgwMTYwfQ.LR3FVvTsFUO9Q2148QblH2tzMC0Q_jJJxxP8X-8OuwBVkdn4cMD7fZnRosWrK-dd0_HabswdUJkaxRyta0X8Nw"};
        res.json(userDetails);
};