import { Draggable } from '../models/drag-drop-interfaces';
import  Component from './base-component';
import { autobind } from '../Decorator/autobind-decorator';
import { Project } from '../models/project-model';

// Project item Class
export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable{
    private project: Project;

    get persons() {
        if (this.project.people === 1){
            return '1 person';
        }else {
            return `${this.project.people} person`
        }
    }

    constructor(hostId: string, project: Project){
        super('single-project',hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }

    @autobind
    dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
    };

    @autobind
    dragEndhandler(_: DragEvent) {
        console.log("end");
    };
    
    configure(){
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndhandler);
    };

    renderContent(){
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
        this.element.querySelector('p')!.textContent = this.project.description;
    };
}
