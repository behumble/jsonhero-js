import fetch from "node-fetch";
// https://github.com/apihero-run/jsonhero-web#send-to-json-hero
const URL_JSONHERO = 'https://jsonhero.io';

/**
 * @param {*} input - JavaScript object (NOT a JSON string)
 * @returns JSON Hero URL
 */
export default async function toJsonHero(input) {
    const jsonString = JSON.stringify(input);
    const b64msg = Buffer.from(jsonString).toString("base64");
    const response = await fetch(
        `${URL_JSONHERO}/new?j=${b64msg}`,
        { redirect: "manual" }
    );
    const newPath = response.headers.get('location')
    return `${URL_JSONHERO}${newPath}`;
}
