export default {
    owner: {
        // your github username
        user: "OpAayush",
        // your github email
        email: "aayushmagrawal@gmail.com",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "CNAME",
            // content of the record
            record: "spicydevs.pages.dev",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
    ]
}
