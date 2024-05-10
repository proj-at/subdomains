// change the file to [sub].js
export default {
    owner: {
        // your github username
        user: "zemerik",
        // your github email
        email: "zemeriky@gmail.com",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "URL",
            record: "https://zemerik.is-a.dev",
            // using Cloudflare CDN
            proxied: false,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
    ]
}
