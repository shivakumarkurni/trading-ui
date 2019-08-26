import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// import './App.css';

class ListStocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

        }
    }

    componentDidMount() {
        console.log(this.props.match)
        axios.get(`http://10.117.189.137:9093/trading/trading/stocks`).then((response) => {
            console.log(response);
            localStorage.setItem("stockName", response.data.stockName);
            localStorage.setItem("stockPrice", response.data.stockPrice);
            localStorage.setItem("stockPrice", response.data.stockPrice);
            localStorage.setItem("stockPrice", response.data.stockPrice);
            this.setState({ data: response.data })
        }).catch((error) => {
            console.log(error.message)
        });
    }


    buyStockHandler = () => {
        let formData1 = {
            userId: '',
            stockId: '',
            stockQuantity: ''
        }

        axios.post('http://10.117.189.137:9093/trading/stock', formData1).then(data => {
            console.log(data);
            this.setState({ posts: data.data });
        });

        this.props.history.push(`/placeOrder`)
    }


    render() {
        return (
            <div className="row">
                <div className="container header-title">
                    <span className="list-title">List of Stocks</span>

                </div>
                <div className="col-md-2"></div>
                <div className="container title col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="header-text">Stock Name</th>
                                <th scope="col" className="header-text">Price (Prev.Close)</th>
                                <th scope="col" className="header-text">Quantity</th>
                                <th scope="col" className="header-text">Sector Name</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="header-text">{item.stockName}</td>
                                        <td className="header-text">{item.stockPrice}</td>
                                        <td className="header-text">{item.stockQuantity}</td>
                                        <td className="header-text">{item.stockSector}</td>
                                        {/* <td><button onClick={this.buyStockHandler}>Buy</button></td> */}



                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListStocks;