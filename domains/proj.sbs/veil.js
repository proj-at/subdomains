// This subdomain is used by the SVR5LD team for the Veil project. 
// Please direct all inquireries to @4d62 or @inbredmaniac via our contact form: https://svr.proj.sbs/contact

export default {
    owner: {
        user: "4d62",
        email: "tcp@proj.sbs",
    },
    records: [
        {
            type: "CNAME",
            record: "thecipherproject.github.io",
            proxied: true,
            ttl: 60,
        }
    ]
}
