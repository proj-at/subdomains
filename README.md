# Proj.sbs (by Proj.at)

> 🌎 Get your own proj.sbs subdomains, free for open-source developers. (by Proj.at)

> [!WARNING]
> `Proj.sbs` Subdomain **service will be ended on October 20th, 2024 (UTC)**. All the subdomains will not be accessible after the service is ended, and the GitHub repository of this project ([`proj-at/subdomains`](https://github.com/proj-at/subdomains)) will be archived. To avoid being affected, you may need to migrate as soon as possible.
> 
> We started this project because we would like to make previewing easier for developers so that they can launch their projects, documentation sites, or other open-source websites easily and quickly. However, we found this is not convenient for developers because the process of creating, reviewing, and merging a PR is not efficient. That's one of the main reasons we end this project.
> 
> To avoid being affected, you may need to:
> - Check all your projects or services that is using any domain or subdomain of `proj.sbs`.
> - If the subdomain is owned by you, you may need to copy your records and change them to your own domain or other services.
> - If the subdomain is not owned by you, you may need to contact them by using the email information or other contact information that they left in the record file.
>
> Thank you for your understanding.


---


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
