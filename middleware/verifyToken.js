const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {

    let token = req.headers.authorization

    try {
        if (!token) {
            res.send({
                status: 404,
                message: "Token not found"
            })
        }

        if (token.indexOf('Bearer') !== -1) {
            token = token.slice(7)
        }

        const result = jwt.verify(token, process.env.JWT_SECRET)
        console.log(result)

        // if(result){

        // }
        if (result._id) {
            next()
        }


        // res.send({
        //     status: 200,
        //     message: result._id
        // })
    }
    catch (e) {
        console.log(e)
        res.send({
            status: 500,
            message: e.message
        })
    }
}

module.exports = verifyToken