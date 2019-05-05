function payment(price){
    var result;
    var campos = '';
    
    campos += '<div class="payment-header"><span> Pagamento </span> </div>';
    campos += '<div class="paymente-button">';
        campos += '<div class="payment-option">';
            campos += '<select>';
                campos += '<optgroup label="Cartão">';
                    campos += '<option value="credito">Crédito</option>';
                    campos += '<option value="debito">Débito</option>';
                campos += ' </optgroup>';
                campos += '<optgroup label="Outros">';
                    campos += '<option value="boleto">Boleto</option>';
                    campos += '<option value="deposito">Dep. Bancario</option>';
                campos += '</optgroup>';
            campos += '</select>';
        campos += '</div>';
        
        campos += '<div class="payment-number">';
            campos += '<input type="text" placeholder="Numero Cartão" class="db-input typeahead q-suggest">';
        campos += '</div>';
        
        campos += '<div class="payment-cvv">';
            campos += '<input type="text" placeholder="CVV" class="db-input typeahead q-suggest"/>';
        campos += '</div>';
        
        campos += '<div class="payment-quantit">';
            campos += '<select>';
            for (i = 1; i < 5; i++ ){
                result = price / i;
                campos += '<option value="value"> ' + i + ' x RS: ' + result.toFixed(2) + '</option>';  

            }
            campos += '</select>';
        campos += '</div>';
        campos += '<div class="product-buy">';
            campos += '<a href="#" class="btn"  onclick="paymentFinaly()">Finalizar</a>';
        campos += '</div>';
    campos += '</div>';
    campos +='<div class="clearfix"></div>';
        
    document.getElementById('resultado').innerHTML = campos;
    console.log(campos);
}

function paymentFinaly(){
    alert("Compra realizada.");
    document.getElementById('resultado').innerHTML = '';

}
