import React from "react";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"

const Section1= () => {
    
  return (
    <section>
        <div className="bg-white mt-4">
        <div className="container bg-dark text-white ">
      <div className="row p-5 align-items-center ">
        <div className="col-md-6 ">
            <h1>Expert comptable</h1>
          <p >
          Pour une comptabilité en toute confiance
Expertise comptable, fiscale, sociale, juridique
Trouvez le cabinet comptable qui vous convient
            
          </p>
        </div>
        <div className="col-md-6 ">
           
           <img className="img-fluid " src={image1} alt='dec'></img>
          
        </div>
      </div>
    </div>
    <div className="container bg-white p-5">
      <div className="row   align-items-center ">
        <div className="col-md-6 ">
        <img className="img-fluid " src={image2} alt='dec'></img>

        </div>
        <div className="col-md-6 p-5">
           
           <h1>Trouvez votre expert comptable</h1>
          <p >
          Pour une comptabilité en toute confiance
Expertise comptable, fiscale, sociale, juridique
Trouvez le cabinet comptable qui vous convient
            
          </p>
        </div>
      </div>
    </div>
        </div>
    </section>
   
  );
};

export default Section1;
