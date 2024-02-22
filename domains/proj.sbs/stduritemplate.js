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
            record: "google-site-verification=XwBh__ofRV59ysU9N7fgpsRxeuYnXos2WpUuPjanu_g",
            ttl: 60,
        },
    ]
}
