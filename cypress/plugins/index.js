/// <reference types="cypress" />

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const InvitationRepository = require('./repositories/InvitationRepository');
const CompanyRepository = require('./repositories/CompanyRepository');
const AgentRepository = require('./repositories/AgentRepository');
const PersonRepository = require('./repositories/PersonRepository');

const invitationRepository = new InvitationRepository(); 
const companyRepository = new CompanyRepository(); 
const agentRepository = new AgentRepository(); 
const personRepository = new PersonRepository(); 

module.exports = (on, config) => {
  on('task', {
    "invitationRepository": {
      "getInviteByDocument": (document) => invitationRepository.getInvitationByDocument(document),
      "getRowsOnHash": (inviteHash) => invitationRepository.getRowsOnHash(inviteHash),
      "deleteInvitationByDocument": (document) => invitationRepository.deleteInvitationByDocument(document),
      "expiredInviteByDocument": (document) => invitationRepository.expiredInvitationByDocument(document),
    },
    "companyRepository": {
      "deleteCompanyByDocument": (document) => companyRepository.deleteCompanyByDocument(document)
    },
    "agentRepository": {
      "deleteAgentByDocument": (document) => agentRepository.deleteAgentByDocument(document),
      "expireAgentByDocument": (document, status) => agentRepository.expireAgentByDocument(document, status)
    },
    "personRepository": {
      "deletePersonByDocument": (document) => personRepository.deletePersonByDocument(document),
    }
  })

  allureWriter(on, config);
  return config;
}
