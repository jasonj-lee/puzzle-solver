// custom object to hold mazes and relevant information

export interface Maze {
    size: [number, number]; 
    startPos: [number, number]; 
    endPos: [number, number];
    layout: number[][]; 
    isSolvable: boolean; 
}