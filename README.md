# ![LOGO](logo.png) Calendar **flow**ground Connector

## Description

A generated **flow**ground connector for the Calendar API (version v3).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/calendar/v3/swagger.json<br/>
Generated at: 2019-05-23T12:13:02+03:00

## API Description

Manipulates events and other calendar data.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Creates a secondary calendar.

*Tags:* `calendars`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.

*Tags:* `calendars`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns metadata for a calendar.

*Tags:* `calendars`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates metadata for a calendar. This method supports patch semantics.

*Tags:* `calendars`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates metadata for a calendar.

*Tags:* `calendars`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns the rules in the access control list for the calendar.

*Tags:* `acl`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `maxResults` - _optional_ - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
* `pageToken` - _optional_ - Token specifying which result page to return. Optional.
* `showDeleted` - _optional_ - Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
* `syncToken` - _optional_ - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates an access control rule.

*Tags:* `acl`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `sendNotifications` - _optional_ - Whether to send notifications about the calendar sharing change. Optional. The default is True.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Watch for changes to ACL resources.

*Tags:* `acl`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `maxResults` - _optional_ - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
* `pageToken` - _optional_ - Token specifying which result page to return. Optional.
* `showDeleted` - _optional_ - Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
* `syncToken` - _optional_ - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Deletes an access control rule.

*Tags:* `acl`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `ruleId` - _required_ - ACL rule identifier.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns an access control rule.

*Tags:* `acl`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `ruleId` - _required_ - ACL rule identifier.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an access control rule. This method supports patch semantics.

*Tags:* `acl`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `ruleId` - _required_ - ACL rule identifier.
* `sendNotifications` - _optional_ - Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an access control rule.

*Tags:* `acl`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `ruleId` - _required_ - ACL rule identifier.
* `sendNotifications` - _optional_ - Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.

*Tags:* `calendars`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns events on the specified calendar.

*Tags:* `events`

#### Input Parameters
* `alwaysIncludeEmail` - _optional_ - Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `iCalUID` - _optional_ - Specifies event ID in the iCalendar format to be included in the response. Optional.
* `maxAttendees` - _optional_ - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
* `maxResults` - _optional_ - Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
* `orderBy` - _optional_ - The order of the events returned in the result. Optional. The default is an unspecified, stable order.
    Possible values: startTime, updated.
* `pageToken` - _optional_ - Token specifying which result page to return. Optional.
* `privateExtendedProperty` - _optional_ - Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
* `q` - _optional_ - Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
* `sharedExtendedProperty` - _optional_ - Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
* `showDeleted` - _optional_ - Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
* `showHiddenInvitations` - _optional_ - Whether to include hidden invitations in the result. Optional. The default is False.
* `singleEvents` - _optional_ - Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
* `syncToken` - _optional_ - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.

These are: 
- iCalUID 
- orderBy 
- privateExtendedProperty 
- q 
- sharedExtendedProperty 
- timeMin 
- timeMax 
- updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
* `timeMax` - _optional_ - Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored. If timeMin is set, timeMax must be greater than timeMin.
* `timeMin` - _optional_ - Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored. If timeMax is set, timeMin must be smaller than timeMax.
* `timeZone` - _optional_ - Time zone used in the response. Optional. The default is the time zone of the calendar.
* `updatedMin` - _optional_ - Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.

### Creates an event.

*Tags:* `events`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `conferenceDataVersion` - _optional_ - Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
* `maxAttendees` - _optional_ - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
* `sendNotifications` - _optional_ - Deprecated. Please use sendUpdates instead.

Whether to send notifications about the creation of the new event. Note that some emails might still be sent even if you set the value to false. The default is false.
* `sendUpdates` - _optional_ - Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false.
    Possible values: all, externalOnly, none.
* `supportsAttachments` - _optional_ - Whether API client performing operation supports event attachments. Optional. The default is False.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Imports an event. This operation is used to add a private copy of an existing event to a calendar.

*Tags:* `events`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `conferenceDataVersion` - _optional_ - Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
* `supportsAttachments` - _optional_ - Whether API client performing operation supports event attachments. Optional. The default is False.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates an event based on a simple text string.

