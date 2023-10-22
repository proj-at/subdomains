// change the file to [sub].js
export default {
    owner: {
        // your github username
        user: "4d62",
        // your github email
        email: "contact.thecipherproject@gmail.com",
    },
    record: {
        // type, accept CNAME, A, AAAA
        type: "CNAME",
        record: "4d62.github.io",
        // using Cloudflare CDN
        proxied: true,
        // TTL, (s), must be between 60 and 86400
        ttl: 60,
    }
}
