import Classes from './Hero.module.css';

export function Hero() {
    return (
        <div className={Classes.hero}>
            <section className={Classes.heroContent}>
                <h2 className="sr-only">Promoted Content</h2>
                <p className={Classes.subtitle}>No fees.</p>
                <p className={Classes.subtitle}>No minimum deposit.</p>
                <p className={Classes.subtitle}>High interest rates.</p>
                <p className={Classes.text}>Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
}
