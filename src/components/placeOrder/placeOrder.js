import React, { Component } from 'react';
import axios from 'axios';

class PlaceOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {

            posts: [],
            stockName: localStorage.getItem("stockName"),
            formData: {
                stockQuantity: ''
            }
        }
        // localStorage.getItem(stockName)

    }

    componentDidMount() {

        // axios.get('http://10.117.189.137:8088/breach/risk/').then(data =>  {
        //     console.log(data);
        //     this.setState({posts:data.data});

        //     // this.setState({ posts: posts });
        // });
    }



    render() {
        return (
            <div className="container">

                {/* <div>Stock Name : {this.state.stockName}</div>
                <div>Previous Market Price : {this.state.stockName}</div>
                <div>Current Market Price : {this.stockName}</div> */}
                
                <div className="form-group">
                    <label>Stock Name :</label>
                    {this.state.stockName}
                </div>

                <div className="form-group">
                    <label>Previous Market Price</label>
                    {this.state.stockName}
                </div>


                <div className="form-group">
                    <label>Current Market Price</label>
                    {/* <input type="text" className="form-control" placeholder="Enter name" name="stockQuantity" required onChange={this.handleChange} /> */}
                    {this.state.stockName}
                </div>

                <div className="form-group">
                    <label>Quantity</label>
                    <input type="text" className="form-control" placeholder="Enter name" name="stockQuantity" required onChange={this.handleChange} />
                </div>

                <button>Confirm</button>
                <button>Cancel</button>
            </div>
        )
    }
}
export default PlaceOrder