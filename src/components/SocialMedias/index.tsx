import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export const socialMedias = [faFacebookF, faTwitter, faGooglePlusG, faInstagram]

type props = {
  social: any
}

function SocialMedias({ social }: props) {
  return (
    <>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={social} />
        </a>
      </li>
    </>
  )
}

export default SocialMedias
