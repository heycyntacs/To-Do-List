import { buttonListeners, selectProject } from './eventListeners';
import { retrieveLocalStorage } from './Storage';

retrieveLocalStorage();
buttonListeners();
selectProject();