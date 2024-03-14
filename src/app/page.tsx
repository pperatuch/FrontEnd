import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import CarPanel from "@/components/CarPanel";

export default function Home() {
  return (
    <main>
      <Banner/>
      <CarPanel/>
    </main>
  );
}
