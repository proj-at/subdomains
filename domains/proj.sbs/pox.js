// change the file to [sub].js
// e.g. `foo.js`
export default {
    owner: {
        // your github username
        user: "preston-riley",
        // your github email
        email: "pres1234569@gmail.com",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
{
            // type of DNS record
            type: "TXT",
            // content of the record
            record: "vc-domain-verify=pox.proj.sbs,afe4c0352c9d64df3456",
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
        // ...
    ]
}