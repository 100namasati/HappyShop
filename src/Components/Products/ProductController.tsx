import React from "react";
import { colorCode, productSize, productMaterial } from "./ProductData";
import logo from './User.png'
export interface states {
  activeThumb: any;
  modalOpen: boolean;
  productColorData: any;
  productSizeData: any;
  productMaterialData: any;
}
export type Props = {
  // images:any
};

export default class second extends React.Component<Props, states> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeThumb: "",
      modalOpen: false,
      productColorData: colorCode,
      productSizeData: productSize,
      productMaterialData: productMaterial,
    };
  }

  changeSizeBackground = (itemIndex: any) => {
    let i: any;
    for (i = 0; i < this.state.productSizeData.length; i++) {
      if (i === itemIndex) {
        this.setState({
          productSizeData: (this.state.productSizeData[i].active = true),
        });
      } else {
        this.setState({
          productSizeData: (this.state.productSizeData[i].active = false),
        });
      }
    }
    this.setState({ productSizeData: this.state.productSizeData });
  };

  changeBorder = (itemIndex: any) => {
    let i: any;
    for (i = 0; i < this.state.productColorData.length; i++) {
      if (i === itemIndex) {
        this.setState({
          productColorData: (this.state.productColorData[i].active = true),
        });
      } else {
        this.setState({
          productColorData: (this.state.productColorData[i].active = false),
        });
      }
    }
    this.setState({ productColorData: this.state.productColorData });
  };
  changeProductMaterial = (itemIndex: any) => {
    let i: any;
    for (i = 0; i < this.state.productMaterialData.length; i++) {
      if (i === itemIndex) {
        this.setState({
          productMaterialData: (this.state.productMaterialData[i].active =
            true),
        });
      } else {
        this.setState({
          productMaterialData: (this.state.productMaterialData[i].active =
            false),
        });
      }
    }
    this.setState({ productMaterialData: this.state.productMaterialData });
  };

  loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  payment = async () => {
    // e.preventDefault();
    const res = await this.loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You Are Offline Or Something wrong. Please Try After Sometime");
      return;
    }

    var options = {
      key: "rzp_test_ar692omJeKA0Bs", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Sonam Asati", //your business name
      description: "Test Transaction",
      image: logo,
      handler: function (response: any) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Sonam Asati", //your customer's name
        email: "sonam@softopstechnologies.com",
        contact: "9893073626",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#FF7F50",
      },
    };

    //@ts-ignore
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
}
