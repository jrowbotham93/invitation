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
    const newAtt = await db.collection(attendeeCollection).add(attendee);
    res.status(201).json({ id: newAtt.id, data: attendee });
  } catch (error) {
    res.status(400).send('Invalid entry');
  }
}
