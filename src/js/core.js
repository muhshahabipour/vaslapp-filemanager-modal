import ModalEventHandler from './modal-event-handler';

import modalFileManager from "./templates/modal-filemanager.handlebars";


export default class Core{
    
    constructor(defaults) {

        // fot test 
        const aaaaaaaaa = 1;

        var b = document.createElement('div')
        b.innerHTML = modalFileManager({id: defaults.modalId || 'fileManagerModal'});
        document.body.appendChild(b);


        new ModalEventHandler(defaults);
    }






}