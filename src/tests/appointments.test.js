const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const server = require('../api/app');

const { Appointment } = require('../database/models');

const { Appointment: appointmentMock } = require('./mock/models');

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /appointments', () => {
  before(() => {
    sinon.stub(Appointment, 'create').callsFake(appointmentMock.create);
    sinon.stub(Appointment, 'findAll').callsFake(appointmentMock.findAll);
  });

  after(() => {
    Appointment.create.restore();
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
      'A requisição GET para a rota traz uma lista inicial '
      + 'contendo dois registros de appointments',
      () => {
        expect(response.body).to.have.length(2);
      },
    );

    it('Essa requisição deve retornar código de status 200', () => {
      expect(response).to.have.status(200);
    });
  });

  describe('Insere um novo appointment', () => {
    let createRequest = {};
    let firstAppoitmentsList = [];
    let secondAppointmentsList = [];
    const newAppointment = {
      title: 'Entrevista',
      time: '2022-05-04T23:00:00Z',
      description: 'entrevista de emprego para desafio técnico',
    };

    before(async () => {
      firstAppoitmentsList = await chai
        .request(server)
        .get('/appointments')
        .then(({ body }) => body);
      createRequest = await chai
        .request(server)
        .post('/appointments')
        .send(newAppointment);
      secondAppointmentsList = await chai
        .request(server)
        .get('/appointments')
        .then(({ body }) => body);
    });

    it('firstAppoitmentsList: A primeira requisição GET para a rota deve retornar 2 registros', () => {
      expect(firstAppoitmentsList).to.have.length(2);
    });

    it('createRequest: A requisição POST para a rota retorna o código de status 201', () => {
      expect(createRequest).to.have.status(201);
    });
  });
});
