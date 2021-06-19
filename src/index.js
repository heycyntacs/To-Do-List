import { buttonListeners, selectProject } from './Modules/EventListeners';
import { retrieveLocalStorage } from './Modules/Storage';
import { selectFirstProject } from './Modules/UserInterface';

retrieveLocalStorage();
buttonListeners();
selectProject();
selectFirstProject();
