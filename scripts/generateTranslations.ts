import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = 'AIzaSyDgyWwwmHOROsPZclCm-LGzZs_uoYNhVDk';
const LANGUAGES = [
    'es', 'fr', 'pt', 'de', 'ar', 'hi', 'bn', 'zh', 'ja',
    'id', 'tr', 'vi', 'ko', 'ru', 'it', 'pl', 'th', 'tl'
];

const SOURCE_FILE = path.join(__dirname, '../src/i18n/locales/en.json');
const OUTPUT_DIR = path.join(__dirname, '../src/i18n/locales');

async function translateText(text: string, targetLanguage: string): Promise<string> {
    if (!text || text.trim() === '') return text;
    try {
        const response = await axios.post(
            `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
            {
                q: text,
                target: targetLanguage,
                source: 'en',
            }
        );
        return response.data.data.translations[0].translatedText;
    } catch (error: any) {
        console.error(`Error translating to ${targetLanguage}:`, error.response?.data || error.message);
        return text;
    }
}

async function translateObject(obj: any, targetLanguage: string): Promise<any> {
    if (typeof obj === 'string') {
        return await translateText(obj, targetLanguage);
    } else if (Array.isArray(obj)) {
        const translatedArray = [];
        for (const item of obj) {
            translatedArray.push(await translateObject(item, targetLanguage));
        }
        return translatedArray;
    } else if (typeof obj === 'object' && obj !== null) {
        const translatedObj: any = {};
        for (const key in obj) {
            translatedObj[key] = await translateObject(obj[key], targetLanguage);
        }
        return translatedObj;
    }
    return obj;
}

async function main() {
    const sourceData = JSON.parse(fs.readFileSync(SOURCE_FILE, 'utf8'));

    for (const lang of LANGUAGES) {
        console.log(`Translating to ${lang}...`);
        const translatedData = await translateObject(sourceData, lang);
        const outputPath = path.join(OUTPUT_DIR, `${lang}.json`);
        fs.writeFileSync(outputPath, JSON.stringify(translatedData, null, 2));
        console.log(`Saved ${lang}.json`);
    }
    console.log('All translations completed!');
}

main().catch(console.error);
