import { useTranslation } from 'react-i18next';
import { IProject } from '../../models/interfaces/IProject';
import {
  ProjectContainerCard,
  Button,
  ButtonDiv,
  ContentGrid,
  Description,
  Tag,
  TagsDiv,
  Title,
  TitleMobile,
} from './ProjectCardStyle';

interface IProps {
  project: IProject;
}
const ProjectCard = ({ project }: IProps) => {
  const { t } = useTranslation();
  return (
    <ProjectContainerCard>
      <TitleMobile>{project.title}</TitleMobile>
      <ContentGrid>
        <img src={project.projectImageUrl} />

        <Title className="padding-horizontal">{project.title}</Title>

        <Description className="padding-horizontal">
          <p dangerouslySetInnerHTML={{ __html: project.description }} />

          <TagsDiv>
            {project.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsDiv>
        </Description>

        <ButtonDiv>
          {project.applicationAppUrl && (
            <Button>{t('button.go_to_app')}</Button>
          )}
          <Button fillButton>{t('button.source_code')}</Button>
        </ButtonDiv>
      </ContentGrid>
    </ProjectContainerCard>
  );
};

export default ProjectCard;
