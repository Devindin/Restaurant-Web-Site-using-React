import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";


const Work = () => {
    const workInfoData=[
        {
            image:PickMeals,
            title:"Pick Meals",
            text:"Treat yourself to a culinary journey unlike any other. Explore our Pick Meals today and discover why Foodie is the ultimate destination for food lovers.",
        },

        {
            image:ChooseMeals,
            title:"Choose How Often",
            text:"Planning a special event or celebration? Let us take care of all the details. Whether it's a birthday party, anniversary dinner, or corporate gathering.",
        },

        {
            image:DeliveryMeals,
            title:"Fast deliveries",
            text:"Our dedicated delivery team works tirelessly to ensure that your food arrives promptly, so you can enjoy it at its best. We use the latest technology to track orders and optimize routes.",
        },
    ];
  return (
    <div className="work-section-wrapper">
    <div className="work-section-top">
      <p className="primary-subheading">Work</p>
      <h1 className="primary-heading">How It Works</h1>
      <p className="primary-text">
      Take a look at our diverse menu featuring a wide array of mouthwatering dishes. From appetizers to desserts, we have something for every palate.
      </p>
    </div>
    <div className="work-section-bottom">
      {workInfoData.map((data) => (
        <div className="work-section-info" key={data.title}>
          <div className="info-boxes-img-container">
            <img src={data.image} alt="" />
          </div>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Work
