export default {
    owner: {
        // your github username
        user: "ocoke",
        // your github email
        email: "hi@cky.im",
    },
    records: [
        {
            // type, accept CNAME, A, AAAA
            type: "CNAME",
            record: "cname.vercel-dns.com.",
            // using Cloudflare CDN
            proxied: false,
            // TTL, (s), must be between 60 and 86400,
            ttl: 60,
        }
    ]
}
