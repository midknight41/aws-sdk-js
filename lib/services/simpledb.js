/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

var AWS = require('../core');

AWS.SimpleDB = AWS.Service.defineService('./services/simpledb.api', {
  Client: {
    /**
     * @api private
     */
    setEndpoint: function setEndpoint(endpoint) {
      if (this.config.region === 'us-east-1') {
        var svc = this.api.serviceName;
        this.endpoint = new AWS.Endpoint(svc + '.amazonaws.com');
      } else {
        AWS.Client.prototype.setEndpoint.call(this, endpoint);
      }
    }
  }
});

module.exports = AWS.SimpleDB;