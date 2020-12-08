export default async function remove(
  req: any,
  res: any,
  db: any,
  attendeeCollection: any
) {
  try {
    db.collection(attendeeCollection)
      .doc(req.params.attendeeId)
      .delete()
      .then(() => res.status(204).send(req.params.attendeeId))
      .catch(function (error: Error) {
        res.status(500).send(error);
      });
  } catch (error) {
    throw Error(error);
  }
}
