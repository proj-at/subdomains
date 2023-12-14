// change the file to [sub].js
export default {
    owner: {
        // your github username
        user: "AtlasL1",
        // your github email
        email: "loxingle1@gmail.com",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "CNAME",
            record: "atpi.vercel.app",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
    ]
}
