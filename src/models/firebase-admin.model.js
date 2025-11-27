import 'dotenv/config';
import admin from 'firebase-admin';

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}';

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(serviceAccount)),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

const db = admin.firestore();
export { db };
