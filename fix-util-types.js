const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'node_modules/openid-client/lib/helpers/is_key_object.js');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${filePath}:`, err);
    return;
  }

  const result = data.replace(
    `const { isKeyObject } = require('util').types;`,
    `
let types;
try {
  types = require('util').types;
} catch (err) {
  // util.types is not available in older versions of Node.js
}

module.exports = types ? types.isKeyObject : () => false;
`
  );

  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) console.error(`Error writing file ${filePath}:`, err);
  });
});
