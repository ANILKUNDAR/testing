let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
describe('/GET book', () => {
    it('it should GET all the books', (done) => {
      chai.request('http://localhost:5000')
          .get('/get')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
          });
    });
});