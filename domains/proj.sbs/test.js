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
            record: "cname.vercel-dns.com.",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400,
            ttl: 60,
        },
        {
            // type, accept CNAME, A, AAAA
            type: "TXT",
            record: "Proj.at provides free subdomains for open-source developers.",
            // TTL, (s), must be between 60 and 86400,
            ttl: 60,
        },
    ]
}
