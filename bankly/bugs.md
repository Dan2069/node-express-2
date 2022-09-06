In Line 4 of users.js, the:
    "const router = new express.Router();"
Doesn't need a new instance attached to it, so I deleted the 'new' part.