---
layout: post
title: "Waarom ook jij moet beginnen met big data"
category: opinions
---

In de vroege jaren van Lifely kregen we sporadisch de vraag van klanten: ‘Wat is big data?’ Waarop ik telkens antwoorden met: ‘Voordat we het over big data gaan hebben, wil ik eerst praten over small data.’ Want welke data leg je al vast? En hoe structureer je dat? En hoe zorg je ervoor dat je datastroom op gang komt? Je kan data tenslotte pas analyseren als je het hebt! Ondertussen hebben onze klanten hun data aardig op orde en kunnen we het hebben over big data. Laten we beginnen bij het begin.

### Wat is big data?
Er zijn meerdere definities van big data, ik houd van de brede uitleg van Bernard Marr: “The term “Big Data” refers to the collection of _all types_(red) of data and our ability to use it to our advantage across a wide range of areas, including business”. Oftewel: we willen datapunten verzamelen, en we willen iets nieuws leren uit die verzameling van datapunten.

### Voorbeeld: Parkeerplaatsen P+R Amsterdam
Stel, je gaat parkeren op een P+R plaats in Amsterdam. Als je hier gebruik van maakt wil je natuurlijk wel van te voren kunnen zien of er daadwerkelijk plek is, iets waar Gemeente Amsterdam ook over heeft nagedacht. Via [deze website](https://penr.stachanov.com/penr/currentAvailability/index) zie je op de minuut nauwkeurig hoeveel plekken er nog vrij zijn en/of een parkeerplaats open of gesloten is.

Dat is natuurlijk mooi, maar de tabel zegt alleen iets over nu, niets over het verleden of de toekomst. Door deze dynamische gegevens van de website elke minuut van de dag vast te leggen en op een grote hoop te gooien creëren we onze eigen “big data”. Om je een beter beeld te geven hebben we met de opensource database Influx DB en visualisatie-tool Grafana een dashboard ontwikkeld dat “big data” verzamelt én visualiseert.

### Big data analyse 

Zoals je in de afbeelding ziet kunnen we oorzaken en gevolgen zoeken uit de data die we we de afgelopen periode hebben verzameld. Je ziet nu bijvoorbeeld dat er elke dag een sterke verandering is na 10 uur en al snel de plekken weg zijn. Dat heeft natuurlijk te maken met het goedkope P+R tarief na 10 uur. Je ziet ook dat er tussen 12.00 en 16.00 geen plaatsen meer over zijn. Op het moment dat je het beleid aanpast, door bijvoorbeeld de prijs op een specifieke hotspot te verhogen of capaciteit uit te breiden zou je aan de hand van de grafiek kunnen meten of het beleid het gewenste effect heeft gehad.

Uit slechts vijf triviale getallen uit een databron kan je al een hele sloot aan informatie halen en analyseren. Dit is voor mij de belichaming van big data. En leuker nog, dit is iets dat iedereen met een databron kan. Je kan net zo makkelijk naar open parkeerplaatsen kijken als naar het aantal gebruikers in je systeem, een hoeveelheid taken voor een bepaalde afdeling of de hoeveelheid afgeronde processen. Al is het alleen al om inzicht te krijgen, nog voordat je beleid aanpast en de resultaten kan toetsen!

Tot zover een eerste interpretatie van big data en de een klein voorbeeld van de mogelijkheden, en dan hebben we het nog niet eens over geautomatiseerde trendherkenning en machine learning gehad. In een volgend artikel ga ik hier nog dieper op in. Blijf Lifely daarom volgen en houd onze kennispagina in de gaten. Benieuwd naar de toepassingen van timeseries, big data en trendherkenning in jouw systeem? Maak snel een afspraak om eens te sparren via peter@lifely.nl 
