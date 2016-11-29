import DynamoDB = require('../../clients/dynamodb');
import * as stream from 'stream';
import {Request} from '../request';
import {AWSError} from '../error';
interface File {}
interface Blob {}

import Types = DynamoDB.DocumentClient.Types;

/**
 * The document client simplifies working with items in Amazon DynamoDB
 * by abstracting away the notion of attribute values. This abstraction
 * annotates native JavaScript types supplied as input parameters, as well
 * as converts annotated response data to native JavaScript types.
 */
export class DocumentClient {
    /**
     * Creates a DynamoDB document client with a set of configuration options.
     */
    constructor(options?: Types.DocumentClientOptions)

    /**
     * Creates a set of elements inferring the type of set from the type of the first element. Amazon DynamoDB currently supports the number sets, string sets, and binary sets. For more information about DynamoDB data types see the documentation on the Amazon DynamoDB Data Model.
     */
    createSet(list: number[]|string[]|binaryType[], options: Types.CreateSetOptions): void
    /**
     * Returns the attributes of one or more items from one or more tables by delegating to AWS.DynamoDB.batchGetItem().
     */
    batchGet(params: Types.BatchGetItemInput, callback?: (err: AWSError, data: Types.BatchGetItemOutput) => void): Request<Types.BatchGetItemOutput, AWSError>;
    /**
     * Puts or deletes multiple items in one or more tables by delegating to AWS.DynamoDB.batchWriteItem().
     */
    batchWrite(params: Types.BatchWriteItemInput, callback?: (err: AWSError, data: Types.BatchWriteItemOutput) => void): Request<Types.BatchWriteItemOutput, AWSError>;
    /**
     * Deletes a single item in a table by primary key by delegating to AWS.DynamoDB.deleteItem().
     */
    delete(params: Types.DeleteItemInput, callback?: (err: AWSError, data: Types.DeleteItemOutput) => void): Request<Types.DeleteItemOutput, AWSError>;
    /**
     * Returns a set of attributes for the item with the given primary key by delegating to AWS.DynamoDB.getItem().
     */
    get(params: Types.GetItemInput, callback?: (err: AWSError, data: Types.GetItemOutput) => void): Request<Types.GetItemOutput, AWSError>;
    /**
     * Creates a new item, or replaces an old item with a new item by delegating to AWS.DynamoDB.putItem().
     */
    put(params: Types.PutItemInput, callback?: (err: AWSError, data: Types.PutItemOutput) => void): Request<Types.PutItemOutput, AWSError>;
    /**
     * Directly access items from a table by primary key or a secondary index.
     */
    query(params: Types.QueryInput, callback?: (err: AWSError, data: Types.QueryOutput) => void): Request<Types.QueryOutput, AWSError>;
    /**
     * Returns one or more items and item attributes by accessing every item in a table or a secondary index.
     */
    scan(params: Types.ScanInput, callback?: (err: AWSError, data: Types.ScanOutput) => void): Request<Types.ScanOutput, AWSError>;
    /**
     * Edits an existing item's attributes, or adds a new item to the table if it does not already exist by delegating to AWS.DynamoDB.updateItem().
     */
    update(params: Types.UpdateItemInput, callback?: (err: AWSError, data: Types.UpdateItemOutput) => void): Request<Types.UpdateItemOutput, AWSError>;
}

type binaryType = Buffer|File|Blob|ArrayBuffer|DataView|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|stream.Stream;