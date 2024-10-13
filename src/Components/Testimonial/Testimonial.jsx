import testimonial from "../../assets/testimonial.jfif"
import smit from "../../assets/smitlogo.png"

export default function Testimonial() {
    return (
        <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg mx-5 my-5">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <img
                        src={smit}
                        alt="Shadowbey Logo"
                        className="w-[100px] h-[100px]"
                    />
                    <blockquote className="text-2xl font-light mb-4">
                        "From the initial concept discussions to the final product, their team was attentive, innovative, and professional throughout the entire process."
                    </blockquote>
                    <cite className="block">
                        <span className="font-semibold">Romail Ahmed</span>
                        <span className="block text-sm text-gray-400">CEO of Shadowbey</span>
                    </cite>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={testimonial}
                        alt="Team working in office"
                        className="rounded-lg w-[200px] h-[200px]"
                    />
                </div>
            </div>
        </div>
    )
}