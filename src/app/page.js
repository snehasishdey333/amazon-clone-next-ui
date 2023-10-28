import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Category/Categories";
import Products from "@/components/Product/Products";


export default function Home() {
  return (
   <div className="bg-[#e3e6e6]">
    <Banner/>
    <Categories/>
    <Products/>
   </div>
  )
}
