import React, { Component } from 'react';
import '../../styles/Form.css';
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            image: '',
            name: '',
            price:0,
        }
        this.handleImage = this.handleImage.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleImage(e) {
        this.setState({ image: e.target.value })
    }
    handleName(e) {
        this.setState({ name: e.target.value })
    }
    handlePrice(e) {
        this.setState({ price: e.target.value })
    }
    handleCancel(){
        this.setState({
            image: '',
            name: '',
            price: ''
        })
    }
    handleAdd=()=>{
        const {image,name,price}=this.state;
        let body= {image,name,price};
        axios.post('/api/product',body).then(response=>{
            this.props.updateInventory(response.data)


        })

        
    }

    render() {
        return (
            <div className='form-container'>
                <div className='form-list'>
                    <img src="https://via.placeholder.com/150" alt='product'></img>
                    <span>Image URL</span>
                    <input className="input-field" onChange={this.handleImage} value={this.state.image} />

                    <span>Product Name</span>
                    <input className="input-field" onChange={this.handleName} value={this.state.name}/>

                    <span>Price</span>
                    <input className="input-field" onChange={this.handlePrice} value={this.state.price}type="number" />

                    <div className="form-button-list">
                        <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>

                        <button className="add-button" onClick={this.handleAdd}>Add to Inventory</button>
                    </div>

                </div>
            </div>
        )
    }
}
