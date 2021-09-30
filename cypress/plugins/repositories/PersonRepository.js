const { mongoDb } = require('./config');
const { MongoClient } = require('mongodb');

class PersonRepository {
  constructor() {
    this.connect();
    this.collectionName = 'Person';
  }

  async connect() {
    const client = new MongoClient(mongoDb.connectionString);
    await client.connect();
    this.collection = client.db(mongoDb.database).collection(this.collectionName);
  }

  deletePersonByDocument(document) {
    const response = this.collection.deleteOne({ SocialNumber: document });
    return response;
  }
}

module.exports = PersonRepository;
