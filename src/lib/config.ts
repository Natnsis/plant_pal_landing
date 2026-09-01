// Central place for the handful of project-specific values the landing page
// links to.

/** The PlantPal app repo — the star / "view source" target, and where
 *  releases (the downloadable APK) are published. */
export const GITHUB_URL = 'https://github.com/Natnsis/plant_pal_app';

/** The latest release page (always valid — GitHub lists the APK asset on it). */
export const RELEASE_PAGE = `${GITHUB_URL}/releases/latest`;

/** Direct download of the APK attached to the latest release.
 *
 *  `releases/latest/download/<asset>` always resolves to the newest
 *  release's asset with that exact filename, so this never needs bumping
 *  per version — as long as the uploaded asset stays named `PlantPal.apk`
 *  (that's what the v1.0.0 release uses). If you rename it, change here too. */
export const APK_URL = `${GITHUB_URL}/releases/latest/download/PlantPal.apk`;
export const APK_FILENAME = 'PlantPal.apk';

/** Keep in step with the app's pubspec version + the published release. */
export const APP_VERSION = '1.0.0';
export const APK_SIZE = '21 MB';
export const MIN_ANDROID = 'Android 8.0+';
