import Classes from './FeatureItem.module.css';

type FeatureIcon = {
    name: string;
    filename: string;
};

export type FeatureItemProps = {
    icon: FeatureIcon;
    title: string;
    children: string;
};

export function FeatureItem({icon, title, children}: FeatureItemProps) {
    return (
        <div className={Classes.featureItem}>
            <img src={`/icons/${icon.filename}`} alt={`${icon.name} icon`} className={Classes.featureIcon} />
            <h3 className={Classes.featureItemTitle}>{title}</h3>
            <p>{children}</p>
        </div>
    );
}
