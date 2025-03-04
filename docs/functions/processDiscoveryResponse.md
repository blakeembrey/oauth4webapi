# Function: processDiscoveryResponse

[💗 Help the project](https://github.com/sponsors/panva)

▸ **processDiscoveryResponse**(`expectedIssuerIdentifier`, `response`): `Promise`<[`AuthorizationServer`](../interfaces/AuthorizationServer.md)\>

Validates
[Fetch API Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
to be one coming from the authorization server's well-known discovery endpoint.

**`see`** [RFC 8414 - OAuth 2.0 Authorization Server Metadata](https://www.rfc-editor.org/rfc/rfc8414.html#section-3)

**`see`** [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectedIssuerIdentifier` | `URL` | Expected Issuer Identifier value. |
| `response` | `Response` | Resolved value from [discoveryRequest](discoveryRequest.md). |

#### Returns

`Promise`<[`AuthorizationServer`](../interfaces/AuthorizationServer.md)\>

Resolves with the discovered Authorization Server Metadata.
