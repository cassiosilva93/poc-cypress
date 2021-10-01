const { mongoDb } = require('./config');
const { MongoClient } = require('mongodb');

class CompanyRepository {
  constructor() {
    this.connect();
    this.collectionName = 'Company';
  }

  async connect() {
    const client = new MongoClient(mongoDb.connectionString);
    await client.connect();
    this.collection = client.db(mongoDb.database).collection(this.collectionName);
  }

  deleteCompanyByDocument(document) {
    const response = this.collection.deleteOne({ SocialNumber: document });
    return response;
  }
}

module.exports = CompanyRepository;
