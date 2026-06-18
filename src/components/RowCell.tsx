interface RowCellProps {
    guess: string;
    color: string;
}

export function RowCell({ guess, color }: RowCellProps) {
    return (
        <div
            className={`w-16 h-16 border border-gray-300 flex items-center justify-center text-lg font-bold ${color} `}
        >
            {guess}
        </div>
    );
}
