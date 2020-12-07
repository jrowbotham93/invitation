export default async function read(res: any, db: any, coll: string) {
  try {
    const attendeeQuerySnapshot = await db.collection(coll).get();
    const attendees: any[] = [];
    attendeeQuerySnapshot.forEach((doc: any) => {
      attendees.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).send(error);
  }
}
