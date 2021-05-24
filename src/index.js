import app from './app';
import '@babel/polyfill';

async function main() {
    await app.listen(5001);
    console.log('Server on port 5001');
};

main();