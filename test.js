const oshwa = require('./oshwa');

const url = 'https://my-json-server.typicode.com/nerdyscout/oshwa-action/';
const payload = { "responseponsiblePartyType": "Individual", "responseponsibleParty": "Company Name", "bindingParty": "Jane Doe", "country": "United States of America", "streetAddresponses1": "255 Pouros Circle", "streetAddresponses2": "Suite 123", "city": "Raleigh", "state": "NC", "postalCode": "27616", "privateContact": "jane@example.com", "publicContact": "jane.doe@example.com", "projectName": "My Open Source Project", "projectWebsite": "https://www.example.com", "projectVersion": "1.0", "previousVersions": ["US000236"], "projectDescription": "Lorem ipsum dolor sit amet.", "primaryType": "Electronics", "additionalType": ["3D Printing"], "projectKeywords": ["3D Printing", "electronics"], "citations": [{ "title": "First Citation", "url": "https://www.example.com" }], "documentationUrl": "https://www.example.com", "availableFileFormat": false, "hardwareLicense": "CERN", "softwareLicense": "Apache", "documentationLicense": "CC 0", "noCommercialresponsetriction": false, "explanationNcr": "Lorem ipsum dolor sit amet.", "noDocumentationresponsetriction": false, "explanationNdr": "Lorem ipsum dolor sit amet.", "openHardwareComponents": "false", "explanationOhwc": "Lorem ipsum dolor sit amet.", "creatorContribution": false, "explanationCcr": "Lorem ipsum dolor sit amet.", "noUseresponsetriction": false, "explanationNur": "Lorem ipsum dolor sit amet.", "redistributedWork": false, "explanationRwr": "Lorem ipsum dolor sit amet.", "noSpecificProduct": "false", "explanationNsp": "Lorem ipsum dolor sit amet.", "noComponentresponsetriction": false, "explanationNor": "Lorem ipsum dolor sit amet.", "technologyNeutral": false, "explanationTn": "Lorem ipsum dolor sit amet.", "certificationMarkTerms": { "accurateContactInformation": { "term": "I have provided OSHWA with accurate contact information, recognize that all official communications from OSHWA will be directed to that contact information, and will update that contact information as necessary.", "agreement": true } }, "explanationCertificationTerms": "Lorem ipsum dolor sit amet.", "relationship": "self", "agreementTerms": true, "parentName": "J Doe" };
const token = "";

test('oshwa get project', async () => {
  expect.assertions(2);
  const response = await oshwa.get_project(url, token, "US000001");

  console.log(response);

  expect(response.status).toBe(200);
  expect(response.data.id).toBe("US000001");
});

test('oshwa post project', async () => {
  expect.assertions(2);
  const response = await oshwa.post_project(url, token, payload);

  console.log(response);

  expect(response.status).toBe(201);
  expect(response.data.responseponsiblePartyType).toBe("Individual");
});
