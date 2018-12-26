import React from "react";
import { Component } from "@Components/framework";
import { Image } from "@Components/image";
import { stylesRow2 } from "./styles";
import { Row2Item } from "../../Components/example/row2-item";

export class RowTwo extends Component {
  render() {
    return (
      <div className='w-full bg-grey-lighter'>
        <style jsx>{stylesRow2}</style>
        <div className="max-w-2xl mx-auto py-10">
          <div className="row2 md:max-w-2xl mb-6 grid md:grid-gap-4 md:grid-columns-2 lg:grid-columns-3">
            <Row2Item Image={<Image src={"static/img/example/img_1.jpg"} />} heading={"Organic Dragon Fruit"} />
            <Row2Item Image={<Image src={"static/img/example/img_2.jpg"} />} heading={"Organic Sprout Veggie"} />
            <Row2Item Image={<Image src={"static/img/example/img_3.jpg"} />} heading={"Organic Watercress"} />
            <Row2Item Image={<Image src={"static/img/example/img_4.jpg"} />} heading={"Organic Carrots"} />
            <Row2Item Image={<Image src={"static/img/example/img_5.jpg"} />} heading={"Organic Bell Pepper"} />
            <Row2Item Image={<Image src={"static/img/example/img_6.jpg"} />} heading={"Organic Cucumber"} />
          </div>
        </div>
      </div>
    );
  }
}
