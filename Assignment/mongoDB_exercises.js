use mydb

// 1. Write a MongoDB query to display all the documents in the collection restaurants
db.restaurants.find({})

// 2. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.
db.restaurants.find({},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1})

// 3. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.
db.restaurants.find({},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1,"_id":0})

// 4. Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant.
db.restaurants.find({},{"restaurant_id":1,"name":1,"borough":1,"address.zipcode":1,"_id":0})

// 5. Write a MongoDB query to display all the restaurant which is in the borough Bronx.
db.restaurants.find({
    "borough": "Bronx"
    })
    
// 6. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
db.restaurants.find({
    "borough": "Bronx"
    }).limit(5)
    
// 7. Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
db.restaurants.find({
    "borough": "Bronx"
    }).skip(5).limit(5)

// 8. Write a MongoDB query to find the restaurants who achieved a score more than 90
db.restaurants.find({
    grades:{$elemMatch:{score:{$gt:90}}}
    })

db.restaurants.find({
    grades:{$elemMatch:{score:{$gt:80,$lt:100}}}
    })

db.restaurants.find({
    "address.coord":{$lt : -95.754168}
    })
    
db.restaurants.find({
    $and:[
        {"cuisine": {$ne :"American "}},
        {"grades":{$elemMatch:{score:{$gt:70}}}},
        {"address.coord":{$lt : -65.754168}}
    ]
    })

db.restaurants.find({
    "cuisine" : {$ne : "American"},
    "grades.grade" :"A",
    "borough " : {$ne : "Brooklyn"}
    }).sort({"cuisine":-1})
    
db.restaurants.find({"name":/^Wil/},{
    "restaurant_id":1,
    "name":1,
    "borough":1,
    "cuisine":1
    })
    
db.restaurants.find({"name":/ces$/},{
    "restaurant_id":1,
    "name":1,
    "borough":1,
    "cuisine":1
    })  
   
db.restaurants.find({"name":/.*Reg.*/},{
    "restaurant_id":1,
    "name":1,
    "borough":1,
    "cuisine":1
    })  
 
db.restaurants.find({
    "borough": "Bronx",
    $or:[
        {"cuisine":"America"},
        {"cuisine":"Chinese"}
    ]
    }) 
    
db.restaurants.find({
    "borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},{
    "restaurant_id":1,
    "name":1,
    "borough":1,
    "cuisine":1
    })
   
db.restaurants.find({
    "grades.score":{$lte:10}
    },
    {
    "restaurant_id":1,
    "name":1,
    "borough":1,
    "cuisine":1
    })
    
db.restaurants.find({
    $or:[
    {"name":/^Wil/},
    {"cuisine" :{$nin :["American","Chinese"]}}]
    },{
    "restaurant_id":1,
    "name":1,
    "borough":1,
    "cuisine":1
    })  
 
db.restaurants.find({
    "grades.grade":"A",
    "grades.score":11,
    "grades.date": ISODate("2014-08-11T00:00:00Z"), 
    },{
    "restaurant_id":1,
    "name":1,
    "grades":1,
    })

db.restaurants.find({
    "grades.1.grade":"A",
    "grades.1.score":9,
    "grades.1.date": ISODate("2014-08-11T00:00:00Z"), 
    },{
    "restaurant_id":1,
    "name":1,
    "grades":1
    })
  
db.restaurants.find({
    "address.coord.1":{$gt:42,$lt:52}    
    },{
    "restaurant_id":1,
    "name":1,
    "address":1,
    "coord":1
    })
  
db.restaurants.find({}).sort({"name":1}) 

db.restaurants.find({}).sort({"name":-1}) 

db.restaurants.find({}).sort({"cuisine":1,"borough":-1}) 

db.restaurants.find({
    "address.street":{$exists:true}
    })

db.restaurants.find({
    "address.coord":{$type:1}
    })
    
db.restaurants.find({
    "grades.score" :{$mod : [7,0]}
    },{
        "restaurant_id" : 1,
        "name":1,
        "grades":1
        });
        
db.restaurants.find({
    "name":{$regex:"mon.*",$options:"i"}                 
    },{
        "name":1,
        "borough":1,
        "address.coord":1,
        "cuisine":1
        });
        
db.restaurants.find({
    "name":/^Mad/              
    },{
        "name":1,
        "borough":1,
        "address.coord":1,
        "cuisine":1
        });
