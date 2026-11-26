# Changelog

## [2.2.1](https://github.com/Kystverket/styrbord/compare/styrbord-consent-v2.2.0...styrbord-consent-v2.2.1) (2026-11-26)


### Bug Fixes

* **consent:** ikonet på innstillingsknappen følger tekstfargen i mørk modus ([#425](https://github.com/Kystverket/styrbord/issues/425)) ([fa36ef6](https://github.com/Kystverket/styrbord/commit/fa36ef6293b27b79f9bd29e0a161c4cefd85b7af))

## [2.2.0](https://github.com/Kystverket/styrbord/compare/styrbord-consent-v2.1.0...styrbord-consent-v2.2.0) (2026-11-18)


### Features

* **base,kart,consent:** Designsystemet 1.24.0, styrbord-tokens 1.2.0 og egen Search ([#394](https://github.com/Kystverket/styrbord/issues/394)) ([cba92f8](https://github.com/Kystverket/styrbord/commit/cba92f8446f98b1cd8dc4c9aa123cba7e2026d78))

## [2.1.0](https://github.com/Kystverket/styrbord/compare/styrbord-consent-v2.0.0...styrbord-consent-v2.1.0) (2026-10-19)


### Features

* **consent:** make PostHog session replay consentable, clear storage, allow init options ([#338](https://github.com/Kystverket/styrbord/issues/338)) ([844d4e2](https://github.com/Kystverket/styrbord/commit/844d4e21ec48872347adf1908504f95dedc8c468)), closes [#331](https://github.com/Kystverket/styrbord/issues/331)

## [2.0.0](https://github.com/Kystverket/styrbord/compare/styrbord-consent-v1.0.1...styrbord-consent-v2.0.0) (2026-09-25)


### ⚠ BREAKING CHANGES

* **consent:** style.css no longer includes the Designsystemet theme. Styrbord apps: nothing to do. Apps without Styrbord: also import '@kystverket/styrbord-consent/theme.css'.

### Features

* **consent:** move design tokens out of style.css into opt-in theme.css ([#315](https://github.com/Kystverket/styrbord/issues/315)) ([89c8d60](https://github.com/Kystverket/styrbord/commit/89c8d60530ea9b1897a57b1b427e478bd6f87536))

## [1.0.1](https://github.com/Kystverket/styrbord/compare/styrbord-consent-v1.0.0...styrbord-consent-v1.0.1) (2026-09-23)


### Bug Fixes

* **consent:** adjust padding and positioning in ConsentBanner styles ([8cff45e](https://github.com/Kystverket/styrbord/commit/8cff45e16ee8efd0833c6dd1532325137d87ae79))

## 1.0.0 (2026-09-18)


### Features

* **consent:** Ny modul, consent, som gir verktøy for å vise en felles cookiebanner for tjenester ([#308](https://github.com/Kystverket/styrbord/issues/308)) ([e3eba74](https://github.com/Kystverket/styrbord/commit/e3eba7415cbf211240289815aee4657b1c843162))
