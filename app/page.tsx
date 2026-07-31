import React from "react";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesGrid from "@/components/ServicesGrid";
import BrandGrid from "@/components/BrandGrid";
import CommonProblemsSection from "@/components/CommonProblemsSection";
import RepairProcess from "@/components/RepairProcess";
import CustomerReviews from "@/components/CustomerReviews";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        pageTitle="Doorstep Kitchen Appliance Repair Services"
        pageDescription="Same-day doorstep repair for Kitchen Chimneys, Gas Hobs, Stoves, Built-in Ovens & Cooking Ranges with 90-Day Warranty."
      />

      {/* Hero Section */}
      <HeroSection
        h1Title="Doorstep Kitchen Appliance Repair & Service"
        heroHeadline="Same-Day Doorstep Repair for Kitchen Chimneys, Hobs & Ovens"
        heroSubheadline="Certified Technicians for Kaff, Siemens, Faber, Bosch, Elica, Glen & All Major Brands. Arrival in 30-45 Mins with 90-Day Written Warranty."
        ctaCopy="Book Doorstep Service Today"
      />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services Breakdown Grid */}
      <ServicesGrid />

      {/* Brand Selector Grid */}
      <BrandGrid />

      {/* Common Problems Diagnostics */}
      <CommonProblemsSection />

      {/* Repair Process */}
      <RepairProcess />

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}
