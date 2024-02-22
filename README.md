# Proj.sbs (by Proj.at)

> 🌎 Get your own proj.sbs subdomains, free for open-source developers. (by Proj.at)

> [!NOTE]  
> Please note that all the content on Proj.sbs is created by users. **Proj.at is not responsible for its content and opinions.** If the content on it makes you feel uncomfortable, please report it to us. You can send email to *report@proj.sbs* or [click here](https://github.com/proj-at/subdomains/issues/new?assignees=&labels=report&projects=&template=report.md&title=Report)


## Register

1. Fork this repository to your own account.
2. Copy the `template.js` in the `domains` folder and rename it to your subdomain name. (for `abc.proj.sbs`, the file name should be `abc.js`).
3. Move the file to the domain folder, (for `abc.proj.sbs`, the file path should be `domains/proj.sbs/abc.js`) 
4. Edit the file, and fill in the information.
5. Commit the changes and create a pull request to `proj-at/subdomains:main`.
6. Wait for the review and merge.

## Formats

```js
// change the file to [sub].js
// e.g. `foo.js`
export default {
    owner: {
        // your github username
        user: "proj-at",
        // your github email
        email: "github@proj.at",
    },
    records: [
        // can include multiple records, if some of them conflict, may be overwritten
        {
            // type of DNS record
            type: "CNAME",
            // content of the record
            record: "cname.vercel-dns.com.",
            // using Cloudflare CDN
            proxied: true,
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
        {
            // type of DNS record
            type: "TXT",
            // content of the record
            record: "x...",
            // TTL, (s), must be between 60 and 86400
            ttl: 60,
        },
        // ...
    ]
}
```

Once the branch has merged, you can access your subdomain, enjoy ur `proj.sbs` domain.

## About Proj.sbs

Proj.sbs means `project, side by side`. It's a free subdomain service for open-source developers. You can use it for your open-source projects or your own website.



## Thanks

We use [Cloudflare](https://www.cloudflare.com/) DNS to manage our domain records, and its CDN to provide global service.
