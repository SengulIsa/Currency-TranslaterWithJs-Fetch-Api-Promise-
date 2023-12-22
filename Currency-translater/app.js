const api_key ="a5d02b58b6de647874dc3f0a";
const url="https://v6.exchangerate-api.com/v6/"+ api_key;

//Getting Elements
const currency_one= document.getElementById("currency_one");
const currency_two= document.getElementById("currency_two");
const list_one=document.getElementById("list_one");
const list_two=document.getElementById("list_two");
const amount=document.getElementById("amount");
const calculate= document.getElementById("calculate");
const result= document.getElementById("result");

fetch(url + "/codes")
.then(response => response.json())
.then(data =>{
    const items =data.supported_codes;

    let options;
    for(let item of items){
        options +=
        `
            <option value="${item[0]}">${item[1]}</option>

        `;
        list_one.innerHTML = options;
        list_two.innerHTML = options;
    }
});

calculate.addEventListener("click",function(){
  const currency1= currency_one.value;
  const currency2= currency_two.value;
  const amnt= amount.value;

  fetch(url +"/latest/"+ currency1)
  .then(res => res.json())
  .then(data =>{
    const rst = (data.conversion_rates[currency2] * amnt).toFixed(3);
    result.innerHTML= `
    <div class="card border-primary">
    <div class="card-body text-center" style="font-size:30px;">${amnt} ${currency1}=${rst} ${currency2}</div>
</div>
    
    `
  });


});