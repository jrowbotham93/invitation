// having to require this at the moment - ts issue with types
const cors = require('cors');

//import libraries
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';

//import controllers
import { read, create, remove, update } from './controllers';

//initialize firebase inorder to access its services
admin.initializeApp(functions.config().firebase);

//initialize express server
const app = express();
const main = express();

app.use(cors());

//add the path to receive request and set json as bodyParser to process the body
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

//initialize the database and the collection
const db = admin.firestore();
const attendeeCollection = 'attendees';

// get all attendees
app.get('/attendees', async (req, res) => {
  await read(res, db, attendeeCollection);
});

// create attendee
app.post('/attendees', async (req, res) => {
  await create(req, res, db, attendeeCollection);
});

// remove attendee
app.delete('/attendees/:attendeeId', async (req, res) => {
  await remove(req, res, db, attendeeCollection);
});

// update attendee
app.put('/attendees/:attendeeId', async (req, res) => {
  await update(req, res, db, attendeeCollection);
});

//define google cloud function name
export const webApi = functions.https.onRequest(main);
