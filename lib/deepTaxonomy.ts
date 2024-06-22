import { Store, DataFactory } from 'n3';

const { namedNode, quad } = DataFactory;

const ES = 'http://eulersharp.sourceforge.net/2009/12dtb/test#';
const TYPE = namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type');
const SUBCLASS_OF = namedNode('http://www.w3.org/2000/01/rdf-schema#subClassOf');

export const TARGET_RESULT = quad(namedNode(`${ES}ind`), TYPE, namedNode(`${ES}A2`));

export function generateDeepTaxonomy(size: number, extended = false) {
  const store = new Store();

  if (extended) {
    for (let i = 0; i < size; i += 1) {
      store.addQuad(quad(namedNode(`${ES}ind${i}`), TYPE, namedNode(`${ES}N0`)));
    }
  } else {
    store.addQuad(quad(namedNode(`${ES}ind`), TYPE, namedNode(`${ES}N0`)));
  }

  store.addQuad(quad(namedNode(`${ES}N${size}`), SUBCLASS_OF, namedNode(`${ES}A2`)));

  for (let i = 0; i < size; i += 1) {
    store.addQuads([
      quad(namedNode(`${ES}N${i}`), SUBCLASS_OF, namedNode(`${ES}N${i + 1}`)),
      quad(namedNode(`${ES}N${i}`), SUBCLASS_OF, namedNode(`${ES}I${i + 1}`)),
      quad(namedNode(`${ES}N${i}`), SUBCLASS_OF, namedNode(`${ES}J${i + 1}`)),
    ]);
  }

  return store;
}
