/**
 * Auto-generated action file for "Calendar" API.
 *
 * Generated at: 2019-05-07T14:41:15.753Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-calendar-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'calendar.events.watch'
 * Endpoint Path: '/calendars/{calendarId}/events/watch'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "alwaysIncludeEmail",
    "calendarId",
    "iCalUID",
    "maxAttendees",
    "maxResults",
    "orderBy",
    "pageToken",
    "privateExtendedProperty",
    "q",
    "sharedExtendedProperty",
    "showDeleted",
    "showHiddenInvitations",
    "singleEvents",
    "syncToken",
    "timeMax",
    "timeMin",
    "timeZone",
    "updatedMin"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "alwaysIncludeEmail": "alwaysIncludeEmail",
    "calendarId": "calendarId",
    "iCalUID": "iCalUID",
    "maxAttendees": "maxAttendees",
    "maxResults": "maxResults",
    "orderBy": "orderBy",
    "pageToken": "pageToken",
    "privateExtendedProperty": "privateExtendedProperty",
    "q": "q",
    "sharedExtendedProperty": "sharedExtendedProperty",
    "showDeleted": "showDeleted",
    "showHiddenInvitations": "showHiddenInvitations",
    "singleEvents": "singleEvents",
    "syncToken": "syncToken",
    "timeMax": "timeMax",
    "timeMin": "timeMin",
    "timeZone": "timeZone",
    "updatedMin": "updatedMin",
    "address": "address",
    "expiration": "expiration",
    "id": "id",
    "kind": "kind",
    "params": "params",
    "payload": "payload",
    "resourceId": "resourceId",
    "resourceUri": "resourceUri",
    "token": "token",
    "type": "type",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'calendar.events.watch',
        pathName: '/calendars/{calendarId}/events/watch',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}