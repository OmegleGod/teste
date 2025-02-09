document.addEventListener('DOMContentLoaded', function () {
    paypal.Buttons({
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '35.00' // Substitua pelo preço do conteúdo
                    }
                }]
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                alert('Pagamento concluído com sucesso!');
                // Aqui você pode redirecionar o usuário para o conteúdo adquirido
            });
        }
    }).render('#paypal-button-container');
});
