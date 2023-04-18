
import { useRouter } from "next/router"
import Link from "next/link"

const style = {
    color: '#0070f3',
    TextDecoration: 'underline'
}

const ActuveLink = ({text, href}) => {

   const { asPath } = useRouter();
  // console.log(router);

  return (
        <Link href={href}> 
            <a style={ asPath === href ? style : null }>{text}</a>
        </Link>
  )
}

export default ActuveLink