const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://saurabhmaurya0409:<password>@namastenode.sjxfv.mongodb.net/";

const client = new MongoClient(url);
const dbName = "TestUser";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const inserData = {
    first_name: "Priyanshu",
    last_name: "Maurya",
    age: 18,
    city: "Pune",
    phone_number: "9000000000",
  };

  // const insertResult = await collection.insertMany([inserData]);
  // console.log("Inserted documents =>", insertResult);

  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // const updateResult = await collection.updateOne(
  //   { last_name: "Maurya" },
  //   { $set: { first_name: "Poojaa" } }
  // );
  // console.log("Updated documents =>", updateResult);
  return "Done.";
}

main()
  .then((resp) => {
    console.log("resp", resp);
  })
  .catch((err) => {
    console.log("err", err);
  })
  .finally(() => {
    client.close();
  });
