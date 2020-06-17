var mongoose = require('mongoose');
var ratingSchema = mongoose.Schema({
    empId: {
        type: String
    },
    q1:{
        type: String
    },
    q2:{
        type: String
    },
    q3:{
    	type : String
    },
    q4:{
    	type : String
    },
    comment:{
    	type : String
    }

});

// Export adminLoginModel model
module.exports ={

    Rating:mongoose.model('Rating', ratingSchema,"ratings"),
    ratingschema:ratingSchema
   }
