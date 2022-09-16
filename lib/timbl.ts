import * as path from 'path';
import { load } from './load';

export function getTimbl() {
  return load(path.join(__dirname, 'data', 'timbl.ttl'));
}

export function getFoaf() {
  return load(path.join(__dirname, 'data', 'foaf.ttl'));
}

export async function getTimblAndFoaf() {
  return load(path.join(__dirname, 'data', 'foaf.ttl'), await getTimbl());
}
