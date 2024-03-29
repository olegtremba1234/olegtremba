import { Facebook, Telegram, LinkedIn, GitHub } from '@mui/icons-material';

export const Footer = () => {
  return (
    <footer className="footer">
        <div>
          <p>© 2024 by Oleg Tremba.</p>
        </div>
        <div>
          <ul className='footer-contact-list'>
            <li className='footer-contact-list-item'>
              <p className='footer-contact-list-title'>Call</p>
              <a href="tel:+380978723353">+38-097-872-33-53</a>
            </li>
            <li className='footer-contact-list-item'>
              <p className='footer-contact-list-title'>Write</p>
              <a href="mailto:olegtremba@gmail.com">olegtremba@gmail.com</a>
            </li>
            <li className='footer-contact-list-item'>
              <p className='footer-contact-list-title'>Follow</p>
              <ul className='footer-socials-list'>
                <li><a href="https://www.facebook.com/profile.php?id=100001376784549" target="_blank" rel='noopener noreferrer nofollow'><Facebook sx={{ fontSize: 'large' }} /></a> </li>
                <li><a href="https://t.me/olegtremba" target="_blank" rel='noopener noreferrer nofollow'><Telegram sx={{ fontSize: 'large' }} /></a> </li>
                <li><a href="https://www.linkedin.com/in/oleg-tremba/" target="_blank" rel='noopener noreferrer nofollow'><LinkedIn sx={{ fontSize: 'large' }} /></a></li>
                <li><a href="https://github.com/olegtremba1234" target="_blank" rel='noopener noreferrer nofollow'><GitHub sx={{ fontSize: 'large' }} /></a></li>
              </ul>
            </li>
          </ul>
        </div>
    </footer>
  )
}