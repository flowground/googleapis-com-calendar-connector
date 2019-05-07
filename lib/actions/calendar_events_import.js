/**
 * Auto-generated action file for "Calendar" API.
 *
 * Generated at: 2019-05-07T14:41:15.751Z
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
 * Operation: 'calendar.events.import'
 * Endpoint Path: '/calendars/{calendarId}/events/import'
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
    "calendarId",
    "conferenceDataVersion",
    "supportsAttachments",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "calendarId": "calendarId",
    "conferenceDataVersion": "conferenceDataVersion",
    "supportsAttachments": "supportsAttachments",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "anyoneCanAddSelf": "anyoneCanAddSelf",
    "attachments": "attachments",
    "attendees": "attendees",
    "attendeesOmitted": "attendeesOmitted",
    "colorId": "colorId",
    "conferenceId": "conferenceId",
    "iconUri": "iconUri",
    "type": "type",
    "key": "key",
    "name": "name",
    "conferenceSolution": "conferenceSolution",
    "conferenceSolutionKey": "conferenceSolutionKey",
    "requestId": "requestId",
    "statusCode": "statusCode",
    "status": "status",
    "createRequest": "createRequest",
    "entryPoints": "entryPoints",
    "notes": "notes",
    "parameters": "parameters",
    "addOnParameters": "addOnParameters",
    "signature": "signature",
    "conferenceData": "conferenceData",
    "created": "created",
    "displayName": "displayName",
    "email": "email",
    "id": "id",
    "self": "self",
    "creator": "creator",
    "description": "description",
    "date": "date",
    "dateTime": "dateTime",
    "timeZone": "timeZone",
    "end": "end",
    "endTimeUnspecified": "endTimeUnspecified",
    "etag": "etag",
    "private": "private",
    "shared": "shared",
    "extendedProperties": "extendedProperties",
    "display": "display",
    "height": "height",
    "iconLink": "iconLink",
    "link": "link",
    "preferences": "preferences",
    "title": "title",
    "width": "width",
    "gadget": "gadget",
    "guestsCanInviteOthers": "guestsCanInviteOthers",
    "guestsCanModify": "guestsCanModify",
    "guestsCanSeeOtherGuests": "guestsCanSeeOtherGuests",
    "hangoutLink": "hangoutLink",
    "htmlLink": "htmlLink",
    "iCalUID": "iCalUID",
    "kind": "kind",
    "location": "location",
    "locked": "locked",
    "organizer": "organizer",
    "originalStartTime": "originalStartTime",
    "privateCopy": "privateCopy",
    "recurrence": "recurrence",
    "recurringEventId": "recurringEventId",
    "overrides": "overrides",
    "useDefault": "useDefault",
    "reminders": "reminders",
    "sequence": "sequence",
    "url": "url",
    "source": "source",
    "start": "start",
    "summary": "summary",
    "transparency": "transparency",
    "updated": "updated",
    "visibility": "visibility",
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

    let callParams = {
        spec: spec,
        operationId: 'calendar.events.import',
        pathName: '/calendars/{calendarId}/events/import',
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