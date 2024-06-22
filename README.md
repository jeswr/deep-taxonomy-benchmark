# Deep Taxonomy Benchmark
Generates the data for the deep taxonomy benchmark

## Usage

```ts
import { generateDeepTaxonomy, getTimbl, getFoaf, getOwl, getRdfs } from 'deep-taxonomy-benchmark'

const taxonomy = generateDeepTaxonomy(5);
const extendedTaxonomy = generateDeepTaxonomy(5, true);

// Gets TimBLs profile card
const timbl = await getTimbl();

// Gets the foaf vocab
const foaf = await getFoaf();

// Gets the ow2rl reasoning rules
const owl = await getOwl();

// Gets the rdfs reasoning rules
const rdfs = await getRdfs();
```

## License
©2022–present
[Jesse Wright](https://github.com/jeswr),
[MIT License](https://github.com/jeswr/deep-taxonomy-benchmark/blob/master/LICENSE).
