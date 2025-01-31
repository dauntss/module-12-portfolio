interface CardProps {
    title: string;
    link: string;
    deployed?: string;
}

export default function Card(props: CardProps) {
    return (
        <div className="card">
            <a href={props.link} target="_blank">{props.title}
            { props.deployed && <a className="deployedLink" href={props.deployed} target="_blank">View Deployed</a> }</a>
        </div>
    );
}