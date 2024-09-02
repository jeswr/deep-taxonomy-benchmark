import { Parser, Store } from 'n3';

import { data as foaf } from './data/foaf';
import { data as owl } from './data/owl';
import { data as rdfs } from './data/rdfs';
import { data as timbl } from './data/timbl';

export const getTimbl = () => new Store(new Parser().parse(timbl));
export const getFoaf = () => new Store(new Parser().parse(foaf));
export const getTimblAndFoaf = () => new Store(
  [...new Parser().parse(timbl), ...new Parser().parse(foaf)],
);
export const getOwl = () => new Store(new Parser({ format: 'n3' }).parse(owl));
export const getRdfs = () => new Store(new Parser({ format: 'n3' }).parse(rdfs));
