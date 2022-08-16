import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {LeftSection} from './HeroStyles';

const Hero = () => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome<br />
					I'm Lyshka, an aspiring full stack developer
				</SectionTitle>
				<SectionText>
					The portfolio shows my developed projects, as well as my skills in the field of web development and mobile.
				</SectionText>
			</LeftSection>
		</Section>
	</>
);

export default Hero;