import { Metadata } from "next";
import { brandsData } from "@/data/brands";
import BrandLandingPageTemplate from "@/components/BrandLandingPageTemplate";

const brand = brandsData["gilma-repair"];

export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDescription,
  openGraph: {
    title: brand.metaTitle,
    description: brand.metaDescription,
  }
};

export default function GilmaRepairPage() {
  return <BrandLandingPageTemplate brand={brand} />;
}
