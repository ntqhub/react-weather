import React from 'react';
import axios from 'axios';
import {Wrapper,WrapCenter,Temp} from './mainStyled';
// const API = `http://api.openweathermap.org/data/2.5/weather?q=&APPID=`;
const API = `http://api.openweathermap.org/data/2.5/weather?`;
const key = `319d853113b9a7453c734e955aab13cf`;
export default class Main extends React.Component{
    state = {
        city: "Moscow",
        temp: 0,
    }
    componentDidMount(){
        this.getData();
    }
    getData = () =>{
        axios.get(`${API}`,{
            params:{
            q: this.state.city,
            APPID: key 
            }
        })
            .then(res => {
                this.setCity(res.data.main.temp);
            })
    }
    changeCity = (e) =>{
        this.setState({
            city:e.target.value
        })
        console.log(e.target.value);
    }
    setCity = (e) =>{
        this.setState({
            temp: Math.round(e - 273),
            city:""
        })
    }
    render(){
        return(
            <Wrapper>
                <WrapCenter>
                    <Temp>{this.state.temp}&#176;</Temp>
                    <div>
                        <input placeholder="Moscow" onChange={this.changeCity}/>
                        <button onClick={(e)=>{this.getData()}}>GET TEMP</button>
                    </div>
                    
                </WrapCenter>
            </Wrapper>
        )
    }
}