const txtInput = document.querySelector('.txtInput')
const menu = document.querySelector(".principal-nav");
const openMenuBtn = document.querySelector(".btn-open");
const openMenuBtn2 = document.querySelector(".btn-open-two");
const closedMenuBtn = document.querySelector(".btn-closed");
const tweet2 = document.querySelector(".content");
const eliminated = document.querySelector('.tieneClick');
const body = document.querySelector('#body-remove');


class Tweet {

    constructor(){
        // this.tweets = [];
        this.loadLocalStorage()
        
    }

    addTweet( sendTweet ){
        this.tweets.push(sendTweet);
        this.savedLocalStorage()
        console.log(this.savedLocalStorage())
    }   

    eliminatedTweets( id ) {
        this.tweets = this.tweets.filter( sendTweet => sendTweet.id != id);
        this.savedLocalStorage();
    }

    savedLocalStorage(){

        localStorage.setItem( 'tweet', JSON.stringify(this.tweets)  );
        

    }

    loadLocalStorage(){
        if( localStorage.getItem('tweet')){
            this.tweets = JSON.parse(localStorage.getItem('tweet'))
        }else{
            this.tweets = [];
        }
        
    }

    
    
}

class _Tweet{
    constructor( message ){
        this.message = message;
        this.hours = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.id = new Date().getTime();
        
        
    }
}




function toggleMenu() {
    menu.classList.toggle("menu_open");
}

openMenuBtn.addEventListener("click", toggleMenu);
openMenuBtn2.addEventListener("click", toggleMenu);
closedMenuBtn.addEventListener("click", toggleMenu);

const accounts = document.querySelector(".accounts");
const openAccount = document.querySelector(".secondary-img-footer")

function toggleMenutwo() {
    accounts.classList.toggle("accounts_open");
}

openAccount.addEventListener("click", toggleMenutwo)


const _todoTweet = new _Tweet();
const todoTweet = new Tweet();



const createTweet = ( tweet ) =>{
    const htmlTweet = `
            <section class="body" id="body-remove">
                <div class="perfil-img ">
                    <img src="https://i.postimg.cc/501RGqx2/buff-cat-montreal-canada-1.png" alt="perfil-img ">
                </div>
                <div class="body-content ">
                    <div class="body-content-names ">
                        <div>
                            <a href=" ">
                                <h3>Cat</h3>
                            </a>
                            <a href=" "> <span>@cat</span></a>
                            <span>${tweet.hours}:${tweet.minutes}h</span>
                        </div>

                        <div ><svg data-id="${tweet.id}"  viewBox="0 0 24 24 " aria-hidden="true ""><g><circle cx="5 " cy="12 " r="2 "></circle><circle cx="12 " cy="12 " r="2 "></circle><circle cx="19
                            " cy="12 " r="2 "></circle></g></svg></div>
                    </div>
                    <div class="body-content-text ">
                        <p>${tweet.message}</p>
                    
                    </div>
                </div>

            </section>
    `

    const div = document.createElement('div');
    div.innerHTML = htmlTweet;

    tweet2.append(div)

    return div;
}
todoTweet.tweets.forEach( createTweet )

txtInput.addEventListener('keyup', (event) => {
    if( event.keyCode === 13 && txtInput.value.length > 0 ){
        const nuevoTodo = new _Tweet( txtInput.value );
        todoTweet.addTweet( nuevoTodo );
        createTweet( nuevoTodo );
        txtInput.value = '';
       
    }

    
});

eliminated.addEventListener('click', (event) => {

    
    // const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const tweetId = todoElemento.getAttribute('data-id')
    todoElemento.classList.toggle('.body')
    // if( nombreElemento.includes(tweetId)){
        todoTweet.eliminatedTweets( tweetId );
        body.remove();
        console.log(body)
    // }

    
})







