import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobile, faAt } from "@fortawesome/free-solid-svg-icons";
const iconAddr = [
  {
    icon: <FontAwesomeIcon icon={faLocationDot} color={"#ffc107"} style={{width:'20px',height:'20px'}}/>,
    title: "location",
    description1: "2651 Main Street, Suit 124",
    description2: "Seattle, WA, 98101",

  },
  {
    icon: <FontAwesomeIcon icon={faMobile} color={"#ffc107"} style={{width:'20px',height:'20px'}} />,
    title: "mobile",
    description1: "0123456789",
    description2: "0345627891"
  },
  {
    icon: <FontAwesomeIcon icon={faAt} color={"#ffc107"} style={{width:'20px',height:'20px'}}/>,
    title: "@",
    description1: "hello@thetheme.io",
    description2: "inf0@brex-theme.io"
  },

]
export default iconAddr;