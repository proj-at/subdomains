import fetch from 'node-fetch';
import 'dotenv/config'
const addRecord = async (domain, name, recordFile) => {
    const { type, record, proxied, ttl } = recordFile
    if (domain == "proj.sbs") {
        if (type != "CNAME" && type != "A" && type != "AAAA") {
            return false
        }
        const clientAPI = "https://api.cloudflare.com/client/v4"
        const zones = "/zones/" + process.env.CLOUDFLARE_ZONE_PROJ_SBS + "/dns_records"
        const apiKey = process.env.CLOUDFLARE_APIKEY_PROJ_SBS

        const fetchHeaders = {
            "Authorization": "Bearer " + apiKey,
            "Content-Type": "application/json"
        }
        const fetchBody = {
            type,
            name: name + '.' + domain,
            content: record,
            ttl,
            proxied,
            comment: "Added by proj.at",
        }
        const resp = await fetch(clientAPI + zones, {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify(fetchBody)
        }).then(res => res.json())
        if (resp.success) {
            return true
        } else if (resp.errors) {
            if (resp.errors[0].code == 81053) {
                let scanRecord = await fetch(clientAPI + zones, {
                    method: "GET",
                    headers: {
                        "X-Auth-Key": process.env.CLOUDFLARE_GLOBAL_KEY,
                        "X-Auth-Email": process.env.CLOUDFLARE_EMAIL_PROJ_SBS,
                        "Content-Type": "application/json"
                    },
                }).then(res => res.json())
                if (!scanRecord.success) {
                    return false
                }
                scanRecord = scanRecord.result
                scanRecord = scanRecord.filter(record => record.name == fetchBody.name)[0].id
                let updateRecord = await fetch(clientAPI + zones + '/' + scanRecord, {
                    method: "PUT",
                    headers: {
                        "X-Auth-Key": process.env.CLOUDFLARE_GLOBAL_KEY,
                        "X-Auth-Email": process.env.CLOUDFLARE_EMAIL_PROJ_SBS,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(fetchBody)
                }).then(res => res.json())
                if (!updateRecord.success) {
                    return false
                } else {
                    return true
                }
            }
            return false
        }
    } else {
        return false
    }
}

export default addRecord;