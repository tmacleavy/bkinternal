var chai = require('chai');
const request = require('supertest');
const app = require('../server');

describe('GET /', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /version', function() {
    it('responds with the current version', function(done) {
      request(app)
        .get('/version')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          chai.expect(JSON.parse(res.text)).to.eql({ version: '1.0.0' });
          return done();
        });
    });
  });

  describe('GET /events', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/events')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('returns events', function(done) {
      request(app)
      .get('/events')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        chai.expect(JSON.parse(res.text)).to.have.property('events');
        return done();
      });

      });
  });

  describe('POST /event', function() {
    it('adds an event', function(done) {
      request(app)
      .post('/event')
      .send( { title: 'a test event', description: 'a really cool test' })
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        chai.expect(JSON.parse(res.text).events.length).to.equal(3);
        return done();
      });

      });
  });