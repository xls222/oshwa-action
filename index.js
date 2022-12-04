const core = require('@actions/core');
const oshwa = require('./oshwa');

async function main() {
  // consts
  const token = core.getInput('token');
  const url = core.getInput('url');
  // inputs from action
  const payload = {
    responsiblePartyType: core.getInput('responsiblePartyType'),
    responsibleParty: core.getInput('responsibleParty'),
    bindingParty: core.getInput('bindingParty'),
    country: core.getInput('country'),
    streetAddress1: core.getInput('streetAddress1'),
    streetAddress2: core.getInput('streetAddress2'),
    city: core.getInput('city'),
    state: core.getInput('state'),
    postalCode: core.getInput('postalCode'),
    privateContact: core.getInput('privateContact'),
    publicContact: core.getInput('publicContact'),
    projectName: core.getInput('projectName'),
    projectWebsite: core.getInput('projectWebsite'),
    projectVersion: core.getInput('projectVersion'),
    previousVersions: core.getInput('previousVersions'),
    projectDescription: core.getInput('projectDescription'),
    primaryType: core.getInput('primaryType'),
    additionalType: core.getInput('additionalType'),
    projectKeywords: core.getInput('projectKeywords'),
    citations: core.getInput('citation'),
    documentationUrl: core.getInput('documentationUrl'),
    availableFileFormat: core.getInput('availableFileFormat'),
    hardwareLicense: core.getInput('hardwareLicense'),
    softwareLicense: core.getInput('softwareLicense'),
    documentationLicense: core.getInput('documentationLicense'),
    noCommercialRestriction: core.getInput('noCommercialRestriction'),
    explanationNcr: core.getInput('explanationNcr'),
    noDocumentationRestriction: core.getInput('noDocumentationRestriction'),
    explanationNdr: core.getInput('explanationNdr'),
    openHardwareComponents: core.getInput('openHardwareComponents'),
    explanationOhwc: core.getInput('explanationOhwc'),
    creatorContribution: core.getInput('creatorContribution'),
    explanationCcr: core.getInput('explanationCcr'),
    noUseRestriction: core.getInput('noUseRestriction'),
    explanationNur: core.getInput('explanationNur'),
    redistributedWork: core.getInput('redistributedWork'),
    explanationRwr: core.getInput('explanationRwr'),
    noSpecificProduct: core.getInput('noSpecificProduct'),
    explanationNsp: core.getInput('explanationNsp'),
    noComponentRestriction: core.getInput('noComponentRestriction'),
    explanationNor: core.getInput('explanationNor'),
    technologyNeutral: core.getInput('technologyNeutral'),
    explanationTn: core.getInput('explanationTn'),
    certificationMarkTerms: {
      accurateContactInformation: {
        term: "I have provided OSHWA with accurate contact information, recognize that all official communications from OSHWA will be directed to that contact information, and will update that contact information as necessary.",
        agreement: true
      },
      complianceWithOfficialCertificationGuidelines: {
        term: "I will only use the certification mark in compliance with official certification guidelines.",
        agreement: true
      },
      oshwaCertificationMark: {
        term: "I acknowledge that all right, title, and interest in the certification mark remains with OSHWA.",
        agreement: true
      },
      violationsEnforcement: {
        term: "I acknowledge that OSHWA has the right to enforce violations of the use of the mark. This enforcement may involve financial penalties for misuse in bad faith.",
        agreement: true
      },
      responsibility: {
        term: "I have the ability to bind those responsible for the certified item to this agreement.",
        agreement: true
      }
    },
    explanationCertificationTerms: core.getInput('explanationCertificationTerms'),
    relationship: core.getInput('relationship'),
    agreementTerms: core.getInput('agreementTerms'),
    parentName: core.getInput('parentName')
  };

  try {
    const response = await oshwa.post_project(url, token, JSON.stringify(payload));
    console.log(response);

    if (response.status >= 400) {
      core.setFailed(`HTTP request failed with status code: ${response.status}`);
    } else {
      core.setOutput('response', response.res);
    }
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
}

main();
