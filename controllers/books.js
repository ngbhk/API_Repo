
const db = require('../config/dbconfig');


// Get all books

const getAllBooks = (request,response) => {
    
    db.query(`select * from bookstall.books`, (err,res) => {

        if(err){
            response.status(500).json(err);
        }
        response.status(res.statusCode).json(res.data);
    })

};

// Getting a book details by its id


module.exports = {
    getAllBooks
}

