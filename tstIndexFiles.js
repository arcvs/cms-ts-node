import { readdir } from 'node:fs/promises';

async function main() {
    try {
        const files = await readdir("./");
        for (const file of files)
            console.log(file);
    } catch (err) {
        console.error(err);
    }
}

main()