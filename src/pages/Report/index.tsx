export default function Report() {
    return (
        <div className="relative min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-white via-white to-gray-50 pt-6 sm:pt-8 lg:pt-12 2xl:pt-16 3xl:pt-20">

            <iframe
                src='VisDecodeReport.pdf'
                className="absolute inset-0 w-full h-full border-0"
                title='VisDecode Report'
            ></iframe>
        </div>
    );
}