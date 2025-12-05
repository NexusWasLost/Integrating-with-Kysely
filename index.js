import { db } from "./dbConfig.js";

//Custom Query
async function customQuery() {
  const data = await db
  .selectFrom("orders")
  .select("customers.name")
  .select(db.fn.count("orders.order_id").as("total_orders_placed"))
  .innerJoin("customers", "customers.id", "orders.customer_id")
  .groupBy("customers.name")
  .execute();

  console.log(data);
}

//Read everything from a table - Read
async function getEverything(table){
    const data = await db
    .selectFrom(table)
    .selectAll()
    .execute();

    console.log(data);
}

//Insert into table - Create
async function insertRecord(table){
    const insertRes = await db
    .insertInto(table)
    .values({
        id: 8,
        name: "Hank",
        age: "53",
        address: "Detroit"
    })
    .execute();

    console.log(insertRes);
}

//Update existing records in table - Update
async function updateRecord(table){
    const updateRes = await db
    .updateTable(table)
    .set({
        "name": "Hank Anderson"
    })
    .where("id", "=", 8)
    .execute();

    console.log(updateRes);
}

//Delete from table - Delete
async function deleteRecord(table){
    const deleteRes = await db
    .deleteFrom(table)
    .where("id", "=", 8)
    .execute();

    console.log(deleteRes)
}

// insertRecord("customers");
// updateRecord("customers");
// deleteRecord("customers");

// customQuery();

getEverything("customers");
