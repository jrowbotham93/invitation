interface Attendee {
  name: string;
  attending: boolean;
  plusOne: boolean;
  plusOneName: string;
}

export default async function create(
  req: any,
  res: any,
  db: any,
  attendeeCollection: any
) {
  try {
    const attendee: Attendee = {
      name: req.body['name'],
      attending: req.body['attending'],
      plusOne: req.body['plusOne'],
      plusOneName: req.body['plusOneName'],
    };
    const newDoc = await db.collection(attendeeCollection).add(attendee);
    res.status(201).send(`Created a new attendee: ${newDoc.id}`);
  } catch (error) {
    res.status(400).send('Invalid entry');
  }
}
