import React from "react";
import { colorCode, productSize,productMaterial } from "./ProductData";
export interface states {
  activeThumb:any,
  modalOpen:boolean,
  productColorData:any,
  productSizeData:any,
  productMaterialData:any,

}
export type Props = {
    // images:any
};
export default class second extends React.Component<Props, states> {
  constructor(props: Props) {
    super(props);
    this.state = {
    activeThumb:"",
    modalOpen: false,
    productColorData:colorCode,
    productSizeData:productSize,
    productMaterialData:productMaterial,


    };
  }
  
  changeSizeBackground=(itemIndex:any)=>{
    let i:any
    for(i=0;i<this.state.productSizeData.length;i++){
      if(i===itemIndex){
        this.setState({ productSizeData:this.state.productSizeData[i].active=true  });
      }else{
        this.setState({ productSizeData:this.state.productSizeData[i].active=false  });
      }
    }
    this.setState({ productSizeData:this.state.productSizeData  });
  }
  changeBorder=(itemIndex:any)=>{
    let i:any
    for(i=0;i<this.state.productColorData.length;i++){
      if(i===itemIndex){
        this.setState({ productColorData:this.state.productColorData[i].active=true  });
      }else{
        this.setState({ productColorData:this.state.productColorData[i].active=false  });
      }
    }
    this.setState({ productColorData:this.state.productColorData  });
  }
  changeProductMaterial=(itemIndex:any)=>{
    let i:any
    for(i=0;i<this.state.productMaterialData.length;i++){
      if(i===itemIndex){
        this.setState({ productMaterialData:this.state.productMaterialData[i].active=true  });
      }else{
        this.setState({ productMaterialData:this.state.productMaterialData[i].active=false  });
      }
    }
    this.setState({ productMaterialData:this.state.productMaterialData  });
  }
}

