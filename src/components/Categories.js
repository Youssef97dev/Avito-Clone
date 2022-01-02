// Common
import { Card } from '../common';

// Icons
import { CubeIcon, TruckIcon, DesktopComputerIcon, LibraryIcon, NewspaperIcon, OfficeBuildingIcon, HeartIcon, HashtagIcon, PresentationChartBarIcon, HomeIcon } from '@heroicons/react/solid'



const Categories = () => {
    return(
        <div className="container page-regions">
            <h1 className="home-header-subtitle white-color cg-title">Choisissez une catégorie</h1>
            <span className="cg-subtitle white-color">Catégories populaires</span>
            <div  className="d-flex justify-content-between">
                <Card color="#4A4A4A" title="TOUTES LES CATÉGORIES" icon={<CubeIcon className="card-icon" style={{backgroundColor: '#F2F2F2', color: '#4A4A4A'}} />} />
                <Card color="#FF4C59" title="VEHICULE" icon={<TruckIcon className="card-icon" style={{backgroundColor: '#FFEDEE', color: '#FF4C59'}} />} />
                <Card color="#A04A81" title="AUTO NEUF" icon={<TruckIcon className="card-icon" style={{backgroundColor: '#EBD8E4', color: '#A04A81'}} />} />
                <Card color="#31CA68" title="INFORMATIQUE ET MULTIMEDIA" icon={<DesktopComputerIcon className="card-icon" style={{backgroundColor: '#EAF9EF', color: '#31CA68'}} />} />
                <Card color="#3AA4FF" title="IMMOBILIER" icon={<LibraryIcon className="card-icon" style={{backgroundColor: '#EBF5FF', color: '#3AA4FF'}} />} />
                <Card color="#8871FF" title="IMMO NEUF" icon={<NewspaperIcon className="card-icon" style={{backgroundColor: '#F3F0FF', color: '#8871FF'}} />} />
            </div>

            <div className="d-flex justify-content-between">
                <Card color="#4A4A4A" title="POUR LA MAISON ET JARDIN" icon={<HomeIcon className="card-icon" style={{backgroundColor: '#F2F2F2', color: '#4A4A4A'}} />}/>
                <Card color="#4A4A4A" title="EMPLOI ET SERVICES" icon={<OfficeBuildingIcon className="card-icon" style={{backgroundColor: '#F2F2F2', color: '#4A4A4A'}} />} />
                <Card color="#4A4A4A" title="HABILLEMENT ET BIEN ETRE" icon={<HeartIcon className="card-icon" style={{backgroundColor: '#F2F2F2', color: '#4A4A4A'}} />}/>
                <Card color="#4A4A4A" title="LOISIRS ET DIVERTISSEMENT" icon={<HashtagIcon className="card-icon" style={{backgroundColor: '#F2F2F2', color: '#4A4A4A'}} />} />
                <Card color="#4A4A4A" title="ENTREPRISES" icon={<PresentationChartBarIcon className="card-icon" style={{backgroundColor: '#F2F2F2', color: '#4A4A4A'}} />} />
                <Card color="#4A4A4A" title="ENCHÈRES PUBLIQUES" icon={<CubeIcon className="card-icon" style={{backgroundColor: '#F2F2F2', color: '#4A4A4A'}} />} />
            </div>
            
        </div>
    );
}

export default Categories;