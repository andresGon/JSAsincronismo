const doSomenthingAsync = () => {
    return new Promise( (resolve,reject) => {
        (true)
            ? setTimeout( () => resolve('Do something Async') , 3000)
            : reject(new Error('Test error'))
    });
}


const doSomenthing = async () => {
    const someThing = await doSomenthingAsync();
    console.log(someThing);
}


console.log('Before');
doSomenthing();
console.log('After');


const anotherFunction = async () => {
    try{
        const something = await doSomenthingAsync();
        console.log(something);
    } catch (error){
        console.error(error)
    }
}


console.log('Before 1');
anotherFunction();
console.log('After 1');
