var Location = require('../models/Location.js'); 

module.exports = {

  list: function(req, res){
    console.log(req); 
    Location
      .find({ user: req.user._id })
      .select('_id name')
      .exec()
      .then(function(locations) {
        return res.json(locations); 
      })
  },

  listOne: function(req, res){
    console.log(req);
    Location
      .findById(req.params.id)
      .populate('user', 'email')
      .exec()
      .then(function(location){
        res.status(200).json(location); 
      }, function(err){
        res.status(500).end();
      }); 
  },

  create: function(req, res){
    var newLocation = new Location(req.body); 
    // newLocation.user = req.user._id;  
    newLocation.save(function(err, location){
        console.log(location); 
        if(err){
          console.log(err); 
          return res.status(500).end(); 
        }

        res.json(location); 
    })
  }

  // delete: function(location){
  //   Location
  //     .find({name: location})
  //     .remove()
  //     .exec()
  //     if(err)
  // }

}