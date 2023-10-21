// Reserved for Proj.sbs
export default {
    owner: {
        // your github username
        user: "proj-at",
        // your github email
        email: "github@proj.at",
    },
    record: {
        // type, accept CNAME, A, AAAA
        type: "CNAME",
        record: "cname.vercel-dns.com.",
        // using Cloudflare CDN
        proxied: false,
        // TTL, (s), must be between 60 and 86400,
        ttl: 60,
    }
}