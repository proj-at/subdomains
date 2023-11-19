export default {
	owner: {
		// your github username
		user: "kingmaxine",
		// your github email
		email: "r7ja91p1fm@oinbgf.site",
	},
	records: [
		// can include multiple records, if some of them conflict, may be overwritten
		{
			type: "A",
			record: "193.122.52.120",
			// using Cloudflare CDN
			proxied: false,
			// TTL, (s), must be between 60 and 86400
			ttl: 60,
		},
	],
};
