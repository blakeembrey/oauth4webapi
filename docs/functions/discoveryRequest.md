# Function: discoveryRequest

[💗 Help the project](https://github.com/sponsors/panva)

▸ **discoveryRequest**(`issuerIdentifier`, `options?`): `Promise`<`Response`\>

Performs an authorization server metadata discovery using one of two
[transformation algorithms](../interfaces/DiscoveryRequestOptions.md#algorithm)
applied to the `issuerIdentifier` argument.

- `oidc` (default) as defined by OpenID Connect Discovery 1.0.
- `oauth2` as defined by RFC 8414.

The difference between these two algorithms is in their handling of path
components in the Issuer Identifier.

**`see`** [RFC 8414 - OAuth 2.0 Authorization Server Metadata](https://www.rfc-editor.org/rfc/rfc8414.html#section-3)

**`see`** [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `issuerIdentifier` | `URL` | Issuer Identifier to resolve the well-known discovery URI for. |
| `options?` | [`DiscoveryRequestOptions`](../interfaces/DiscoveryRequestOptions.md) | - |

#### Returns

`Promise`<`Response`\>

Resolves with
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)'s
[Response](https://developer.mozilla.org/en-US/docs/Web/API/Response).
