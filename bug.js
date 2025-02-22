const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user details ...
  if (!user) {
    return res.status(404).send('User not found'); //Correct way
  }
  res.send(user); // Missing return statement, this line is reachable if user is not found
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));