import { Link, NavLink } from "react-router-dom";
import Button from "../components/Button"
import { ArrowRight, Stethoscope, Phone, Brain, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react";





const Home = () => {




  return (
    <div className="min-h-screen mt-10 items-center flex flex-col  justify-center px-6">

      {/* Hero Section */}
      <section className="container py-12 md:py-24 lg:py-32">
          <div className="flex justify-between gap-10    lg:gap-16">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Medical Help for Rural Areas
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                QuickHelp connects rural communities with healthcare professionals, even with low internet speeds. Get
                consultations, emergency assistance, and AI-powered diagnostics when you need them most.
              </p>
              <div className="flex  flex-col gap-2 min-[400px]:flex-row">
                <NavLink className="px-6 py-3 bg-gray-800 text-white rounded-lg text-lg
              shadow-md hover:bg-blue-700 ">
                <span className="flex flex-row items-center">  Get Started
                <ArrowRight className="ml-2 h-4 w-4" /></span>
                </NavLink>

                <Button variant="outline" size="lg">
                  <NavLink to={"/working"}>Learn More</NavLink>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] rounded-full  flex items-center justify-center border-14 border-gray-300">
                  <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center border-4 border-transparent bg-clip-padding">
                    <Stethoscope className="h-24 w-24 text-primary" />
                  </div>
                </div>
              </div>

          
          </div>
        </section>
      
      {/* CTA Buttons */}
      <div className="flex space-x-6 mb-12">
        <Link to="/login" className="px-6 py-3 bg-gray-800 text-white rounded-lg text-lg
         shadow-md hover:bg-blue-700">Login</Link>

        <Link to="/signup" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg text-lg 
        shadow-md hover:bg-yellow-500">Signup</Link>
      </div>
      
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600">📞 24/7 Emergency Help</h2>
          <p className="text-gray-600">Get immediate assistance from medical professionals.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600">📡 Works in Low Internet</h2>
          <p className="text-gray-600">AI-powered offline diagnostics for rural healthcare.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600">🩺 Online Consultation</h2>
          <p className="text-gray-600">Connect with certified doctors from anywhere.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
