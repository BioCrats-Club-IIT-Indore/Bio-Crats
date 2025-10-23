import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
export default function Events() {
  return (
    <>
      <div className="events-container min-h-screen ">
        <div className="flex flex-wrap w-60 justify-center align-center">
            <div className="evanets">
          <div className="event w-50 h-50 bg-green-300 rounded-lg color-black">
            <div className="image">
              <img src={logo} alt="image" className="h-30 w-30 rounded-xl " />
            </div>
            <div className="eve-details">
              <p> speaker : lokesh kumar </p>
              <p> loaction : LRC , mini confrence hall </p>
              <p> date : 15 sept , 2025</p>
              <p>
                {" "}
                description : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eligendi voluptas maiores, fugiat autem, dolorum sint
                dolore vero ipsam, accusantium placeat ipsum eaque voluptate
                eveniet. Autem perspiciatis eos qui aliquid similique.{" "}
              </p>
            </div>
          </div>
          <br/>

          <div className="event w-50 h-50 bg-green-300 rounded-lg color-black">
            <div className="image">
              <img src={logo} alt="image" className="h-20 w-20 rounded-xl " />
            </div>
            <div className="eve-details">
              <p> speaker : lokesh kumar </p>
              <p> loaction : LRC , mini confrence hall </p>
              <p> date : 15 sept , 2025</p>
              <p>
                {" "}
                description : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eligendi voluptas maiores, fugiat autem, dolorum sint
                dolore vero ipsam, accusantium placeat ipsum eaque voluptate
                eveniet. Autem perspiciatis eos qui aliquid similique.{" "}
              </p>
            </div>
          </div>{" "}
          <div className="event w-50 h-50 bg-green-300 rounded-lg color-black">
            <div className="image">
              <img src={logo} alt="image" className="h-30 w-30 rounded-xl " />
            </div>
            <div className="eve-details">
              <p> speaker : lokesh kumar </p>
              <p> loaction : LRC , mini confrence hall </p>
              <p> date : 15 sept , 2025</p>
              <p>
                {" "}
                description : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eligendi voluptas maiores, fugiat autem, dolorum sint
                dolore vero ipsam, accusantium placeat ipsum eaque voluptate
                eveniet. Autem perspiciatis eos qui aliquid similique.{" "}
              </p>
            </div>
          </div>{" "}
          <div className="event w-50 h-50 bg-green-300 rounded-lg color-black">
            <div className="image">
              <img src={logo} alt="image" className="h-30 w-30 rounded-xl " />
            </div>
            <div className="eve-details">
              <p> speaker : lokesh kumar </p>
              <p> loaction : LRC , mini confrence hall </p>
              <p> date : 15 sept , 2025</p>
              <p>
                {" "}
                description : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eligendi voluptas maiores, fugiat autem, dolorum sint
                dolore vero ipsam, accusantium placeat ipsum eaque voluptate
                eveniet. Autem perspiciatis eos qui aliquid similique.{" "}
              </p>
            </div>
          </div>{" "}
          <div className="event w-50 h-50 bg-green-300 rounded-lg color-black">
            <div className="image">
              <img src={logo} alt="image" className="h-30 w-30 rounded-xl " />
            </div>
            <div className="eve-details">
              <p> speaker : lokesh kumar </p>
              <p> loaction : LRC , mini confrence hall </p>
              <p> date : 15 sept , 2025</p>
              <p>
                {" "}
                description : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eligendi voluptas maiores, fugiat autem, dolorum sint
                dolore vero ipsam, accusantium placeat ipsum eaque voluptate
                eveniet. Autem perspiciatis eos qui aliquid similique.{" "}
              </p>
            </div></div>
          </div>
        </div>
      </div>
    </>
  );
}
