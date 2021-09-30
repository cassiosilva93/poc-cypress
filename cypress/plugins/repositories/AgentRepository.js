const { mongoDb } = require('./config');
const { MongoClient } = require('mongodb');

class AgentRepository {
  constructor() {
    this.connect();
    this.collectionName = 'Agent';
  }

  async connect() {
    const client = new MongoClient(mongoDb.connectionString);
    await client.connect();
    this.collection = client.db(mongoDb.database).collection(this.collectionName);
  }

  deleteAgentByDocument(document) {
    const response = this.collection.deleteOne({ Document: document });
    return response;
  }

  expireAgentByDocument(document, status) {
    const yearsToSecond = 2 * 365 * 24 * 60 * 60;
    const response = this.collection.findOneAndUpdate(
      { Document: document },
      [
        {
          $set: {
            Status: status,
            RegisterDate: { $subtract: ['$RegisterDate', yearsToSecond * 1000] },
          },
        },
      ],
      { returnNewDocument: true }
    );
    return response;
  }
}

module.exports = AgentRepository;
