import * as fs from 'fs';

export function logBanner() {
    fs.readFile('private/banner.txt', 'utf8', (err, data) => {
      console.log(data);
      // TODO: console.log(' :: NodeJS ::          (v' + packageJson.version + ')');
      console.log(' ');
    });
  }