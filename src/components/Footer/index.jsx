import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Desert Palm Massage
      <small className={Styles.byline}>Built by Jesse Higgins with Astro 🚀</small>
    </footer>
  );
}
export default Footer;
