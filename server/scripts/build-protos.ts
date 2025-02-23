import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function buildProtos() {
    await execAsync('npx pbjs -t static-module -w commonjs -o proto/generated/protos.js proto/*.proto');
    await execAsync('npx pbts -o proto/generated/protos.d.ts proto/generated/protos.js');
}

buildProtos().catch(console.error);