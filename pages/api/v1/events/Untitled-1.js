
// res.write(`data: ${JSON.stringify()}\n\n`);
// const { operationType, fullDocument, documentKey } = change;
// const eventData = {
//   operationType,
//   fullDocument,
//   documentKey,
// };

// const items = await usersCollection
//   .aggregate([
//     {
//       $match: {
//         email: session.user.email,
//       },
//     },
//     {
//       $lookup: {
//         from: "stream_targets",
//         localField: "target_ids",
//         foreignField: "_id",
//         as: "userTargets",
//       },
//     },
//   ])
//   .toArray();
