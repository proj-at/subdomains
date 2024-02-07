export default {
    owner: {
        user: "andreaTP",
        email: "andrea.peruffo1982@gmail.com",
    },
    records: [
        {
            type: "CNAME",
            record: "std-uritemplate.github.io",
            proxied: false,
            ttl: 60,
        },
        {
            // Used to verify a domain in the Google Search console to publish the Dart package of:
            // https://github.com/std-uritemplate/std-uritemplate
            type: "TXT",
            record: "google-site-verification=d11CPNNEGVtX87AIyfp64R8d4X_rf2UdXFSLsn09u2Q",
            ttl: 60,
        },
    ]
}
