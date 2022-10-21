import React from 'react'
import *  as Styled from './styles'
import { Image } from '../../components/Image/index';
import projects from '../../assets/projects.svg'
import { Text } from '../../components/Text/index';
import { Modal } from '../../components/modal/index';
import { projecMock } from '../../common/data/projects';
import { Buttom } from '../../components/Buttom/button';


export const Projects = () => {
	return (
		<Styled.ProjectsContainer>

			<Image src={projects} alt={'projetos'} />
			<Text as='h1' size='small'> Projetos  </Text>
			<Text>  Principais projetos construidos</Text>




			<Styled.Container>
				{projecMock.map((iten, i) => (
					<>


						<Styled.ModalContainer>
							<Text as='h2' size='small'> {iten.title}</Text>
							<Text>{iten.subTitle}</Text>

							<Modal size='medium'>

								<Image src={iten.src} alt={projects} />
							</Modal>
							<Buttom className={'button'}   >ver projeto</Buttom>
						</Styled.ModalContainer>


					</>
				))}


			</Styled.Container>
			<Buttom className={'button '}  > Mais projetos</Buttom>
		</Styled.ProjectsContainer>


	)
};