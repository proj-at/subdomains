// change the file to [sub].js
export default {
    owner: {
        // your github username
        user: "mazengohar",
        // your github email
        email: "mazengohar10@gmail.com",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "NS",
            record: "dns1.freehostia.com",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
        {
            // type of DNS record
            type: "NS",
            record: "dns2.freehostia.com",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
    ]
}
