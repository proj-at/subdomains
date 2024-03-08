// change the file to [sub].js
// e.g. `foo.js`
export default {
    owner: {
        // your github username
        user: "gholts",
        // your github email
        email: "2088568842@qq.com",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "CNAME",
            // content of the record
            record: "gholtsmxv.github.io",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
        {
            // type of DNS record
            type: "TXT",
            // content of the record
            record: "x...",
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
        // ...
    ]
}
