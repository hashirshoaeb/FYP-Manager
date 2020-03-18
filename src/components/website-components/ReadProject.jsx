import React, { Component } from "react";
import Data from "../../projects.json";
import img_version from "../../asserts/version_control.svg";
class ReadProject extends Component {
  constructor(props) {
    super(props);
    this.state = { data: Data.Fyp };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3 my-5 mx-2">
          <h4 className="my-5 mx-2"> All Projects</h4>
          {this.state.data.map((d, i) => (
            <div className="btn btn-outline   m-2" key={i}>
              <b> {i + 1}.</b> {d.Fyp_title}
            </div>
          ))}
        </div>

        <div className=" col-md-6 my-5 ">
          <div className="card jumbotron">
            <div className="display-2 my-5 text-center">Fyp Title</div>
            <div className="btn btn-outline-dark">
              <a href="/#mainbody">Supervisor Timeline</a>
            </div>

            <h5 className="display-5 my-3">Introducation</h5>
            <p className="lead my-3 mx-2">
              Are you looking for Furniture shop management system for your
              final year project? We are here to help you. You can contact us
              Furniture is the soul of a house; it gives a sense of fulfilling
              of needs. Types of furniture are of many designs and categories.
              It can be as small as a mouse to as gigantic as an elephant. The
              proper fitting at the right place is also a matter of concern
              while choosing the furniture. Final Year Project Help for Computer
              Science It should be taken care that size of the room and the size
              of furniture align with each other. Sometimes furniture is
              available prepared one can go and buy and order. On the other
              hand, sometimes we want some furniture which we want to customize
              according to a choice. In this case, the user can give his
              customized item’s description, dimensions and other feature he
              wants in this. Further, he will be provided dates of completion of
              the order. Now admin analyzes the order and takes the according to
              that assigned amount of wood to it and no.He will decide the tools
              that need to be used in this system and provided to the staff. Of
              staffs to that order and description is forwarded to them such
              that they can start with the preparation of the furniture. As the
              order completes it is given to the user, and he can take that to
              his home. MODULES OF FURNITURE SHOP MANAGEMENT SYSTEM The system
              is made of the combination of modules which work with
              collaboration with each other and make it beneficial to accomplish
              the main aim of the scheme. Customized Item: This is the module in
              which the user may tell the system that apart from the available
              item if he has any such choice is different from the available or
              not in the market or they want it customized according to his wish
              of them. It will come very easy for the maker if the user gives
              precise information. Here we can specify the shape of the item,
              how it looks by uploading the pic and diagrams can also be
              clicked, colour to which it needs to be, the wood type which will
              make the furniture durable and long lasting. The recommendation
              will be given to him to choose the best. Orders: Order of the
              furniture is stored in this interface after selecting the item for
              purchase the choice the user has is one is the prepared item
              another customized item for which they have wait for completion,
              This depends upon his choosing. He gets confirmation in this
              interface after doing the necessary filling of attributes.
              Furniture item: The furniture details are given here to mention in
              the selection process of the user. The admin maintains These he
              determines the type of furniture where it will be used and when it
              will be utilized, design type, the wood type used, pricing of the
              furniture are also given here. Here they can choose the items
              also. Staff: This interface is for staff in this interface admin
              assigns the teams to the particular customized item or anywhere
              else from where the choices need to be taken care of. Now the
              assignment is based on his quality and needs to be taken care he
              can do the job or not. Registration: Users information have to be
              compelled to be registered within the system thus on establish
              every of them unambiguously and do the required group action as
              real potential .like on the name of the bill are issued. On the
              far side, this plenty of things require measure there wherever we
              will reference him. Without registration, there are few options
              and pages one user can see which are landing on the home page and
              taking the features read but he won’t be allowed to use those. For
              use, he will have to register. One person needs to put his all the
              details properly and precisely as it will be helpful in
              identifying them and believing that he is the real person who has
              booked for the same. It also includes driver license for them who
              is driving and parameter too.
            </p>
            <h5 className="display-5 my-2">Important note</h5>
            <p className="lead my-3 mx-1">
              Are you looking for Furniture shop management system for your
              final year project? We are here to help you. You can contact us
              Furniture is the soul of a house; it gives a sense of fulfilling
              of needs. Types of furniture are of many designs and categories.
              It can be as small as a mouse to as gigantic as an elephant. The
              proper fitting at the right place is also a matter of concern
              while choosing the furniture. Final Year Project Help for Computer
              Science It should be taken care that size of the room and the size
              of furniture align with each other. Sometimes furniture is
              available prepared one can go and buy and order. On the other
              hand, sometimes we want some furniture which we want to customize
              according to a choice. In this case, the user can give his
              customized item’s description, dimensions and other feature he
              wants in this. Further, he will be provided dates of completion of
              the order. Now admin analyzes the order and takes the according to
              that assigned amount of wood to it and no.He will decide the tools
              that need to be used in this system and provided to the staff. Of
              staffs to that order and description is forwarded to them such
              that they can start with the preparation of the furniture. As the
              order completes it is given to the user, and he can take that to
              his home. MODULES OF FURNITURE SHOP MANAGEMENT SYSTEM The system
              is made of the combination of modules which work with
              collaboration with each other and make it beneficial to accomplish
              the main aim of the scheme. Customized Item: This is the module in
              which the user may tell the system that apart from the available
              item if he has any such choice is different from the available or
              not in the market or they want it customized according to his wish
              of them. It will come very easy for the maker if the user gives
              precise information. Here we can specify the shape of the item,
              how it looks by uploading the pic and diagrams can also be
              clicked, colour to which it needs to be, the wood type which will
              make the furniture durable and long lasting. The recommendation
              will be given to him to choose the best. Orders: Order of the
              furniture is stored in this interface after selecting the item for
              purchase the choice the user has is one is the prepared item
              another customized item for which they have wait for completion,
              This depends upon his choosing. He gets confirmation in this
              interface after doing the necessary filling of attributes.
              Furniture item: The furniture details are given here to mention in
              the selection process of the user. The admin maintains These he
              determines the type of furniture where it will be used and when it
              will be utilized, design type, the wood type used, pricing of the
              furniture are also given here. Here they can choose the items
              also. Staff: This interface is for staff in this interface admin
              assigns the teams to the particular customized item or anywhere
              else from where the choices need to be taken care of. Now the
              assignment is based on his quality and needs to be taken care he
              can do the job or not. Registration: Users information have to be
              compelled to be registered within the system thus on establish
              every of them unambiguously and do the required group action as
              real potential .like on the name of the bill are issued. On the
              far side, this plenty of things require measure there wherever we
              will reference him. Without registration, there are few options
              and pages one user can see which are landing on the home page and
              taking the features read but he won’t be allowed to use those. For
              use, he will have to register. One person needs to put his all the
              details properly and precisely as it will be helpful in
              identifying them and believing that he is the real person who has
              booked for the same. It also includes driver license for them who
              is driving and parameter too.
            </p>
            <div className="mx-auto">
              {" "}
              <img
                className="img-fluid"
                src={img_version}
                alt="collaboration"
              ></img>
            </div>
            <div>
              <h5 className="display-5 my-3">Areas of Scope:</h5>
              <div className="mx-5">
                <div className="btn btn-outline-dark w-20 m-2">
                  Computer Science{" "}
                </div>
                <div className="btn btn-outline-dark w-20 m-2">
                  Computer Science{" "}
                </div>
                <div className="btn btn-outline-dark w-20 m-2">
                  Computer Science{" "}
                </div>
              </div>
            </div>
            <div className="w-50 btn btn-outline-primary my-5 mx-auto">
              {" "}
              <b> Request</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadProject;
