export const loopTesting = ()=>{
    const array = [];
    for (let index = 0; index < 10_000_000; index++) {
        array.push(0)
    }
    console.time('classic loop')   //1
    for (let index = 0; index < 10_000_000; index++) {} 
    console.timeEnd('classic loop')

    console.time('for of loop')     //4
    for (const el of array) {}      
    console.timeEnd('for of loop')
  
    console.time('forEach loop')     //3
    array.forEach(()=>{})      
    console.timeEnd('forEach loop')

    console.time('while loop')      //2
    let i = 0;
    while(i<10_000_000){i++}            
    console.timeEnd('while loop')
}

const getData = async ()=>{
    const res =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await res.json()
    return json
}

export const promiseTesting = async () => {
    const number = 100;
    console.time('fetch/then')                                  
    for (let index = 0; index < number; index++) {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(() => {
            if(index === number - 1) console.timeEnd('fetch/then')
        })
    } 
    console.time('async/await')                                     //never
    for (let index = 0; index < number; index++) {
       const res =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
       const json = await res.json()
       if(index === number - 1) console.timeEnd('async/await')
    } 
    console.time('promise.all')
    const promises = []
    for (let index = 0; index < number; index++) {
        promises.push(getData())
    }
    Promise.all(promises).then(()=>console.timeEnd('promise.all'))
    
}
