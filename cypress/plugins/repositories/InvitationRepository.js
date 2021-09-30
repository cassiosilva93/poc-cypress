const { mongoDb } = require('./config');
const { MongoClient } = require('mongodb');

class InvitationRepository {
  constructor() {
    this.connect();
    this.collectionName = 'Invitation';
  }

  async connect() {
    const client = new MongoClient(mongoDb.connectionString);
    await client.connect();
    this.collection = client.db(mongoDb.database).collection(this.collectionName);
  }

  getInvitationByDocument(document) {
    const response = this.collection.find({ SocialNumber: document });
    return response.toArray();
  }

  getRowsOnHash(inviteHash) {
    const response = this.collection.find({ Hash: inviteHash });
    const rows = response.toArray();
    return rows;
  }

  deleteInvitationByDocument(document) {
    const response = this.collection.deleteOne({ SocialNumber: document });
    return response;
  }

  expiredInvitationByDocument(document) {
    const daysToSecond = 31 * 24 * 60 * 60;
    const response = this.collection.findOneAndUpdate(
      { SocialNumber: document },
      [
        {
          $set: {
            ExpirationDate: { $subtract: ['$ExpirationDate', daysToSecond * 1000] },
          },
        },
      ],
      { returnNewDocument: true }
    );
    return response;
  }
}

module.exports = InvitationRepository;
