import styles from './Footer.module.css'

export default function Footer() {
    return <footer className="w-full bg-black px-30 grid grid-cols-2">
        <div></div>
        this is Pitagorici APS
        <video className={styles.footer_video} src="/videos/05-moving-3d.mp4" playsInline autoPlay loop muted></video>
    </footer>
}