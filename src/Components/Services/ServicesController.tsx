import  { Component } from 'react'
import { ServiceData } from './ServicesData'
 interface States{
    serviceData:any
 }
 type Props={}
export class ServicesController extends Component<Props,States> {
    constructor(props:Props){
        super(props)
        this.state={
            serviceData:ServiceData
        }
    }
 
}

export default ServicesController