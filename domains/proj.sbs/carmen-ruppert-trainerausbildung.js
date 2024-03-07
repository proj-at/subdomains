// change the file to [sub].js
// e.g. `foo.js`
export default {
    owner: {
        // your github username
        user: "thetechnikfreak",
        // your github email
        email: "contact@thetechnikfreak.is-a.dev",
    },
    // change the file to [sub].js
// e.g. `foo.js`
     records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "CNAME",
            // content of the record
            record: "thetechnikfreak.github.io",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
   ]
}
