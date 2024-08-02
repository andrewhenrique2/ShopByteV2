import Image from "next/image";

// URLs das imagens armazenadas no Firebase Storage
const INTEL_URL = "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/intelbanner.webp";
const AMD_URL = "https://storage.googleapis.com/shopbyte-d1463.appspot.com/public_images/bannerryzen.jpg";


export default function Atrativos() {
    const imageWidth = 650; 
    const imageHeight = 150; 

    return (
        <div className="flex w-full mt-10 items-center justify-center" style={{ height: imageHeight }}>
            <div 
                className="relative border-none border-gray-500 rounded-md mx-5 cursor-pointer"
                style={{
                    width: imageWidth, 
                    height: imageHeight,
                    overflow: 'hidden' 
                }}
            >
                <Image 
                    src={AMD_URL} 
                    fill
                    alt="AMD Banner" 
                    className="rounded-2xl"
                    style={{
                        objectFit: 'cover',
                        maxWidth: '100%',
                        maxHeight: '100%',
                    }}
                />
            </div>
            <div 
                className="relative border-none border-gray-500 rounded-md mx-5 cursor-pointer" 
                style={{
                    width: imageWidth, 
                    height: imageHeight,
                    overflow: 'hidden'
                }}
            >
                <Image 
                    src={INTEL_URL} 
                    fill
                    alt="Intel Banner" 
                    className="rounded-2xl"
                    style={{
                        objectFit: 'cover',
                        maxWidth: '100%', 
                        maxHeight: '100%',
                    }}
                />
            </div>
        </div>
    );
}
