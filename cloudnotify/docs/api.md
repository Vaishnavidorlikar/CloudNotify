# CloudNotify API

## Endpoint
`POST /send`

### Request Body
```
{
  "type": "email" | "sms",
  "to": "recipient@example.com" | "+1234567890",
  "message": "Your notification message"
}
```

### Headers
- `Authorization: Bearer <JWT>`

### Response
- `200 OK`: Message queued
- `400 Bad Request`: Missing fields
- `401 Unauthorized`: Missing token
- `403 Forbidden`: Invalid token

---
See `architecture.md` for system overview.