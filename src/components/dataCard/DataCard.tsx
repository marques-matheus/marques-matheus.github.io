
type Props = {
    key: string;
    title: string;
    company?: string;
    date: string;
    institution?: string;
    description: string;
}

const DataCard = ({ card }: { card: Props }) => {
    return (
        <div key={card.key} className='text-custom-300 font-semibold w-full' >
            <h3 className="text-2xl lg:text-3xl xl:text-4xl text-custom-400 font-bold">{card.title}</h3>
            <h4 className=" text-lg">{card.company || card.institution}</h4>
            <span>{card.date}</span>
            <p>{card.description}</p>
        </div >
    )
}

export default DataCard;