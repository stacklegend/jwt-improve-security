const crypto = require('crypto');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

const secret = '6iwMV0Hc6WU0XPMpqugnHsOg3kJqhRTQ';
const userId = 'b427a317';
const expiresIn = '8h';

const createFingerprint = (req) => {
  const salt = '3d4bd49fadee0613cec5a145a0173876';
  const addr = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.get('user-agent');
  return crypto
    .createHash('sha256')
    .update(salt + addr + userAgent)
    .digest('hex');
};

router.post('/getToken', function (req, res) {
  const fingerprint = createFingerprint(req);
  const data = { userId, fingerprint };
  const token = jwt.sign(data, secret, { expiresIn });

  res.json({ token });
});

router.post('/checkToken', function (req, res) {
  const token = req.headers['authorization'];
  const fingerprint = createFingerprint(req);

  if (!token) return res.sendStatus(401);

  try {
    const data = jwt.verify(token, secret);
    if (!data || String(data.fingerprint) !== String(fingerprint)) return res.sendStatus(403);
    res.json({ data });
  } catch (err) {
    return res.sendStatus(403);
  }
});

module.exports = router;
