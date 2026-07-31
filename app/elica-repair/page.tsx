import { Metadata } from "next";
import { brandsData } from "@/data/brands";
import BrandLandingPageTemplate from "@/components/BrandLandingPageTemplate";

const brand = brandsData["elica-repair"];

export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDescription,
  openGraph: {
    title: brand.metaTitle,
    description: brand.metaDescription,
  }
};

export default function ElicaRepairPage() {
  return <BrandLandingPageTemplate brand={brand} />;
}
