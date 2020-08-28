
import { Project, ProjectStatus } from '../models/project-model';

// Project State management
type Listener<T> = (items: T[]) => void;

class State<T> {
    protected listeners : Listener<T>[] = [];

    addListener(listenerFn: Listener<T>){
        this.listeners.push(listenerFn);
    }
}

export class ProjectState extends State<Project>{

    private project:any[] = [];
    private static instance: ProjectState;

    private constructor(){
        super();
    }

    // To make the class instance only once (Or singlinton)
    static getInstance(){
        if (this.instance){
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addProject(title:string, description:string, numOfPeople:number){
        const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);
        this.project.push(newProject);
        this.updateListeners();
    }

    moveProject(projectId: string, newStatus: ProjectStatus){
        const project = this.project.find(prj => prj.id === projectId );

        if(project && project.status !== newStatus){
            project.status = newStatus;
            this.updateListeners();
        }
    }

    private updateListeners() {
        for(const listenerFn of this.listeners){
            listenerFn(this.project.slice());
        }
    }
}

export const projectState = ProjectState.getInstance();
