import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {SiFreelancer, SiTelegram} from "react-icons/si"

import {SocialIcons} from '../Header/HeaderStyles';
import {CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer, SocialIconsContainer} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href="tel:+375297407619">Call me: +375297407619</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:lesha_novitskiy@mail.ru">
						Send by email: lesha_novitskiy@mail.ru
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					{/* {slogan} */}
				</CompanyContainer>
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
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;