#! /usr/bin/env node
const axios = require('axios');

const org = process.argv[2];
const token = process.env['GITHUB_TOKEN'] ? process.env['GITHUB_TOKEN'] : process.argv[3];

const mainUrl = `https://api.github.com/search/repositories\?q=org:${org}`;
const linkRegex = new RegExp('<(.*)>')
let url = mainUrl;
async function main() {
  while (true) {
    const resp = await axios.get(url, {
      headers: {
        Authorization: `token ${token}`,
        'User-Agent': 'node',
      },
    });

    resp.data.items.forEach(i => {
      console.log(`[${i.name}]`)
      console.log(`checkout = git clone '${i.ssh_url}' '${i.name}'`);
      console.log('');
    });
    url = undefined;
    const links = resp.headers.link.split(',');
    links.forEach(l => {
      const vals = l.split(';');
      if (vals[1] === ' rel="next"') {
        url = linkRegex.exec(vals[0])[1];
      }
    });
    if (!url) break;
  }
}

main();
