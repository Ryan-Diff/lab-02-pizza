const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('lab-02-pizza routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql'))
  });
});
