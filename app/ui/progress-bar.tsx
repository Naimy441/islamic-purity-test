export function ProgressBar({ percentage } : { percentage: number }) {
    return ( 
        <div className="fixed top-0 left-0 z-50 w-full h-4 bg-gray-200">
            <div className="h-full bg-blue-500 transition-all duration-300" style={{width: `${percentage}%`}} />
        </div>
    );
}