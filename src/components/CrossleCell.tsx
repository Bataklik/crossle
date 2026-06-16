interface CrossleCellProps {
    value: string;
    color?: string;
}
type variantType = {
    green: string;
    orange: string;
    grey: string;
    white: string;
};

export function CrossleCell({ value, color = "white" }: CrossleCellProps) {
    return <div className={"bg-white border border-black px-2"}>{value}</div>;
}
