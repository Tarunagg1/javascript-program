let product_totalamt = document.getElementById("total_amount");
let totalshipcharge = document.getElementById("shipping_charge");
const decrese = (textbox,iteamval) =>{
    var itemval = document.getElementById(textbox)
    var price = document.getElementById(iteamval)
    if(itemval.value <=0){
        itemval.value = 0;
        alert("negetive is not allow");
    }else{
        itemval.value = parseInt(itemval.value)-1;
        price.innerHTML = parseInt(price.innerHTML) - 15;
        itemval.style.background = "#fff";
        itemval.style.color = "black";
        totalshipcharge.innerHTML = parseInt(totalshipcharge.innerHTML) - 10;
        product_totalamt.innerHTML = parseInt(product_totalamt.innerHTML) - 10;

    }    

}

const increse = (textbox,iteamval)=>{
    var itemval = document.getElementById(textbox)
    var price = document.getElementById(iteamval)
    if(itemval.value >=5){
        itemval.style.background = "red";
        itemval.style.color = "#fff";
       alert("max 5 is allow");
    }else{
        itemval.value = parseInt(itemval.value)+1;
        price.innerHTML = parseInt(price.innerHTML) + 15;
        totalshipcharge.innerHTML = parseInt(totalshipcharge.innerHTML) + 10;
        product_totalamt.innerHTML = (parseInt(product_totalamt.innerHTML) + 15) + 10;
    }        
}