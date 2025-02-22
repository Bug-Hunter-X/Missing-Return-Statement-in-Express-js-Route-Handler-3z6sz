const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user details ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));