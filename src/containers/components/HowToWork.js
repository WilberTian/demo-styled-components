import React from 'react';

const logArgs = (...args) => {
    console.log(...args);
};

const execFuncArgs = (...args) => {
    args.forEach((arg) => {
        if (typeof arg === 'function') {
            arg();
        }
    });
};

const HowToWork = () => {
    console.log('-----------------------------------------------------------------------------------\n');

    console.log(`
        logArgs('a', 'b')
    `);
    logArgs('a', 'b');

    console.log('\n');

    console.log(`
        logArgs\`\`
    `);
    /* eslint-disable no-unused-expressions */
    logArgs``;
    /* eslint-enable no-unused-expressions */

    console.log('\n');

    console.log(`
        logArgs\`I like pizza\`
    `);
    /* eslint-disable no-unused-expressions */
    logArgs`I like pizza`;
    /* eslint-enable no-unused-expressions */

    console.log('\n');

    console.log(`
        const favoriteFood = 'pizza';
        logArgs(\`I like \${favoriteFood}.\`);
    `);
    let favoriteFood = 'pizza';
    logArgs(`I like ${favoriteFood}.`);

    console.log('\n');

    console.log(`
        const favoriteFood = 'pizza';
        logArgs\`I like \${favoriteFood}.\`;
    `);
    favoriteFood = 'pizza';
    /* eslint-disable no-unused-expressions */
    logArgs`I like ${favoriteFood}.`;
    /* eslint-enable no-unused-expressions */

    console.log('\n');

    console.log(`
        logArgs(\`Test \${() => console.log('test')}\`);
    `);
    logArgs(`Test ${() => { console.log('test'); }}`);

    console.log('\n');

    console.log(`
        logArgs\`Test \${() => console.log('test')}\`
    `);
    /* eslint-disable no-unused-expressions */
    logArgs`Test ${() => { console.log('test'); }}`;
    /* eslint-enable no-unused-expressions */


    console.log('\n');

    console.log(`
        execFuncArgs('a', 'b')
    `);
    execFuncArgs('a', 'b');

    console.log('\n');

    console.log(`
        execFuncArgs(() => { console.log('this is a function') })
    `);
    execFuncArgs(() => { console.log('this is a function'); });

    console.log('\n');

    console.log(`
        execFuncArgs('a', () => { console.log('another one') })
    `);
    execFuncArgs('a', () => { console.log('another one'); });

    console.log('\n');

    console.log(`
        execFuncArgs\`Hi, \${() => { console.log('Executed!') }}\`
    `);
    /* eslint-disable no-unused-expressions */
    execFuncArgs`Hi, ${() => { console.log('Executed!'); }}`;
    /* eslint-enable no-unused-expressions */

    console.log('-----------------------------------------------------------------------------------\n');
    return (
        <div>
            Open the console to check the result
        </div>
    );
};

export default HowToWork;
