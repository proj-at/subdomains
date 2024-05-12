// change the file to [sub].js
export default {
    owner: {
        // your github username
        user: "adityash4rma",
        // your github email
        email: "gaming.boy.fhx@gmail.com",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "CNAME",
            record: "adityash4rma.github.io",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
    ]
}
