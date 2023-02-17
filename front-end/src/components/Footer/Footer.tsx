import Classes from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={Classes.footer}>
            <p className={Classes.footerText}>
                Copyright 2020 Argent Bank
            </p>
        </footer>
    );
}
