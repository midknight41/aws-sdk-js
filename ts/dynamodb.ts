import * as AWS from "../index"

import DocumentClient = AWS.DynamoDB.DocumentClient.Types;

// As an aside, the Types namespace makes things a little counter-intuitive. I would expect the following to be correct...
// const client: AWS.DynamoDB.DocumentClient = new AWS.DynamoDB.DocumentClient();

// But this is what actually works...
const client: AWS.DynamoDB.Types.DocumentClient = new AWS.DynamoDB.DocumentClient();

const params: DocumentClient.GetItemInput = {
  TableName: "MyTable",
  Key: {
    "my-key": "value"
  }
};

client.get(params, (err, data) => {

});