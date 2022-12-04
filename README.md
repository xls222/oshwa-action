# OSHWA Action [![Test Status](https://github.com/nerdyscout/oshwa-action/workflows/Test/badge.svg)](https://github.com/nerdyscout/oshwa-action/actions)

> A GitHub Action to make a web request to the [API](https://certificationapi.oshwa.org/documentation) of [OSHWA](https://www.oshwa.org/). Supports currently only POST to project endpoint.

## Usage

### post project

```yaml
on:
  release:
    types: [published]

env:
  REPOSITORY_NAME: ${{ github.event.repository.name }}

jobs:
  certificate:
    runs-on: ubuntu-latest
    name: certificate OSHWA project
    steps:
    - uses: nerdyscout/oshwa-action@main
      with:
        token: ${{ secrets.OSHWA_TOKEN }}
        responsiblePartyType: "Individual"
        responsibleParty: ${{ github.repository_owner }}
        bindingParty: ""
        country: ""
        projectName: ${{ env.REPOSITORY_NAME }}
        projectWebsite: "https://${{ github.repository_owner }}.github.io/${{ env.REPOSITORY_NAME }}"
        projectVersion: ${{ github.ref_name }}
      #  previousVersions: ["US000000","US000001"]
        projectDescription: ""
        primaryType: "Electronics"
        documentationUrl: "https://github.com/${{ github.repository }}/docs"
        hardwareLicense: "CERN"
        softwareLicense: "GPL"
        documentationLicense: "CC BY"
        noCommercialRestriction: true
        noDocumentationRestriction: true
        openHardwareComponents: true
        creatorContribution: true
        noUseRestriction: true
        redistributedWork: true
        noSpecificProduct: true
        noComponentRestriction: true
        technologyNeutral: true
        CertificationMarkTerms: {'accurateContactInformation':{},'complianceWithOfficialCertificationGuidelines': {},'oshwaCertificationMark': {},'violationsEnforcement': {},'responsibility': {'term': 'I have the ability to bind those responsible for the certified item to this agreement.','agreement': true}}
        relationship: "self"
        agreementTerms: true
        parentName: ${{ github.repository_owner }}
```

## Inputs

| Parameter                       | Required | Defaults | Description                                      |
| ------------------------------- | -------- | -------- | ------------------------------------------------ |
| `url`                           | `true`   | `https://certificationapi.oshwa.org/api/` | API URL         |
| `token`                         | `true`   |          | OSHWA API Key                                    |
| `responsiblePartyType`          | `true`   |          | Responsible party type. Must be either "Individual", "Company", or "Organization". |
| `responsibleParty`              | `true`   | `$GITHUB_REPOSITORY_OWNER` | Name of Individual, Company, or Organization Responsible for the Certified Item. |
| `bindingParty`                  | `true`   |          | If not an Individual, name of Individual with Authority to Bind the Company or Organization. Required only if responsiblePartyType is not "Individual". |
| `country`                       | `true`   |          |                                                  |
| `streetAddress1`                | `false`  |          |                                                  |
| `streetAddress2`                | `false`  |          |                                                  |
| `city`                          | `false`  |          |                                                  |
| `state`                         | `false`  |          |                                                  |
| `postalCode`                    | `false`  |          |                                                  |
| `privateContact`                | `false`  |          |                                                  |
| `publicContact`                 | `false`  |          |                                                  |
| `projectName`                   | `true`   |          |                                                  |
| `projectWebsite`                | `false`  |          |                                                  |
| `projectVersion`                | `false`  |          |                                                  |
| `previousVersions`              | `false`  |          | An array of OSHWA UIDs                           |
| `projectDescription`            | `false`  |          |                                                  |
| `primaryType`                   | `true`   |          | Primary project type.                            |
| `additionalType`                | `false`  |          | Additional project types.                        |
| `projectKeywords`               | `false`  |          | Additional searchable keywords                   |
| `citation`                      | `false`  |          | If the project incorporates or builds upon other open projects that are not currently certified by OSHWA, this field can be used to cite those projects. |
| `documentationUrl`              | `false`  |          | URL for project documentation                    | 
| `availableFileFormat`           | `false`  |          | All project documentation and design files are available in the preferred format for making changes. |
| `hardwareLicense`               | `true`   |          |                                                  |
| `softwareLicense`               | `true`   |          |                                                  |
| `documentationLicense`          | `true`   |          |                                                  |
| `noCommercialRestriction`       | `true`   | `false`  | The project is licensed in a way to allow for modifications and derivative works without commercial restriction. |
| `explanationNcr`                | `true`   | `""`     | Explanation is required if `noCommercialRestriction` is false. |
| `noDocumentationRestriction`    | `true`   | `false`  | There is no restriction within my control to selling or giving away the project documentation. |
| `explanationNdr`                | `true`   | `""`     | Explanation is required if `noDocumentationRestriction` is false. |
| `openHardwareComponents`        | `true`   | `false`  | Where possible, I have chosen to use components in my hardware that are openly licensed. |
| `explanationOhwc`               | `true`   | `""`     | Explanation is required if `openHardwareComponents` is false. |
| `creatorContribution`           | `true`   | `false`  | I understand and comply with the "Creator Contribution requirement," explained in the Requirements for Certification |
| `explanationCcr`                | `true`   | `""`     | Explanation is required if `creatorContribution` is false. |
| `noUseRestriction`              | `true`   | `false`  | There is no restriction on the use by persons or groups, or by the field of endeavor. |
| `explanationNur`                | `true`   | `""`     | Explanation is required if `noUseRestriction` is false. |
| `redistributedWork`             | `true`   | `false`  | The rights granted by any license on the project applies to all whom the work is redistributed to. |
| `explanationRwr`                | `true`   | `""`     | Explanation is required if `redistributedWork` is false. |
| `noSpecificProduct`             | `true`   | `false`  | The rights granted under any license on the project do not depend on the licensed work being part of a specific product. |
| `explanationNsp`                | `true`   | `""`     | Explanation is required if `noSpecificProduct` is false. |
| `noComponentRestriction`        | `true`   | `false`  | The rights granted under any license on the project do not restrict other hardware or software, for example by |
| `explanationNor`                | `true`   | `""`     | Explanation is required if `noComponentRestriction` is false. |
| `technologyNeutral`             | `true`   | `false`  | The rights granted under any license on the project are technology neutral. |
| `explanationTn`                 | `true`   | `""`     | Explanation is required if `technologyNeutral` is false. |
| `CertificationMarkTerms`        | `true`   |          | Certification Mark Terms                                 |
| `explanationCertificationTerms` | `true`   | `""`     | Explanation for certification mark terms                 |
| `relationship`                  | `true`   | `"self"` |                                                          |
| `agreementTerms`                | `true`   | `true`   | Agreement to terms                                       |
| `parentName`                    | `true`   |          | Parent name                                              |

## Outputs

Output format: `JSON`

```json
{
  "status": 200,
  "statusText": "OK",
  "headers":{...},
  "config":{},
  "request":{},
  "data":
  {
    "id": "US000001",
    "responsibleParty": "Example Company Name",
    "country": "United States of America",
    "publicContact": "contact@example.com",
    "projectName": "My Open Source Project",
    "projectWebsite": "https://example.com",
    "projectVersion": 1,
    "previousVersions": [ "US000000" ],
    "projectDescription": "Open source project description",
    "primaryType": "Electronics",
    "additionalType": [ "3D Printing" ],
    "projectKeywords": [ "electronics" ],
    "citations": [ [Object] ],
    "documentationUrl": "https://example.com",
    "hardwareLicense": "Other",
    "softwareLicense": "No software",
    "documentationLicense": "Other",
    "certificationDate": "YYYY-MM-DDTHH:MM-SS:00"
  } 
} 
```

## License

[MIT](LICENSE)
