interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export default function Container({
    children,
    className = "",
    as: Tag = "div",
}: ContainerProps) {
    return (
        <Tag className={`max-w-[1240px] mx-auto px-6 ${className}`}>
            {children}
        </Tag>
    );
}
