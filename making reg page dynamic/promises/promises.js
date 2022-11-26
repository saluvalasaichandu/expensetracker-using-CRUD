const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
]
function getposts(){
    setTimeout(()=>{
let output='';
posts.forEach((post,index)=>{
    output+=`<li>${post.title}</li>`
})
document.body.innerHTML=output;
    },1000)
}

function createpost(post){
    let promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
posts.push(post);
const error=false;
if(!error){
    resolve(`${posts[posts.length-1].title}`)
}else{
    reject('error:something went wrong')
}
    },2000)
})
    
return promise;
}
function activitytime(){
const userpromise= new Promise((resolve,reject)=>{
       setTimeout(()=>{
             resolve(new Date())
       },2000)
            })
            return userpromise;
        }
        
        const post3={title:'post three',body:'this is post three'}
        const post4={title:'post four',body:'this is post four'}
        
        Promise.all([createpost(post4),activitytime()]).then((values)=>{console.log(values)})
        .then(deletepost)
        .then(getposts)
function createpost1(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    posts.push(post);
    const error=false;
    if(!error){
        resolve()
    }else{
        reject('error:something went wrong')
    }
        },2000)
    })
    }

function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                posts.pop();
                resolve()
            }else{
                reject(' you cannot delete elements because array is empty')
            }
        },2000)
    })
}