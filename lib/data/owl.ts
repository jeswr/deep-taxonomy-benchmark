export const data = `@prefix log: <http://www.w3.org/2000/10/swap/log#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

{
   ?x ?p ?y .
   ?p rdfs:domain ?c .
}
=> 
{
   ?x a ?c .
} .
{
   ?x ?p ?y .
   ?p rdfs:range ?c .
}
=> 
{
   ?y a ?c .
} .
{
   ?x ?p ?y1 , ?y2 .
   ?p a owl:FunctionalProperty .
}
=> 
{
   ?y1 owl:sameAs ?y2 .
} .
{
   ?p a owl:InverseFunctionalProperty .
   ?x1 ?p ?y .
   ?x2 ?p ?y .
}
=> 
{
   ?x1 owl:sameAs ?x2 .
} .
{
   ?x ?p ?x .
   ?p a owl:IrreflexiveProperty .
}
=> false .
{
   ?x ?p ?y .
   ?p a owl:SymmetricProperty .
}
=> 
{
   ?y ?p ?x .
} .
{
   ?x ?p ?y .
   ?p a owl:AsymmetricProperty .
   ?y ?p ?x .
}
=> false .
{
   ?x ?p ?y .
   ?p a owl:TransitiveProperty .
   ?y ?p ?z .
}
=> 
{
   ?x ?p ?z .
} .
{
   ?x ?p1 ?y .
   ?p1 rdfs:subPropertyOf ?p2 .
}
=> 
{
   ?x ?p2 ?y .
} .
{
   ?x ?p1 ?y .
   ?y ?p2 ?z .
   ?p2 owl:propertyChainAxiom ?n .
   ?n rdf:first ?p1 ;
       rdf:rest ?n2 .
   ?n2 rdf:first ?p2 .
}
=> 
{
   ?x ?p2 ?z .
} .
{
   ?x ?p1 ?y .
   ?p1 owl:equivalentProperty ?p2 .
}
=> 
{
   ?x ?p2 ?y .
} .
{
   ?x ?p2 ?y .
   ?p1 owl:equivalentProperty ?p2 .
}
=> 
{
   ?x ?p1 ?y .
} .
{
   ?x ?p2 ?y ;
       ?p1 ?y .
   ?p1 owl:propertyDisjointWith ?p2 .
}
=> false .
{
   ?x ?p1 ?y .
   ?p1 owl:inverseOf ?p2 .
}
=> 
{
   ?y ?p2 ?x .
} .
{
   ?x ?p2 ?y .
   ?p1 owl:inverseOf ?p2 .
}
=> 
{
   ?y ?p1 ?x .
} .
{
   ?x owl:sourceIndividual ?i1 ;
       owl:assertionProperty ?p ;
       owl:targetIndividual ?i2 .
   ?i1 ?p ?i2 .
}
=> false .
{
   ?x owl:sourceIndividual ?i ;
       owl:assertionProperty ?p ;
       owl:targetValue ?lt .
   ?i ?p ?lt .
}
=> false .
{
   ?x a owl:Nothing .
}
=> false .
{
   ?x a ?c1 , ?c2 .
   ?c1 owl:complementOf ?c2 .
}
=> false .
{
   ?x owl:someValuesFrom ?y ;
       owl:onProperty ?p .
   ?u ?p ?v .
   ?v a ?y .
}
=> 
{
   ?u a ?x .
} .
{
   ?x owl:someValuesFrom owl:Thing ;
       owl:onProperty ?p .
   ?u ?p ?v .
}
=> 
{
   ?u a ?x .
} .
{
   ?x owl:onProperty ?p ;
       owl:allValuesFrom ?y .
   ?u a ?x ;
       ?p ?v .
}
=> 
{
   ?v a ?y .
} .
{
   ?x owl:onProperty ?p ;
       owl:hasValue ?y .
   ?u a ?x .
}
=> 
{
   ?u ?p ?y .
} .
{
   ?x owl:onProperty ?p ;
       owl:hasValue ?y .
   ?u ?p ?y .
}
=> 
{
   ?u a ?x .
} .
{
   ?x owl:onProperty ?p ;
       owl:maxCardinality "0"^^xsd:nonNegativeInteger .
   ?u a ?x ;
       ?p ?y .
}
=> false .
{
   ?x owl:onProperty ?p ;
       owl:maxCardinality "1"^^xsd:nonNegativeInteger .
   ?u a ?x ;
       ?p ?y1 , ?y2 .
}
=> 
{
   ?y1 owl:sameAs ?y2 .
} .
{
   ?x owl:onProperty ?p ;
       owl:maxQualifiedCardinality "0"^^xsd:nonNegativeInteger ;
       owl:onClass ?c .
   ?y a ?c .
   ?u a ?x ;
       ?p ?y .
}
=> false .
{
   ?x owl:onProperty ?p ;
       owl:maxQualifiedCardinality "0"^^xsd:nonNegativeInteger ;
       owl:onClass owl:Thing .
   ?u a ?x ;
       ?p ?y .
}
=> false .
{
   ?x owl:onProperty ?p ;
       owl:maxQualifiedCardinality "1"^^xsd:nonNegativeInteger ;
       owl:onClass ?c .
   ?y1 a ?c .
   ?y2 a ?c .
   ?u a ?x ;
       ?p ?y1 , ?y2 .
}
=> 
{
   ?y1 owl:sameAs ?y2 .
} .
{
   ?x owl:onProperty ?p ;
       owl:maxQualifiedCardinality "1"^^xsd:nonNegativeInteger ;
       owl:onClass owl:Thing .
   ?u a ?x ;
       ?p ?y1 , ?y2 .
}
=> 
{
   ?y1 owl:sameAs ?y2 .
} .
{
   ?x a ?c1 .
   ?c1 rdfs:subClassOf ?c2 .
}
=> 
{
   ?x a ?c2 .
} .
{
   ?x a ?c1 .
   ?c1 owl:equivalentClass ?c2 .
}
=> 
{
   ?x a ?c2 .
} .
{
   ?x a ?c2 .
   ?c1 owl:equivalentClass ?c2 .
}
=> 
{
   ?x a ?c1 .
} .
{
   ?x a ?c1 , ?c2 .
   ?c1 owl:disjointWith ?c2 .
}
=> false .
{
   ?c a owl:Class .
}
=> 
{
   owl:Nothing rdfs:subClassOf ?c .
   ?c rdfs:subClassOf ?c , owl:Thing ;
       owl:equivalentClass ?c .
} .
{
   ?c1 rdfs:subClassOf ?c2 .
   ?c2 rdfs:subClassOf ?c3 .
}
=> 
{
   ?c1 rdfs:subClassOf ?c3 .
} .
{
   ?c1 owl:equivalentClass ?c2 .
}
=> 
{
   ?c1 rdfs:subClassOf ?c2 .
   ?c2 rdfs:subClassOf ?c1 .
} .
{
   ?c1 rdfs:subClassOf ?c2 .
   ?c2 rdfs:subClassOf ?c1 .
}
=> 
{
   ?c1 owl:equivalentClass ?c2 .
} .
{
   ?p a owl:ObjectProperty .
}
=> 
{
   ?p rdfs:subPropertyOf ?p ;
       owl:equivalentProperty ?p .
} .
{
   ?p a owl:DatatypeProperty .
}
=> 
{
   ?p rdfs:subPropertyOf ?p ;
       owl:equivalentProperty ?p .
} .
{
   ?p2 rdfs:subPropertyOf ?p3 .
   ?p1 rdfs:subPropertyOf ?p2 .
}
=> 
{
   ?p1 rdfs:subPropertyOf ?p3 .
} .
{
   ?p1 owl:equivalentProperty ?p2 .
}
=> 
{
   ?p2 rdfs:subPropertyOf ?p1 .
   ?p1 rdfs:subPropertyOf ?p2 .
} .
{
   ?p2 rdfs:subPropertyOf ?p1 .
   ?p1 rdfs:subPropertyOf ?p2 .
}
=> 
{
   ?p1 owl:equivalentProperty ?p2 .
} .
{
   ?p rdfs:domain ?c1 .
   ?c1 rdfs:subClassOf ?c2 .
}
=> 
{
   ?p rdfs:domain ?c2 .
} .
{
   ?p2 rdfs:domain ?c .
   ?p1 rdfs:subPropertyOf ?p2 .
}
=> 
{
   ?p1 rdfs:domain ?c .
} .
{
   ?p rdfs:range ?c1 .
   ?c1 rdfs:subClassOf ?c2 .
}
=> 
{
   ?p rdfs:range ?c2 .
} .
{
   ?p2 rdfs:range ?c .
   ?p1 rdfs:subPropertyOf ?p2 .
}
=> 
{
   ?p1 rdfs:range ?c .
} .
{
   ?p1 rdfs:subPropertyOf ?p2 .
   ?c1 owl:onProperty ?p1 ;
       owl:hasValue ?i .
   ?c2 owl:onProperty ?p2 ;
       owl:hasValue ?i .
}
=> 
{
   ?c1 rdfs:subClassOf ?c2 .
} .
{
   ?y1 rdfs:subClassOf ?y2 .
   ?c1 owl:someValuesFrom ?y1 ;
       owl:onProperty ?p .
   ?c2 owl:someValuesFrom ?y2 ;
       owl:onProperty ?p .
}
=> 
{
   ?c1 rdfs:subClassOf ?c2 .
} .
{
   ?p1 rdfs:subPropertyOf ?p2 .
   ?c1 owl:someValuesFrom ?y ;
       owl:onProperty ?p1 .
   ?c2 owl:someValuesFrom ?y ;
       owl:onProperty ?p2 .
}
=> 
{
   ?c1 rdfs:subClassOf ?c2 .
} .
{
   ?y1 rdfs:subClassOf ?y2 .
   ?c1 owl:onProperty ?p ;
       owl:allValuesFrom ?y1 .
   ?c2 owl:onProperty ?p ;
       owl:allValuesFrom ?y2 .
}
=> 
{
   ?c1 rdfs:subClassOf ?c2 .
} .
{
   ?p1 rdfs:subPropertyOf ?p2 .
   ?c1 owl:onProperty ?p1 ;
       owl:allValuesFrom ?y .
   ?c2 owl:onProperty ?p2 ;
       owl:allValuesFrom ?y .
}
=> 
{
   ?c2 rdfs:subClassOf ?c1 .
} .
`;
