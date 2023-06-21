console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

const promiseWifeBringingTicks = new Promise((resolve,reject) => {
    setTimeout(() => resolve('ticket'),3000);
});

const getPopcorn =  new Promise ((resolve,reject) => resolve(`popcorn`));
const addButter =  new Promise ((resolve,reject) => resolve(`butter`));
const getColdDrinks  =  new Promise ((resolve,reject) => resolve(`ColdDrinks `));
const createPost = new Promise ((resolve,reject) => resolve(`post`));
const deletePost = new Promise ((resolve,reject) => resolve(`delete`));

let ticket = await promiseWifeBringingTicks;

    console.log('wife: i have `${tickets}`');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;
    console.log('husband: i got some `${popcorn}`');
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await addButter;
    console.log('husband: i got some ${butter} on popcorn');
    console.log('husband: anything else darling');
    console.log('wife:lets go we getting late');
    console.log('husband:thanku for remind');

    let coldDrinks = await getColdDrinks;
    console.log('husband: i got some `${ColdDrinks}`');
    console.log('husband: coldrink is so cold');
    console.log('wife: i need ColdDrinks with my popcorn');


    let post = await createPost;
    console.log('create a new post');
    console.log('create another post')

    let deletep = await deletePost;
    console.log('delete a new post');
    console.log('delete another post')

    return ticket;
}
preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');