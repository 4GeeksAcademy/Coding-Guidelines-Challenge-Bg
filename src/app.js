const greeting = "Hello World";
const pronouns = ["The", "our"];
const adjectives = ["great", "big"];
const nouns = ["Jogger", "racoon"];

function printGreeting() {
  console.log(greeting);
}

function generateDomain(pronoun, adjective, noun) {
  return pronoun + adjective + noun + ".com";
}

function generateDomains() {
  const domains = [];

  pronouns.forEach(pronoun => {
    adjectives.forEach(adjective => {
      nouns.forEach(noun => {
        domains.push(generateDomain(pronoun, adjective, noun));
      });
    });
  });

  return domains;
}

printGreeting();

const domainList = generateDomains();
console.log(domainList);
