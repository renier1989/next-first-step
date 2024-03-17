import { Metadata } from "next";

export const metadata: Metadata = {
    title: "pagina de contact",
    description: "esta es la pagina que muestra la informacion de contacto",
    keywords: ['contacto', 'contact','informavion de contacto','pagina de renier vargas contact', 'puedes contactarme por esta pagina']
  };

const page = () => {
    return (
        <div className="text-6xl mx-auto flex items-center justify-center">This is the Contact page</div>
    )
}
export default page