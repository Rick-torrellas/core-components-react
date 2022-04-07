/* 
valores necesarios

ul
li['valores']
img
alt
src
a
href */
import Image from "react-bootstrap/Image"
export default function RenderContent({ type, data , url = false , alt , src , href , li }) {
  switch (type) {
    case "code":
      return <code>{data}</code>;
      break;
    case "h1":
      return <code>{data}</code>;
      break;
    case "h2":
      return <code>{data}</code>;
      break;
    case "h3":
      return <code>{data}</code>;
      break;
    case "p":
      return <code>{data}</code>;
      break;
      case "ul":
          {li.map((LI,i) => {
                  return (
                      <li key={i}>{LI}</li>
                  )
              })
            }
      break;
      case "img":
      return <Image alt={alt} src={src} />;
      break;
    default:
        return null;
        case "a":
      return <a href={href}>{data}</a>;
      break;
      break;
  }
}
