import { Node } from "./LinkedListNode"

export class Queue<T> {
    private head: Node<T> | null; 
    private tail: Node<T> | null; 
    private length: number; 

    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }

    push(item: T): void {
        const itemNode: Node<T> = new Node(item); 

        if (this.head == null) {
            this.head = itemNode; 
            this.tail = itemNode; 
        } else {
            this.tail?.setNext(itemNode); 
            this.tail = itemNode; 
        }
        this.length += 1; 
    }

    pop(): T {
        if (this.length <= 0) {
            throw new Error("Attempting element removal from empty Queue"); 
        }

        const firstElem = this.head!.getItem(); 
        this.head = this.head!.getNext(); 
        if (this.length == 1) {
            this.tail = null; 
        }
        
        return firstElem; 
    }

    peek(): T {
        if (this.length <= 0) {
            throw new Error("Attempting element access from empty Queue"); 
        }

        const firstElem = this.head!.getItem(); 
        return firstElem; 
    }

    size(): number {
        return this.length; 
    }
}