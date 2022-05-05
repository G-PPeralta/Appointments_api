const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const server = require('../api/app');

const { Appointment } = require('../database/models');

const { Appointment: userMock } = require('./mock/models');

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /api/users', () => {

  before(() => {
    sinon.stub(Appointment, 'findAll')
      .callsFake(userMock.findAll);
  });

  after(() => {
    Appointment.findAll.restore();
  });


  describe('Consulta a lista de appointments', () => {
    let response;

    before(async () => {
      response = await chai
        .request(server)
        .get('/appointments');
    });

    it(
      'A requisição GET para a rota traz uma lista inicial ' +
      'contendo dois registros de appointments',
      () => {
        expect(response.body).to.have.length(2);
      }
    );

    it('Essa requisição deve retornar código de status 200', () => {
      expect(response).to.have.status(200);
    });
  });
});