import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="p-6 shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-bold">Kritova Solutions</h1>
        <nav className="space-x-6 text-lg">
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
      </header>

      <section className="text-center py-20 bg-gray-50">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Empowering Businesses with Modern Web Solutions
        </motion.h2>
        <p className="text-xl text-gray-600 mb-8">We build scalable, fast, and beautiful websites tailored for your business growth.</p>
        <Button className="text-xl px-6 py-3">Get Started</Button>
      </section>

      <section id="services" className="py-20 max-w-6xl mx-auto px-4">
        <h3 className="text-4xl font-semibold text-center mb-12">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Web Development', 'UI/UX Design', 'SEO Optimization'].map((service, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6 text-center">
                <h4 className="text-2xl font-semibold mb-4">{service}</h4>
                <p className="text-gray-600">We deliver professional {service.toLowerCase()} services to boost your digital presence.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-6">About Us</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kritova Solutions is a dedicated team of developers and designers passionate about building next-generation digital solutions. Whether it’s a business website or a dynamic application, we ensure speed, security, and performance.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 max-w-3xl mx-auto px-4">
        <h3 className="text-4xl font-semibold text-center mb-8">Contact Us</h3>
        <div className="text-center">
          <p className="text-xl mb-4">Reach out for collaborations or inquiries.</p>
          <a href="mailto:info@kritova.com" className="text-blue-600 text-xl">info@kritova.com</a>
        </div>
      </section>

      <footer className="py-6 text-center border-t mt-8">
        <p className="text-gray-600">&copy; 2025 Kritova Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
