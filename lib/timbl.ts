import * as path from 'path';
import derference from 'rdf-dereference-store';

const timbl = path.join(__dirname, 'data', 'timbl.ttl');
const foaf = path.join(__dirname, 'data', 'foaf.ttl');
const owl = path.join(__dirname, 'data', 'owl.n3');
const rdfs = path.join(__dirname, 'data', 'rdfs.n3');

export const getTimbl = () => derference(timbl, { localFiles: true }).then(({ store }) => store);
export const getFoaf = () => derference(foaf, { localFiles: true }).then(({ store }) => store);
export const getTimblAndFoaf = () => derference([timbl, foaf], { localFiles: true })
  .then(({ store }) => store);
export const getOwl = () => derference(owl, { localFiles: true }).then(({ store }) => store);
export const getRdfs = () => derference(rdfs, { localFiles: true }).then(({ store }) => store);
