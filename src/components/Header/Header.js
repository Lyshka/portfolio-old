import { useState } from 'react';

import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RiShoppingBagFill } from 'react-icons/ri';
import { SiFreelancer, SiTelegram, SiCodewars } from "react-icons/si"
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"


import { Container, Div1, Div2, Div3, Div4, NavLink, NavLink2, Ul, Li, SocialIcons, Span, SocialContainer } from './HeaderStyles';

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	return (
		<Container>
			<Div1>
				<Link href={"/"}>
					<a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: 20 }}>
						<RiShoppingBagFill size={"3rem"} /> <Span>Portfolio</Span>
					</a>
				</Link>
			</Div1>

			<div style={{ display: "flex", position: "relative" }}>
				{toggleMenu ? (
					<Div4>
						<AiOutlineClose
							fontSize={28}
							onClick={() => setToggleMenu(false)}
						/>
					</Div4>
				) : (
					<Div4>
						<HiMenuAlt4
							fontSize={28}
							className="text-white md:hidden cursor-pointer"
							onClick={() => setToggleMenu(true)}
						/>
					</Div4>
				)}


				{toggleMenu && (
					<>
						<Ul>
							<Li className="text-xl w-full my-2">
								<AiOutlineClose onClick={() => setToggleMenu(false)} />
							</Li>


							<li onClick={() => setToggleMenu(false)}>
								<Link href={"#projects"}>
									<NavLink2>Projects</NavLink2>
								</Link>
							</li>
							<li onClick={() => setToggleMenu(false)}>
								<Link href={"#tech"}>
									<NavLink2>Technologies</NavLink2>
								</Link>
							</li>
							<li onClick={() => setToggleMenu(false)}>
								<Link href={"#about"}>
									<NavLink2>About</NavLink2>
								</Link>
							</li>

							<SocialContainer>
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
								<SocialIcons href='https://www.codewars.com/users/Aim_Lyshka' target={"_blank"}>
									<SiCodewars size={"3rem"} />
								</SocialIcons>
							</SocialContainer>
						</Ul>
					</>
				)}
			</div>

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
				<SocialIcons href='https://www.codewars.com/users/Aim_Lyshka' target={"_blank"}>
					<SiCodewars size={"3rem"} />
				</SocialIcons>
			</Div3>
		</Container>
	)
};

export default Header;
