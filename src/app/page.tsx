import { Noto_Serif } from "next/font/google";
import Counter from "./components/Counter";

const serif = Noto_Serif({ subsets: ["latin"], weight: "400" })

export default function Home() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[90%] h-[80%] flex justify-center items-center flex-col gap-5">
                <div className="w-full h-[10%] flex justify-center items-center">
                    <h1 className={`text-white text-2xl ${serif.className} border-2 rounded-2xl p-3`}>"ITS NOW OR NEVER"</h1>
                </div>
                <Counter />
            </div>
        </div>
    );
}
