import { socialLinks } from '../../data';

const SocialLinks = ({groupClass, listItemClass}) => {
  return (
    <ul className={groupClass}>
        {socialLinks.map((link)=>{
                return(<li key={link.id}><a href={link.href} className={listItemClass}><i className={link.iconClass}></i></a></li>)
            }
        )}
    </ul>
  )
}

export default SocialLinks