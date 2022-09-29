import Image from "next/image";
import Logo, {FavoriteLogo, SearchLogo, MenuLogo, CartLogo, UserLogo} from '../Components/Images'


export default function(){
    return(<div className=" p-2 mt-0 fixed w-full z-10 top-0">
    <div className="flex flex-row justify-between min-w-screen items-center bg-white w-full px-10 h-16">
    <Image src="/winfi-logo.webp" width={'69'} height={'38'} />
    
    <div>
        <ul className="flex gap-x-10 font-medium">
            <li className="menu-hover-animation">Home</li>
            <li className="menu-hover-animation">Shop</li>
            <li className="menu-hover-animation">Blog</li>
            <li className="menu-hover-animation">About</li>
            <li className="menu-hover-animation">Contact</li>
        </ul>
    </div>

    <div className="flex flex-row gap-x-7 items-center">
      <SearchLogo />
      <FavoriteLogo />
      <CartLogo />
      <UserLogo />
      {/* <MenuLogo /> */}
    </div>
    
    </div>
    </div>
    )
}