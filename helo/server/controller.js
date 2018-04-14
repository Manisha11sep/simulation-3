

module.exports = {

create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { title,content,img } = req.body;

    dbInstance.create_posts([title,content,img ])
      .then( () => res.status(200).send(message= "Post created successfully") )

      .catch( error => console.log(error) );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.select_post()
      .then( products => {
        const response = {
          user: req.session.user.username,
          posts: products
        }
      res.status(200).send(response) 
      })
      .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req;

    dbInstance.update_post([ params.id, query.content ])
      .then( () => res.status(200).send(message = "post is updated") )
      .catch( error => console.log(error) );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.delete_post([ params.id ])
      .then( () => res.status(200).send(message = "post is deleted") )
      .catch( error => console.log(error) );
  },



  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.read_product([ params.id ])
      .then( product => res.status(200).send( product ) )
      .catch( error => console.log(error) );
  },


  login: (req, res, next) => {
    const { username, password } = req.body;
    const dbInstance = req.app.get('db');
    dbInstance.find_user([username]).then(data => {
    if (data.length) {
      if (data[0].password === password) {
        req.session.user = { username };
        res.json({message: `Login successfully ${username}` });
      } else {
        res.status(403).json({ message: 'Invalid password' });
      }
    } else {
      res.status(403).json({ message: 'Unknown user' });
    }
  }).catch(error => {
    console.log('error', error);
    res.status(500).json({ message: "An error occurred; for security reasons it can't be disclosed" });
  });

  
  },

  logout : (req,res)=>{
    const name = req.session.user.username;
    req.session.destroy();
    res.json({message: 'you have successfully logged out, ${name}'});

},

// signout: ( req, res, next ) => {
//   const {session} =req;
//   session.destroy();
//   res.status(200).send("your loggedout");


// },

};