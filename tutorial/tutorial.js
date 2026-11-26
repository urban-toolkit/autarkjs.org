import './shell.js';
import { mountNotebook } from './notebook.js';

mountNotebook(document.querySelector('main'), location.pathname.split('/').pop());
