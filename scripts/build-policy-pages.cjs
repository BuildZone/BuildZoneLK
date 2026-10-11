// Give each policy a real entry point on static hosts, including GitHub Pages.
const fs = require('fs');
const path = require('path');
const build = path.resolve(__dirname, '../build');
const html = fs.readFileSync(path.join(build, 'index.html'), 'utf8');
const pages = {
  'return-policy': 'Return & Refund Policy',
  'privacy-policy': 'Privacy Policy',
  'terms-and-conditions': 'Terms & Conditions',
};
for (const [slug, title] of Object.entries(pages)) {
  const directory = path.join(build, slug);
  fs.mkdirSync(directory, { recursive: true });
  const entry = html
    .replace(/(src|href)="\.\//g, '$1="../')
    .replace('<title>BuildZone IT</title>', `<title>${title.replace(/&/g, '&amp;')} | BuildZone IT</title>`);
  fs.writeFileSync(path.join(directory, 'index.html'), entry);
}
