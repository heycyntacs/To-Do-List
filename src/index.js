import { buttonListeners, selectProject } from './Modules/eventListeners';
import { retrieveLocalStorage } from './Modules/Storage';

retrieveLocalStorage();
buttonListeners();
selectProject();
