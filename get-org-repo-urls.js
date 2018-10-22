const rp = require('request-promise');

const { GITHUB_TOKEN } = process.env;


const org = process.argv[2];
const mainUrl = `https://api.github.com/search/repositories\?q=org:${org}`;
const linkRegex = new RegExp('<(.*)>')
let url = mainUrl;
async function main() {
  while (true) {
    const resp = await rp({
      url,
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'User-Agent': 'node',
      },
      resolveWithFullResponse: true,
    });

    body = JSON.parse(resp.body);
    body.items.forEach(i => {
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
