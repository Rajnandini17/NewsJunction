import React, { Component } from 'react'
import loading from './loading.gif'
import './styles.css'

export class Spinner extends Component {
    render(){
        return (
            <div className='text-center'>
                <img className = 'spin' src={loading} alt='loading'/>
            </div>
        )
    }
}