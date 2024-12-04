const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen">{children}</section>
    );
};

export default Section;