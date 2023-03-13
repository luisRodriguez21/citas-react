export default function Error({ children }) {
    return (
        <div className="bg-red-600 mb-5 text-white upercase p-3 text-center rounded-md font-bold">
            { children}
        </div>
    );
}
