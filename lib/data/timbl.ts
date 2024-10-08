export const data = `@prefix : <#>.
@prefix acl: <http://www.w3.org/ns/auth/acl#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix ldp: <http://www.w3.org/ns/ldp#>.
@prefix org: <http://www.w3.org/ns/org#>.
@prefix schema: <http://schema.org/>.
@prefix solid: <http://www.w3.org/ns/solid/terms#>.
@prefix space: <http://www.w3.org/ns/pim/space#>.
@prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix c33: <https://ddemers.solidcommunity.net/profile/card#>.
@prefix c34: <https://dickvangelder.solidcommunity.net/profile/card#>.
@prefix c43: <https://mats.inrupt.net/profile/card#>.
@prefix c44: <https://mz8i.solidcommunity.net/profile/card#>.
@prefix c45: <https://olange.solidcommunity.net/profile/card#>.
@prefix c46: <https://pietervaneverdingen.inrupt.net/profile/card#>.
@prefix c48: <https://stijntaelemans.inrupt.net/profile/card#>.
@prefix c49: <https://techny.inrupt.net/profile/card#>.
@prefix c50: <https://timojkankaanpaa.solidcommunity.net/profile/card#>.
@prefix c51: <https://ubernatural.inrupt.net/profile/card#>.
@prefix c52: <https://veronahe.inrupt.net/profile/card#>.
@prefix occup: <http://data.europa.eu/esco/occupation/>.
@prefix inr: <https://inrupt.com/>.
@prefix mit: <https://mit.edu/>.
@prefix ww: <https://www.cern.ch/>.
@prefix w: <https://www.oxfordmartin.ox.ac.uk/>.
@prefix c7: <https://bourgeoa.solidcommunity.net/profile/card#>.
@prefix c13: <https://karlhrichter.inrupt.net/profile/card#>.
@prefix c16: <https://megoth.inrupt.net/profile/card#>.
@prefix c47: <https://rubenverborgh.inrupt.net/profile/card#>.
@prefix c32: <https://angelo.veltens.org/profile/card#>.
@prefix skill: <http://data.europa.eu/esco/skill/>.
@prefix c8: <https://timea.solidcommunity.net/profile/card#>.
@prefix c39: <https://janschill.net/profile/card#>.
@prefix l: <https://www.w3.org/ns/iana/language-code/>.
@prefix wd: <http://www.wikidata.org/entity/>.
@prefix profi: <./>.
@prefix inb0: </inbox/>.
@prefix ti: </>.
@prefix c36: <https://dimou.solidcommunity.net/profile/card#>.
@prefix c40: <https://hindia.solidcommunity.net/profile/card#>.
@prefix c42: <https://janikv.solidcommunity.net/profile/card#>.
@prefix c53: <https://jenni.inrupt.net/profile/card#>.
@prefix c54: <https://jyj.solidcommunity.net/profile/card#>.
@prefix c: <https://vincentt.inrupt.net/profile/card#>.
@prefix c0: <https://acoburn.inrupt.net/profile/card#>.
@prefix c1: <https://csarven.inrupt.net/profile/card#>.
@prefix c2: <https://davi.inrupt.net/profile/card#>.
@prefix c3: <https://emmettownsend.inrupt.net/profile/card#>.
@prefix c4: <https://jackson.solidcommunity.net/profile/card#>.
@prefix c5: <https://jholleran.inrupt.net/profile/card#>.
@prefix c6: <https://johnb.inrupt.net/profile/card#>.
@prefix c9: <https://joshcollins.inrupt.net/profile/card#>.
@prefix c10: <https://justin.inrupt.net/profile/card#>.
@prefix c11: <https://kellyo.inrupt.net/profile/card#>.
@prefix c12: <https://khoward.inrupt.net/profile/card#>.
@prefix c14: <https://michielbdejong.inrupt.net/profile/card#>.
@prefix c15: <https://nseydoux.inrupt.net/profile/card#>.
@prefix c17: <https://oz.inrupt.net/profile/card#>.
@prefix c18: <https://sharonstrats.inrupt.net/profile/card#>.
@prefix c19: <https://solid.kjernsmo.net/profile/card#>.
@prefix c20: <https://solid.zwifi.eu/profile/card#>.
@prefix c21: <https://worrallp.inrupt.net/profile/card#>.

occup:6f7c1e84-8162-4c20-a575-b57ff624eef5 schema:name "taxi driver".

occup:7b1b5da8-573a-49bb-a38e-68725a949f4f schema:name "chief technology officer".

occup:e3229e40-f571-4b26-baca-29edc8fe313e schema:name "computer scientist".

occup:f2b15a0e-e65a-438a-affb-29b9d50b77d1 schema:name "software developer".

skill:6c870993-9341-438b-91c0-c7fe4f96d8f5 schema:name "apply strategic thinking".

skill:a72408af-b488-4ad4-801b-bbf16f7a7b57
schema:name "install blinds drive systems".
skill:a917fd91-866d-4ecf-a70e-894b755f9baf
schema:name "develop mechatronic test procedures".
skill:f28617ad-afdd-4041-814c-216153a38998
schema:name "analyse software specifications".
skill:f6868852-9bf6-4899-a5d6-5f9532fb877d
schema:name "design component interfaces".
wd:Q106746930 schema:name "Inrupt Inc."@en.

wd:Q10853538 schema:name "".

wd:Q16601665 schema:name "Principality of Masserano".

wd:Q34433 schema:name "University of Oxford"@en.

wd:Q42944 schema:name "CERN"@en.

wd:Q49108 schema:name "Massachusetts Institute of Technology"@en.

profi:card a foaf:PersonalProfileDocument; foaf:maker :me; foaf:primaryTopic :me.

:id1618591080534
    a solid:CurrentRole;
    schema:description
        "Technical strategic architecture for Inrupt. Leader of the Solid movement. Coordinate and contribute to Solid open source.";
    schema:startDate "2018-04-05"^^xsd:date;
    vcard:role "Cofounder and CTO";
    org:member :me;
    org:organization :id1619374832756;
    org:role occup:7b1b5da8-573a-49bb-a38e-68725a949f4f;
    solid:publicId wd:Q16601665 .
:id1618785166805
    a solid:CurrentRole;
    schema:description
        "The Decentralized Information Group (DIG) at MIT's Computer Science and Artificial Intelligence Laboratory (CSAIL) build all sorts of things using semantic web tech, and more recently started the Solid movement to allow people complete control of their data. ";
    schema:endDate "2021-04-30"^^xsd:date;
    schema:startDate "1994-09-01"^^xsd:date;
    vcard:role "Professor of Engineering";
    org:member :me;
    org:organization :id1620393169135;
    org:role occup:e3229e40-f571-4b26-baca-29edc8fe313e;
    solid:publicId wd:Q10853538 .
:id1619374832756
    a schema:Corporation;
    schema:name "Inrupt";
    schema:uri inr:;
    solid:publicId wd:Q106746930 .
:id1619434605326
vcard:role "Trainer"; solid:publicId skill:a917fd91-866d-4ecf-a70e-894b755f9baf.
:id1619436441183 vcard:role "skil2".

:id1619436866023
vcard:role ""; solid:publicId skill:f28617ad-afdd-4041-814c-216153a38998 .
:id1619530244336 solid:publicId l:en.

:id1619532839375 solid:publicId l:de.

:id1619532904680 solid:publicId l:fr.

:id1619532994614 solid:publicId l:it.

:id1619628182581
    a solid:CurrentRole;
    schema:description
        """Our Oxford Martin School funded Project on "Ethical Web and Data Architectures" researches Data Autonomy, Data Privacy, Algorithmic Accountability, and Data Sharing and is hiring.""";
    schema:startDate "2016-09-01"^^xsd:date;
    vcard:role "Prof of Computer Science and Student at Christ Church";
    org:member :me;
    org:organization :id1620413454476;
    org:role occup:e3229e40-f571-4b26-baca-29edc8fe313e.
:id1619628257057 solid:publicId skill:a72408af-b488-4ad4-801b-bbf16f7a7b57 .

:id1619628297228 solid:publicId l:ar.

:id1619628398581 solid:publicId l:de.

:id1620060965686
vcard:country-name "USA"; vcard:locality "Boston"; vcard:region "MA".
:id1620320324718 solid:publicId l:ar.

:id1620383393470
    a solid:CurrentRole;
    schema:endDate "1994-09-01"^^xsd:date;
    schema:startDate "1984-09-01"^^xsd:date;
    vcard:role "web inventor";
    org:member :me;
    org:organization :id1620431912972;
    org:role occup:f2b15a0e-e65a-438a-affb-29b9d50b77d1 .
:id1620393169135
    a schema:EducationalOrganization;
    schema:name "MIT";
    schema:uri mit:;
    schema:url <https://solidproject.org>;
    solid:publicId wd:Q49108 .
:id1620413454476
    a schema:EducationalOrganization;
    schema:name "University of Oxford";
    schema:uri w:ethical-web-and-data-architectures;
    solid:publicId wd:Q34433 .
:id1620431912972
    a schema:ResearchOrganization;
    schema:name "European Particle Physics Laboratory";
    schema:uri ww:;
    solid:publicId wd:Q42944 .
:id1620576947065 solid:publicId skill:f6868852-9bf6-4899-a5d6-5f9532fb877d.

:id1620576952960 solid:publicId skill:6c870993-9341-438b-91c0-c7fe4f96d8f5 .

:id1620660148956
    vcard:country-name "UK";
    vcard:locality "Oxford";
    vcard:postal-code "OX1 1DP";
    vcard:street-address "Christ Church, St Aldates".
:id1621523870701 a schema:Corporation; schema:name "University of Ghent  testing".

:id1643222712160 solid:publicId l:el.

:id1650058571308 org:member :me.

:me
    a schema:Person, foaf:Person;
    schema:knowsLanguage ( :id1619530244336 :id1619532904680 );
    schema:skills :id1619436866023, :id1620576947065, :id1620576952960;
    vcard:bday "1955-06-08"^^xsd:date;
    vcard:fn "Tim Berners-Lee";
    vcard:hasAddress :id1620060965686, :id1620660148956;
    vcard:hasPhoto
    <TBL%20by%20coz%20Inrupt%20blue.png>, <TBL%20by%20coz%20Inrupt%20blue.psd>;
    vcard:note
        "Pescatarian Allergic to crustaceans,    Invented the Web in 1989. Started W3C and co-founded WebFoundation. Now CTO at Inrupt and leading the Solid Project to give people control of their own data.  Lets re-enable the web as a creative and collaborative (and compassionate!) place of individual empowerment. Check out or Oxford Martin School project. ";
    vcard:organization-name "Inrupt";
    vcard:role "Cofounder and CTO";
    acl:trustedApp
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <http://localhost:3000>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://arquisoft.github.io>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://drive.verborgh.org>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://noeldemartin.github.io>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://penny.vincenttunru.com>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://solid.github.io>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://solidcommunity.net:8443>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://solidcommunity.net>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://solidos.solidcommunity.net>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://solidos.solidcommunity.net>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://solidproject.solidcommunity.net>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://test-pod.solidcommunity.net:8443>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://testingsolidos.solidcommunity.net>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://testingsolidos.solidcommunity.net>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://timbl.com>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://timbl.com>
            ],
            [
                acl:mode acl:Append, acl:Control, acl:Read, acl:Write;
                acl:origin <https://timbl.solidcommunity.net:8443>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://gallant-lewin-6da032.netlify.app>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://ibex.darcy.is>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://jeff-zucker.solidcommunity.net:8443>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://mellonscholarlycommunication.github.io>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://oxfordhcc.github.io>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://ramen.noeldemartin.com>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://timea.solidcommunity.net>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://umai.noeldemartin.com>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://vincenttunru.gitlab.io>
            ],
            [
                acl:mode acl:Append, acl:Read, acl:Write;
                acl:origin <https://vincenttunru.gitlab.io>
            ];
    ldp:inbox inb0:;
    org:member ( :id1617461235730 ), :id1617528994661, :id1617529080361;
    space:preferencesFile </settings/prefs.ttl>;
    space:storage ti:;
    solid:account ti:;
    solid:oidcIssuer <https://inrupt.net>;
    solid:preferredObjectPronoun "him";
    solid:preferredRelativePronoun "his";
    solid:preferredSubjectPronoun "he";
    solid:privateTypeIndex </settings/privateTypeIndex.ttl>;
    solid:profileHighlightColor "#a356f0"^^xsd:color;
    solid:publicTypeIndex </settings/publicTypeIndex.ttl>;
    foaf:knows
        c0:me, c32:me, c7:me, c1:me, c2:me, c33:me, c34:me, c36:me, c3:me,
        c40:me, c4:me, c42:me, c39:me, c53:me, c5:me, c6:me, c9:me, c10:me,
        c54:me, c13:me, c11:me, c12:me, c43:me, c16:me, c14:me, c44:me, c15:me,
        c45:me, c17:me, c46:me, c47:me, c18:me, c19:me, c20:me, c48:me, c49:me,
        c8:me, c50:me, c51:me, c52:me, c:me, c21:me;
    foaf:name "Timothy J Berners-Lee";
    foaf:nick "timbl".
l:ar schema:name "Arabic"@en.

l:de schema:name "Deutsch"@de, "German"@en.

l:el schema:name "Modern Greek"@en.

l:en schema:name "English"@en.

l:fr schema:name "French"@en.

l:it schema:name "italiano"@it.
`;
