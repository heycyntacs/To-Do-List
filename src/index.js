import { buttonListeners, selectProject } from './Modules/EventListeners';
import { retrieveLocalStorage } from './Modules/Storage';

retrieveLocalStorage();
buttonListeners();
selectProject();
