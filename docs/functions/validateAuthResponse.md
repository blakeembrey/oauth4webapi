# Function: validateAuthResponse

[💗 Help the project](https://github.com/sponsors/panva)

▸ **validateAuthResponse**(`as`, `client`, `parameters`, `expectedState?`): `CallbackParameters` \| [`OAuth2Error`](../interfaces/OAuth2Error.md)

Validates an OAuth 2.0 Authorization Response or Authorization Error Response
message returned from the authorization server's [`as.authorization_endpoint`](../interfaces/AuthorizationServer.md#authorization_endpoint).

**`see`** [RFC 6749 - The OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/rfc/rfc6749.html#section-4.1.2)

**`see`** [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication)

**`see`** [RFC 9207 - OAuth 2.0 Authorization Server Issuer Identification](https://www.rfc-editor.org/rfc/rfc9207.html)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `as` | [`AuthorizationServer`](../interfaces/AuthorizationServer.md) | Authorization Server Metadata. |
| `client` | [`Client`](../interfaces/Client.md) | Client Metadata. |
| `parameters` | `URLSearchParams` \| `URL` | Authorization response. |
| `expectedState?` | `string` \| typeof [`expectNoState`](../variables/expectNoState.md) \| typeof [`skipStateCheck`](../variables/skipStateCheck.md) | Expected `state` parameter value. Default is [expectNoState](../variables/expectNoState.md). |

#### Returns

`CallbackParameters` \| [`OAuth2Error`](../interfaces/OAuth2Error.md)

Validated Authorization Response parameters or Authorization Error Response.
