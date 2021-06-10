import { buttonListeners, selectProject } from './buttonListeners';
import { retrieveLocalStorage } from './Storage';

retrieveLocalStorage();
buttonListeners();
selectProject();
