console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => resolve('popcorn'));
  
  const getCandy =  new Promise((resolve, reject) => resolve('candy'));
  
   const getCoke =  new Promise((resolve, reject) => resolve('coke'));

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [ popcorn, candy, coke ] =
    await Promise.all([ getPopcorn, getCandy, getCoke  ]);

    console.log(`${popcorn}, ${candy}, ${coke}`);

  
  return ticket;
  
};