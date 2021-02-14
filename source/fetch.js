import { get } from 'https';
import { createWriteStream } from 'fs';

const origin = 'https://m.bednarz.dev';
const queue = ['test.js', 'test-io.js'];

for (const file of queue) {
  get(`${origin}/${file}`, response =>
    response.pipe(createWriteStream(`./source/${file}`)));
}
