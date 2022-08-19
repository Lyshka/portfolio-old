import axios from 'axios';
import {useEffect, useState} from 'react';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {Box, Boxes, BoxNum, BoxText} from './AcomplishmentsStyles';

const Acomplishments = () => {
	const [star, setStar] = useState(0)
	const [repo, setRepo] = useState(0)

	const getStar = async () => {
		const {data} = await axios.get("https://api.github.com/users/Lyshka/starred")
		const star = (data.reduce((sum, item) => sum + item.stargazers_count, 0))
		setStar(star)
	}

	const getRepo = async () => {
		const {data} = await axios.get("https://api.github.com/users/Lyshka/repos")
		const repo = data.length
		setRepo(repo)
	}

	useEffect(() => {
		getStar()
		getRepo()
	}, [])

	return (
		<Section>
			<SectionTitle>Personal Achievements</SectionTitle>
			<Boxes>
				<Box>
					<BoxNum>{repo}</BoxNum>
					<BoxText>Open Source Projects</BoxText>
				</Box>
				<Box>
					<BoxNum>{star}</BoxNum>
					<BoxText>Github Stars</BoxText>
				</Box>
			</Boxes>
			<SectionDivider />
		</Section>
	)
};

export default Acomplishments;