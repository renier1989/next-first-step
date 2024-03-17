
export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex items-center flex-col">
            <p className="text-rose-700 font-semibold text-lg">Layout Personalizado</p>
            {children}
        </main>
    );
}