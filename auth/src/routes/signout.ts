import express from 'express';
const router = express.Router();

router.get('/api/users/signout', (req, res) => {
  req.session = null;
  res.send({ message: 'You have been signed out' });
});

export { router as signoutRouter };
