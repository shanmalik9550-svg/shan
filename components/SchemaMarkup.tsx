"use client";

import React from "react";
import { companyInfo } from "@/data/companyInfo";

interface SchemaMarkupProps {
  brandName?: string;
  pageTitle?: string;
  pageDescription?: string;
}

export default function SchemaMarkup({ brandName, pageTitle, pageDescription }: SchemaMarkupProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": brandName ? `${companyInfo.name} - ${brandName} Specialist` : companyInfo.name,
    "description": pageDescription || "Same-day doorstep kitchen appliance repair service for kitchen chimneys, gas hobs, and stoves.",
    "telephone": companyInfo.phone,
    "areaServed": companyInfo.serviceAreas.map(city => ({
      "@type": "City",
      "name": city
    })),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    }
  };

  const repairServiceSchema = {
    "@context": "https://schema.org",
    "@type": "RepairService",
    "name": pageTitle || "Kitchen Appliance Repair Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": companyInfo.name
    },
    "serviceType": "Kitchen Appliance Repair",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Kitchen Appliance Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Chimney Repair & Motor Service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gas Hob Burner & Ignition Repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gas Stove Leakage & Nozzle Cleaning"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(repairServiceSchema) }}
      />
    </>
  );
}
