export interface Task {
    description: string,
    priority: string,
    dueDate: Date
}

export interface EditedTask {
    index: number,
    description: string,
    priority: string,
    dueDate: Date
}