const { db } = require('../util/admin');

exports.getAllProducts = (req, res) => {
  db.collection('products')
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      let products = [];
      data.forEach((doc) => {
        products.push({
            productId: doc.id,
            description: doc.data().description,
            price: doc.data().price,
            createdAt: doc.data().createdAt,
            userHandle: doc.data().userHandle
        });
      });
      return res.json(products);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.postOneProduct = (req, res) => {
  if (req.body.body.trim() === '') {
    return res.status(400).json({ body: 'Body must not be empty' });
  }

  const newProduct = {
    description: req.body.description,
    price: req.body.price,
    createdAt: new Date().toISOString(),
    userHandle: req.user.handle
  };

  db.collection('products')
    .add(newProduct)
    .then((doc) => {
     return res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: 'something went wrong' });
      console.error(err);
    });
};