*Tags:* `events`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `sendNotifications` - _optional_ - Deprecated. Please use sendUpdates instead.

Whether to send notifications about the creation of the event. Note that some emails might still be sent even if you set the value to false. The default is false.
* `sendUpdates` - _optional_ - Guests who should receive notifications about the creation of the new event.
    Possible values: all, externalOnly, none.
* `text` - _required_ - The text describing the event to be created.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Watch for changes to Events resources.

*Tags:* `events`

#### Input Parameters
* `alwaysIncludeEmail` - _optional_ - Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `iCalUID` - _optional_ - Specifies event ID in the iCalendar format to be included in the response. Optional.
* `maxAttendees` - _optional_ - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
* `maxResults` - _optional_ - Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
* `orderBy` - _optional_ - The order of the events returned in the result. Optional. The default is an unspecified, stable order.
    Possible values: startTime, updated.
* `pageToken` - _optional_ - Token specifying which result page to return. Optional.
* `privateExtendedProperty` - _optional_ - Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
* `q` - _optional_ - Free text search terms to find events that match these terms in any field, except for extended properties. Optional.
* `sharedExtendedProperty` - _optional_ - Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
* `showDeleted` - _optional_ - Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
* `showHiddenInvitations` - _optional_ - Whether to include hidden invitations in the result. Optional. The default is False.
* `singleEvents` - _optional_ - Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
* `syncToken` - _optional_ - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.

These are: 
- iCalUID 
- orderBy 
- privateExtendedProperty 
- q 
- sharedExtendedProperty 
- timeMin 
- timeMax 
- updatedMin If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
* `timeMax` - _optional_ - Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored. If timeMin is set, timeMax must be greater than timeMin.
* `timeMin` - _optional_ - Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, e.g., 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but will be ignored. If timeMax is set, timeMin must be smaller than timeMax.
* `timeZone` - _optional_ - Time zone used in the response. Optional. The default is the time zone of the calendar.
* `updatedMin` - _optional_ - Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.

### Deletes an event.

*Tags:* `events`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `eventId` - _required_ - Event identifier.
* `sendNotifications` - _optional_ - Deprecated. Please use sendUpdates instead.

Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to false. The default is false.
* `sendUpdates` - _optional_ - Guests who should receive notifications about the deletion of the event.
    Possible values: all, externalOnly, none.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns an event.

*Tags:* `events`

#### Input Parameters
* `alwaysIncludeEmail` - _optional_ - Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `eventId` - _required_ - Event identifier.
* `maxAttendees` - _optional_ - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
* `timeZone` - _optional_ - Time zone used in the response. Optional. The default is the time zone of the calendar.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an event. This method supports patch semantics.

*Tags:* `events`

#### Input Parameters
* `alwaysIncludeEmail` - _optional_ - Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `conferenceDataVersion` - _optional_ - Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
* `eventId` - _required_ - Event identifier.
* `maxAttendees` - _optional_ - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
* `sendNotifications` - _optional_ - Deprecated. Please use sendUpdates instead.

Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.
* `sendUpdates` - _optional_ - Guests who should receive notifications about the event update (for example, title changes, etc.).
    Possible values: all, externalOnly, none.
* `supportsAttachments` - _optional_ - Whether API client performing operation supports event attachments. Optional. The default is False.

### Updates an event.

*Tags:* `events`

#### Input Parameters
* `alwaysIncludeEmail` - _optional_ - Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `conferenceDataVersion` - _optional_ - Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
* `eventId` - _required_ - Event identifier.
* `maxAttendees` - _optional_ - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
* `sendNotifications` - _optional_ - Deprecated. Please use sendUpdates instead.

Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.
* `sendUpdates` - _optional_ - Guests who should receive notifications about the event update (for example, title changes, etc.).
    Possible values: all, externalOnly, none.
* `supportsAttachments` - _optional_ - Whether API client performing operation supports event attachments. Optional. The default is False.

### Returns instances of the specified recurring event.

*Tags:* `events`

