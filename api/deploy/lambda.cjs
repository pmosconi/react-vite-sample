/* eslint-disable no-undef */
'use strict';
const awsServerlessExpress = require('@vendia/serverless-express');
const app = require('./app.cjs');
exports.handler = awsServerlessExpress({ app });