import { Store, Quad, NamedNode } from 'n3';

const ES = 'http://eulersharp.sourceforge.net/2009/12dtb/test#';
const TYPE = new NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type');
const SUBCLASS_OF = new NamedNode('http://www.w3.org/2000/01/rdf-schema#subClassOf');

export const TARGET_RESULT = new Quad(new NamedNode(`${ES}ind`), TYPE, new NamedNode(`${ES}A2`));

export function generateDeepTaxonomy(size: number, extended = false) {
  const store = new Store();

  if (extended) {
    for (let i = 0; i < size; i += 1) {
      store.addQuad(new Quad(new NamedNode(`${ES}ind${i}`), TYPE, new NamedNode(`${ES}N0`)));
    }
  } else {
    store.addQuad(new Quad(new NamedNode(`${ES}ind`), TYPE, new NamedNode(`${ES}N0`)));
  }

  store.addQuad(new Quad(new NamedNode(`${ES}N${size}`), SUBCLASS_OF, new NamedNode(`${ES}A2`)));

  for (let i = 0; i < size; i += 1) {
    store.addQuads([
      new Quad(new NamedNode(`${ES}N${i}`), SUBCLASS_OF, new NamedNode(`${ES}N${i + 1}`)),
      new Quad(new NamedNode(`${ES}N${i}`), SUBCLASS_OF, new NamedNode(`${ES}I${i + 1}`)),
      new Quad(new NamedNode(`${ES}N${i}`), SUBCLASS_OF, new NamedNode(`${ES}J${i + 1}`)),
    ]);
  }

  return store;
}