#### Input Parameters
* `alwaysIncludeEmail` - _optional_ - Whether to always include a value in the email field for the organizer, creator and attendees, even if no real email is available (i.e. a generated, non-working value will be provided). The use of this option is discouraged and should only be used by clients which cannot handle the absence of an email address value in the mentioned places. Optional. The default is False.
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `eventId` - _required_ - Recurring event identifier.
* `maxAttendees` - _optional_ - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
* `maxResults` - _optional_ - Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
* `originalStart` - _optional_ - The original start time of the instance in the result. Optional.
* `pageToken` - _optional_ - Token specifying which result page to return. Optional.
* `showDeleted` - _optional_ - Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.
* `timeMax` - _optional_ - Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.
* `timeMin` - _optional_ - Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.
* `timeZone` - _optional_ - Time zone used in the response. Optional. The default is the time zone of the calendar.

### Moves an event to another calendar, i.e. changes an event's organizer.

*Tags:* `events`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier of the source calendar where the event currently is on.
* `destination` - _required_ - Calendar identifier of the target calendar where the event is to be moved to.
* `eventId` - _required_ - Event identifier.
* `sendNotifications` - _optional_ - Deprecated. Please use sendUpdates instead.

Whether to send notifications about the change of the event's organizer. Note that some emails might still be sent even if you set the value to false. The default is false.
* `sendUpdates` - _optional_ - Guests who should receive notifications about the change of the event's organizer.
    Possible values: all, externalOnly, none.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Stop watching resources through this channel

*Tags:* `channels`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns the color definitions for calendars and events.

*Tags:* `colors`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns free/busy information for a set of calendars.

*Tags:* `freebusy`

#### Input Parameters
* `alt` - _optional_ - Data format for the response.
    Possible values: json.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns the calendars on the user's calendar list.

*Tags:* `calendarList`

#### Input Parameters
* `maxResults` - _optional_ - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
* `minAccessRole` - _optional_ - The minimum access role for the user in the returned entries. Optional. The default is no restriction.
    Possible values: freeBusyReader, owner, reader, writer.
* `pageToken` - _optional_ - Token specifying which result page to return. Optional.
* `showDeleted` - _optional_ - Whether to include deleted calendar list entries in the result. Optional. The default is False.
* `showHidden` - _optional_ - Whether to show hidden entries. Optional. The default is False.
* `syncToken` - _optional_ - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Inserts an existing calendar into the user's calendar list.

*Tags:* `calendarList`

#### Input Parameters
* `colorRgbFormat` - _optional_ - Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Watch for changes to CalendarList resources.

*Tags:* `calendarList`

#### Input Parameters
* `maxResults` - _optional_ - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
* `minAccessRole` - _optional_ - The minimum access role for the user in the returned entries. Optional. The default is no restriction.
    Possible values: freeBusyReader, owner, reader, writer.
* `pageToken` - _optional_ - Token specifying which result page to return. Optional.
* `showDeleted` - _optional_ - Whether to include deleted calendar list entries in the result. Optional. The default is False.
* `showHidden` - _optional_ - Whether to show hidden entries. Optional. The default is False.
* `syncToken` - _optional_ - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Removes a calendar from the user's calendar list.

*Tags:* `calendarList`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a calendar from the user's calendar list.

*Tags:* `calendarList`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing calendar on the user's calendar list. This method supports patch semantics.

*Tags:* `calendarList`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `colorRgbFormat` - _optional_ - Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing calendar on the user's calendar list.

*Tags:* `calendarList`

#### Input Parameters
* `calendarId` - _required_ - Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
* `colorRgbFormat` - _optional_ - Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns all user settings for the authenticated user.

*Tags:* `settings`

#### Input Parameters
* `maxResults` - _optional_ - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
* `pageToken` - _optional_ - Token specifying which result page to return. Optional.
* `syncToken` - _optional_ - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Watch for changes to Settings resources.

*Tags:* `settings`

#### Input Parameters
* `maxResults` - _optional_ - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
* `pageToken` - _optional_ - Token specifying which result page to return. Optional.
* `syncToken` - _optional_ - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Returns a single user setting.

*Tags:* `settings`

#### Input Parameters
* `setting` - _required_ - The id of the user setting.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-calendar-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
