

export default function FormPayment() {
    return (<>
        <form className="mt-8 flex flex-col">
            <div className="w-full max-w-sm min-w-[200px]">
                <label className="block mb-2 text-sm text-slate-600">
                    Email
                </label>
                <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
            </div>

            <label className="block mb-1 text-sm text-slate-600 mt-4">
                Card Details
            </label>
            <input
                type="text"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="1234 5678 9012 3456"
            />

            <div className="flex">
                <div className="w-full md:w-8/12 mr-4">
                    <label className="block mb-1 text-sm text-slate-600 mt-4">
                        Expiration Date
                    </label>
                    <input
                        type="text"
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="MM/YY"
                    />
                </div>
                <div className="w-full md:w-4/12">
                    <label className="block mb-1 text-sm text-slate-600 mt-4">
                        CVV
                    </label>
                    <input
                        type="text"
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="123"
                    />
                </div>
            </div>

            <label className="mt-4 block mb-1 text-sm text-slate-600">
                Holder Name
            </label>
            <input
                type="text"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="e.g John Doe"
            />
        </form>
    </>);
}