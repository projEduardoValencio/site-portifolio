import ContentArea from '../../components/ContentArea/ContentArea';
import HeaderComponent from '../../components/Header/HeaderComponent';
import IconList from '../../components/IconsList/IconList';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ProjectCardList from '../../components/ProjectCardList/ProjectCardList';
import { projectList } from '../../utils/projectList';
import {
  mainStackIconList,
  previousExperienceIconList,
} from '../../utils/staticIconList';
import './Home.css';
import { ThemeProvider } from '../../contexts/ThemeContext';
import ToggleThemeButton from '../../components/ToggleThemeButton/ToggleTemeButton';

const HomeComponent = () => {
  return (
    <ThemeProvider>
      <HeaderComponent />
      <main className="main-content-padding">
        <ProfileCard />

        <div className="show-area">
          <ContentArea title="MAIN STACK">
            <IconList iconUrlList={mainStackIconList} />
          </ContentArea>

          <ContentArea title="PREVIOUS EXPERIENCE">
            <IconList iconUrlList={previousExperienceIconList} />
          </ContentArea>

          <ContentArea title="POJECTS">
            <ProjectCardList projects={projectList} />
          </ContentArea>
        </div>
      </main>

      <ToggleThemeButton />
    </ThemeProvider>
  );
};

export default HomeComponent;
