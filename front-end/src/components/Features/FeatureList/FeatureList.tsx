import Classes from './FeatureList.module.css';
import {FeatureItem, FeatureItemProps} from "../FeatureItem/FeatureItem";

export interface FeatureListProps {
    features: FeatureItemProps[];
}

export function FeatureList({features}: FeatureListProps) {
    return (
        <section className={Classes.features}>
            <h2 className="sr-only">Features</h2>
            {features.map(({icon, title, children}, i) => (
                <FeatureItem key={i} icon={icon} title={title} children={children} />
            ))}
        </section>
    );
}
