// change the file to [sub].js
export default {
    owner: {
        // your github username
        user: "tamoghnak13",
        // your github email
        email: "tamoghnak13@gmail.com",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "CNAME",
            record: "zatoga.pages.dev",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
    ]
}
