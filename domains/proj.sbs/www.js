// Reserved for Proj.at
export default {
    owner: {
        // your github username
        user: "proj-at",
        // your github email
        email: "github@proj.at",
    },
    records: [
        {
            // type, accept CNAME, A, AAAA
            type: "CNAME",
            record: "proj-at.netlify.app.",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400,
            ttl: 60,
        }
    ]
}
