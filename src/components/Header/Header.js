import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {RiShoppingBagFill} from 'react-icons/ri';
import {SiFreelancer, SiTelegram} from "react-icons/si"


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
	<Container>
		<Div1>
			<Link href={"/"}>
				<a style={{display: "flex", alignItems: "center", color: "white", marginBottom: 20}}>
					<RiShoppingBagFill size={"3rem"} /> <Span>Portfolio</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href={"#projects"}>
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href={"#tech"}>
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href={"#about"}>
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href='https://github.com/Lyshka' target={"_blank"}>
				<AiFillGithub size={"3rem"} />
			</SocialIcons>
			<SocialIcons href='https://kwork.ru/user/lyshka_dev' target={"_blank"}>
				<SiFreelancer size={"3rem"} />
			</SocialIcons>
			<SocialIcons href='https://www.linkedin.com/in/lesha-novitskiy-8177391bb/' target={"_blank"}>
				<AiFillLinkedin size={"3rem"} />
			</SocialIcons>
			<SocialIcons href='https://t.me/Aim_Lyshka' target={"_blank"}>
				<SiTelegram size={"3rem"} />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
