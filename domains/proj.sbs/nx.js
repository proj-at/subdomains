// change the file to [sub].js
export default {
    owner: {
        // your github username
        user: "jadfoq",
        // your github email
        email: "jadfoq@disr.it",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "NS",
            record: "ns1.desec.io",
            // using Cloudflare CDN
            proxied: false,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
        {
            // type of DNS record
            type: "NS",
            record: "ns2.desec.org",
            // using Cloudflare CDN
            proxied: false,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
    ]
}
