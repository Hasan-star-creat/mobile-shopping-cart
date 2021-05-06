function updateSingleProduct(id,isTrue){
    // console.log(id);
    let quantity = getQty(id);
    const singlePrice = getPrice(id)

    if(isTrue){
        quantity++;
        updateQty(id,quantity)
    }else{
        quantity--;
        if(quantity < 1){
            updateQty(id,0)
            
        }else{
            updateQty(id,quantity);
        }
        
    }
    updateProductPrice(id,quantity,singlePrice);
    updateSubTotal();
    updateTotal();
}


function getQty(id) {
    const qty = document.getElementById(`${id}-qty`).value;
    return qty;
  }
function updateQty(id,value){
    document.getElementById(`${id}-qty`).value = value;
}


 function getPrice(id){
    let price = document.getElementById(`${id}-price`).innerText;
    return price;
 }
 function updateProductPrice(id,qty,unit){
 const le =  document.getElementById(`${id}-total`);
 
 if(qty < 1){
    le.innerText = 0 ;
 }else{
    le.innerText = (qty * unit).toFixed(2);
 }
    
 }

  // update subtotal 
   function updateSubTotal(){
  const ipadPro = document.getElementById('ipad_pro-total').innerText;
  const ipadAir = document.getElementById('ipad_air-total').innerText;
  const subTotal = parseFloat(ipadPro) + parseFloat(ipadAir);
     document.getElementById('subtotal').innerText = subTotal.toFixed(2);
   }
// update Total value with tax
   function updateTotal(){
    const subTotal =  document.getElementById('subtotal').innerText;
    const vat = parseFloat(subTotal) * 0.1;
    document.getElementById('vat').innerText = vat.toFixed(2)
    
     const total = parseFloat(subTotal) + vat;
    document.getElementById('total').innerText = total.toFixed(2);
   }

  
  