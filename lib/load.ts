import { StreamParser, Store } from 'n3';
import fs from 'fs';
import { promisifyEventEmitter } from 'event-emitter-promisify';

export async function load(filename: string, store = new Store()) {
  return promisifyEventEmitter(
    store.import(new StreamParser({ baseIRI: 'http://example.org' }).import(fs.createReadStream(filename))),
    store,
  );
}
