// change the file to [sub].js
// e.g. `foo.js`
export default {
    owner: {
        // your github username
        user: "tharth0ur",
        // your github email
        email: "athir.aldefaie1@gmail.com",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "CNAME",
            // content of the record
            record: "cname.vercel-dns.com.",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
        // ...
    ]
}
