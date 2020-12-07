export default async function (
  req: any,
  res: any,
  db: any,
  attendeeCollection: any
) {
  await db
    .collection(attendeeCollection)
    .doc(req.params.attendeeId)
    .set(req.body, { merge: true })
    .then(() => res.json({ id: req.params.attendeeId }))
    .catch((error: Error) => res.status(500).send(error));
}
