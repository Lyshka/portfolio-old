import { BlogCard, ExternalLink, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, ImgContainer } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Image from 'next/image';
import client from "../../../contentful"
import { useEffect, useState } from 'react';

const Projects = () => {
	const [projects2, setPropjects] = useState([])

	const getProjects = async () => {
		const projectsObj = await client.getEntries({
			content_type: "projects"
		})

		const projects = projectsObj.items.map(({fields}) => fields)

		setPropjects(projects)
	}

	useEffect(() => {
		getProjects()
	}, [])

	// console.log(projects2[0].image)

	return (
		<Section nopadding id='projects'>
			<SectionDivider />
			<SectionTitle main>Projects</SectionTitle>
			<GridContainer>
				{projects2?.map(({ image, title, tags, source, visit }) => (
					<BlogCard key={title}>
						<ImgContainer>
							<Image
								src={`https:${image.fields.file.url}`}
								width={"100%"}
								height={"100%"}
								layout="responsive"
								objectFit={"contain"}
							/>
						</ImgContainer>
						<TitleContent>
							<HeaderThree>{title}</HeaderThree>
							<Hr />
						</TitleContent>
						<div>
							<TitleContent>Stack: </TitleContent>
							<TagList>
								{tags.map((tag, i) => (
									<Tag key={i}>{tag}</Tag>
								))}
							</TagList>
						</div>
						<UtilityList>
							<ExternalLink href={visit} target="_blank">
								Source
							</ExternalLink>
							<ExternalLink href={source} target="_blank">
								Code
							</ExternalLink>
						</UtilityList>
					</BlogCard>
				))}
			</GridContainer>
		</Section>
	)
};

export default Projects;