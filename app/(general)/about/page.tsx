import { Metadata } from "next";

export const metadata: Metadata = {
    title: "pagina de Acerca de",
    description: "esta es la pagina que muestra la informacion adicional de la pagina",
    keywords: ['Acerca de', 'about', 'informacion de about', 'pagina de renier vargas about', 'puedes ver mas informacion por esta pagina']
};

const page = () => {
    return (
        <div className="text-6xl mx-auto flex i tems-center justify-center">This is the About page</div>
    )
}
export default page