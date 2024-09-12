const baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdowns = document.querySelectorAll(".dropdown select") //selecting both the dropdowns

//outter loop will run twice --> "from" and "to" dropdowns
for(let select of dropdowns){
    for(currCode in countryList){ //countryList is object defined in codes.js file
        //now we itterate over countryList keys --> currCode
        //each time we create a new option in the dropdown option with it's inner text and value=currCode
      let newOpt = document.createElement("option");
      newOpt.innerText = currCode;
      newOpt.value = currCode;
      //if else to show the starting value of both dropdowns
      if(select.name=="from" && currCode==="AUD"){
        newOpt.selected = "selected";
      }else if(select.name=="to" && currCode==="CNY"){
        newOpt.selected = "selected";
      }
      select.append(newOpt); //adding the option in dropdown list
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

//to change the country flag along with the options we select
// logic --> in url we just have to change the country code 
//country code = "value" in key value pair of countryList object provided i.e countryList[countryCode]

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${countryCode}/jpy.json`;
    let img = element.parentElement.querySelector("img");
    img.src = newURL;
}
