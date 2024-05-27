// change the file to [sub].js
export default {
    owner: {
        // your github username
        user: "Dev10us",
        // your github email
        email: "melonmasteristaken@gmail.com",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "CNAME",
            record: "scriptorite.github.io",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
    ]
}
