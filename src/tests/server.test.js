// src/tests/server.test.js
const request = require('supertest');
const express = require('express');
const adminRoutes = require('../routes/admin');
const authenticateJWT = require('../middleware/auth');
const requireRole = require('../middleware/requireRole');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use('/api', adminRoutes);

describe('Admin Route', () => {
  it('should return 403 for unauthorized access', async () => {
    const res = await request(app).get('/api/admin');
    expect(res.status).toBe(403);
  });

  it('should allow access for admin role', async () => {
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET);
    const res = await request(app)
      .get('/api/admin')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.text).toBe('Welcome, admin!');
  });
});
