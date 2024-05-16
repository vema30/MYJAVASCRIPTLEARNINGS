function darkmodeon()
{
    const btn = document.querySelectorAll('button')[1];
btn.style.backgroundColor = 'red';
const body = document.getElementsByTagName('body')[0];
if(body.style.backgroundColor==='white')
    {   btn.innerHTML='WHITE MODE'
        body.style.backgroundColor='black';
    }
    else{
        btn.innerHTML='DARK MODE'
        body.style.backgroundColor='white';
    }


   
}
function newquote(){
    const quotes = {
        1: "The only way to do great work is to love what you do. - Steve Jobs",
        2: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        3: "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
        4: "It does not matter how slowly you go as long as you do not stop. - Confucius",
        5: "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        6: "Life is what happens when you're busy making other plans. - John Lennon",
        7: "The best way to predict the future is to create it. - Peter Drucker",
        8: "Strive not to be a success, but rather to be of value. - Albert Einstein",
        9: "You miss 100% of the shots you don't take. - Wayne Gretzky",
        10: "The only impossible journey is the one you never begin. - Tony Robbins"
    };
    
    // Function to get a random quote
    function change() {
        const keys = Object.keys(quotes);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return quotes[randomKey];
    }
    let text = document.getElementsByClassName('text')[0];
    text.innerHTML=change();
}