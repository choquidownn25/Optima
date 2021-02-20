using Braintree;


namespace DrHelp.Utility.PaymentGateway
{
    public interface IBraintreeConfiguration
    {
        IBraintreeGateway CreateGateway();
        IBraintreeGateway GetGateway();
    }
}
