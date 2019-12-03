import React from 'react'
import Container from 'react-bootstrap/Container'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import './PaymentTest.css'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

class PaymentTest extends React.Component {
    state = {
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
        };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/Success', {
            method: 'POST',
            body: data,
        });
    }

    async handleToken(token) {
        const pay = await axios.post('/api/payment', token)
    }

    onToken = (token, addresses) => {
        this.handleToken(token)
        // TODO: Send the token information and any other
        // relevant information to your payment process
        // server, wait for the response, and update the UI
        // accordingly. How this is done is up to you. Using
        // XHR, fetch, or a GraphQL mutation is typical.
    };
    
    render() {
        console.log(process.env.STRIPE_PUBLISHABLE_KEY);
        return (
            <StripeCheckout
                amount="995"
                billingAddress
                description="Dextedoodle Therepeutic Tool"
                locale="auto"
                name="Dexte"
                stripeKey='pk_test_1tLXq8tyKXWxDrUC1dJtkLVE00DaMRX9Ur'
                token={this.onToken}
                zipCode
            />
            // <div id='PaymentForm'>
            //     <Cards 
            //         cvc={this.state.cvc}
            //         expiry={this.state.expiry}
            //         focused={this.state.focus}
            //         name={this.state.name}
            //         number={this.state.number}
            //     />
            //     <form onSubmit={this.handleSubmit}>
            //         <input id={'CardNum'}
            //             type='tel'
            //             name='number'
            //             placeholder='Card Number'
            //             pattern='[\d| ]{16,22}'
            //             onChange={this.handleInputChange}
            //             onFocus={this.handleInputFocus}
            //         />
            //         <a><br/></a>
            //         <input id={'name'}
            //             type='tel'
            //             name='name'
            //             placeholder='Name'
            //             onChange={this.handleInputChange}
            //             onFocus={this.handleInputFocus}
            //         />
            //         <a><br/></a>
            //         <input id={'expiry'}
            //             type='teli'
            //             name='expiry'
            //             pattern='\d\d/\d\d'
            //             placeholder='Valid thru'
            //             onChange={this.handleInputChange}
            //             onFocus={this.handleInputFocus}
            //         />
            //         <input id={'cvc'}
            //             type='teli'
            //             name='cvc'
            //             placeholder='CVC'
            //             pattern='\d{3,4}'
            //             onChange={this.handleInputChange}
            //             onFocus={this.handleInputFocus}
            //         />
            //         <a><br/></a>
            //         <button className={'button'}><span>Submit</span></button>
            //     </form>
            // </div>
        )
    }
}

export default PaymentTest
