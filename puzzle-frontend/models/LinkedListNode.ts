export class Node<T> {
    private item: T; 
    private next: Node<T> | null; 

    constructor(item: T, next: Node<T> | null = null) {
        this.item = item; 
        this.next = next; 
    }

    getItem(): T {
        return this.item; 
    }

    getNext(): Node<T> | null {
        return this.next; 
    }

    setItem(newItem: T): void {
        this.item = newItem; 
    }

    setNext(newNext: Node<T>): void {
        this.next = newNext; 
    }
}