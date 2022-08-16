import { BlogCard, ExternalLink, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section nopadding id='projects'>
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map(({id, image, title, tags, source, visit}) => (
				<BlogCard key={id}>
					<Img src={image} />
					<TitleContent>
						<HeaderThree title>{title}</HeaderThree>
						<Hr />
					</TitleContent>
					<div>
						<TitleContent>Stack</TitleContent>
						<TagList>
							{tags.map((tag, i) => (
								<Tag key={i}>{tag}</Tag>
							))}
						</TagList>
					</div>
					<UtilityList>
						<ExternalLink href={visit} target="_blank">
							Code
						</ExternalLink>
						<ExternalLink href={source} target="_blank">
							Source
						</ExternalLink>
					</UtilityList>
				</BlogCard>
			))}
		</GridContainer>
	</Section>
);

export default Projects;