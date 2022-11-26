/*
//async
console.log('person1:shows ticket');
console.log('person2:shows ticket');
const promisewifebringingtkt=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});
promisewifebringingtkt.then((t)=>{
    console.log(`person3: shows ${t}`);

});

console.log('person4:shows ticket');


//async-2
const getpopcorn=promisewifebringingtkt.then((t)=>{
    console.log('husband:we should go in');
    console.log('wife: no im hungry');
    return Promise((resolve,reject)=>{
        resolve(` got ${t} and popcorn`);
    });
});
getpopcorn.then((t)=>{
    console.log(t);
});


//async-3
const getpopcorn=promisewifebringingtkt.then((t)=>{
    console.log('wife: i got the ticket');
    console.log('husband:we should go in');
    console.log('wife: no im hungry');
    return new Promise((resolve,reject)=>{
        resolve(` got ${t} and popcorn`);
    });
});
const getbutter=getpopcorn.then((t)=>{
    console.log('husband:i got the popcorn');
    console.log('husband:we should go in');
    console.log('wife: no  i need butter on my popcorn');
    return new Promise((resolve,reject)=>resolve(` ${t} butter`))
});
getbutter.then((t)=>console.log(t));



//async-4
console.log('person1:shows ticket');
console.log('person2:shows ticket');
const premovie= async () =>'movie-time';
premovie().then((m)=>console.log(m));

console.log('person4:shows ticket');


*/
//ASYNC-AWAIT
console.log('person1:shows ticket');
console.log('person2:shows ticket');
const premovie = async () => {
    const promisewifebringingtickets = new Promise((resolve, reject) => 
    {
            setTimeout(() => resolve('ticket') ,3000)
    });

    const getpopcorn = new Promise((resolve,reject) => resolve(`popcorn`))

    const addbutter = new Promise((resolve,reject) => resolve(`butter`))

    let ticket= await promisewifebringingtickets;

    console.log(`wife: i got ${ticket}`);
    console.log('husband:we should go in');
    console.log('wife: no im hungry');

    let popcorn=await getpopcorn;
    console.log(`husband:i got the ${popcorn}`);
    console.log('husband:we should go in');
    console.log('wife: no  i need butter on my popcorn');

    let butter=await addbutter;
    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: do you want any thing more');
    console.log('wife: no its good to go to movie');
    console.log('husband:lets enjoy the show!');
    
    return ticket;
}
premovie().then((m)=>console.log(`person3:shows${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');

/*
//async-5(using promise.all)

const getpopcorn = new Promise((resolve,reject) => resolve(`popcorn`))

    const getbutter = new Promise((resolve,reject) => resolve(`butter`))

    const getColdDrinks = new Promise((resolve,reject) => resolve(`cooldrinks`))

    let ticket = await promisewifebringingtickets;
    
    let [popcorn, butter, coke] = await Promise.all([getpopcorn, getbutter, getColdDrinks])

    return ticket;
    
    
//try-catch(in case of error -no cinema ticket)
console.log('person 1 shows ticket');
console.log('person 2shows ticket');
 const premovie= async ()=>{
         const promisewifebrinticket=new Promise((resolve,reject)=>{
               setTimeout(()=>{
                  reject('ticket');
                  },3000)             })
             let ticket;
            try{
                 ticket=await promisewifebrinticket;
             }
             catch(e){
                    ticket='sad face because no cinema';
             }
             return ticket;
         }
         premovie().then((m)=>console.log(`person3:got ${m}`))
         */


/*

         function createPost(post) {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    posts.push(post);
        
                    const error = true;
        
                    if(!error) {
                        resolve("creationed a post")
                    } else {
                        reject('Error: something went wrong')
                    }
                },1000)
            });
        }
        
        function deletepost(){
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    if (posts.length > 0){
                        posts.pop()
                        resolve("deleted a post");
                    } else{
                        reject("Error: can't delete a post beacuse this are empty")
                    }
                },1000)
            })
        }
        
        const xyzposts = async(post) => {
            let create;
            try{
                create = await createPost(post);
            } catch(e) {
                create = e;
            }
            
            for(i=0; i<posts.length; i++){
                console.log(posts[i])
            }
        
            let deleting;
            try{
                deleting = await deletepost();
            } catch(e) {
                deleting = e;
            }
            return `${deleting} ${create}`;
            
        }
        
        xyzposts({title: "post3", body:"this is post3", CreatedAt: new Date()}).then((t) => console.log(t))
      */  