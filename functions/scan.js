import fs from 'fs'
import path from 'path'
import addRecord from './addRecord.js';
const __dirname = path.resolve();
let directoryPath = path.join(__dirname, './domains/proj.sbs');

// proj.sbs

try {
    const files = fs.readdirSync(directoryPath).filter(file => file.endsWith('.js'));
    for (let file of files) {
        let filePath = '../' + path.join('./domains/proj.sbs', file).replace(/\\/g, "/");
        let i = await import(filePath);
        let name = file.replace('.js', '');
        for (let item of i.default.records) {
            let result = await addRecord('proj.sbs', name, item);
            if (result) {
                console.log(`Added ${name}.proj.sbs to Cloudflare DNS, ${item.type}`)
            } else {
                console.warn(`Failed to add ${name}.proj.sbs to Cloudflare DNS, ${item.type}`)
            }
        }
    }

} catch (e) {
    console.warn(e);
}
