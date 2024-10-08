export const data = `@prefix log: <http://www.w3.org/2000/10/swap/log#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .


{
   ?uuu ?aaa ?yyy .
}
=> 
{
   ?aaa a rdf:Property .
} .
{
   ?aaa rdfs:domain ?xxx .
   ?uuu ?aaa ?yyy .
}
=> 
{
   ?uuu a ?xxx .
} .
{
   ?aaa rdfs:range ?xxx .
   ?uuu ?aaa ?vvv .
}
=> 
{
   ?vvv a ?xxx .
} .
{
   ?uuu ?aaa ?xxx .
}
=> 
{
   ?uuu a rdfs:Resource .
} .
{
   ?uuu ?aaa ?vvv .
}
=> 
{
   ?vvv a rdfs:Resource .
} .
{
   ?uuu rdfs:subPropertyOf ?vvv .
   ?vvv rdfs:subPropertyOf ?xxx .
}
=> 
{
   ?uuu rdfs:subPropertyOf ?xxx .
} .
{
   ?uuu a rdf:Property .
}
=> 
{
   ?uuu rdfs:subPropertyOf ?uuu .
} .
{
   ?aaa rdfs:subPropertyOf ?bbb .
   ?uuu ?aaa ?yyy .
}
=> 
{
   ?uuu ?bbb ?yyy .
} .
{
   ?uuu a rdfs:Class .
}
=> 
{
   ?uuu rdfs:subClassOf rdfs:Resource .
} .
{
   ?uuu rdfs:subClassOf ?xxx .
   ?vvv a ?uuu .
}
=> 
{
   ?vvv a ?xxx .
} .
{
   ?uuu a rdfs:Class .
}
=> 
{
   ?uuu rdfs:subClassOf ?uuu .
} .
{
   ?uuu rdfs:subClassOf ?vvv .
   ?vvv rdfs:subClassOf ?xxx .
}
=> 
{
   ?uuu rdfs:subClassOf ?xxx .
} .
{
   ?uuu a rdfs:ContainerMembershipProperty .
}
=> 
{
   ?uuu rdfs:subPropertyOf rdfs:member .
} .
{
   ?uuu a rdfs:Datatype .
}
=> 
{
   ?uuu rdfs:subClassOf rdfs:Literal .
} .
`;
