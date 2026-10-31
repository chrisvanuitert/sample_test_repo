# CRA-Shield Test Repository

This is a test repository designed for validating the **CRA-Shield** EU Cyber Resilience Act compliance automation GitHub App.

## Included Scenarios
- Pinned vulnerable dependencies:
  - `lodash@4.17.15` (Prototype pollution / ReDoS)
  - `minimist@1.2.0` (CVE-2021-44906 Prototype pollution)
- Shift-left GitHub Checks testing
- In-PR exemption testing via `/cra-exempt` comments
