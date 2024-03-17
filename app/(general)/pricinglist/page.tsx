import { Metadata } from "next";

export const metadata: Metadata = {
    title: "pagina de pecios",
    description: "esta es la pagina que muestra la informacion de los precios de los productos",
    keywords: ['listado de precios', 'pricinglist','informavion de precios','pagina de renier vargas pricing', 'puedes ver el listado de precios por esta pagina']
  };

const page = () => {
    return (
        <div className="text-6xl mx-auto flex items-center justify-center">This is the Pricing List page</div>
    )
}
export default page