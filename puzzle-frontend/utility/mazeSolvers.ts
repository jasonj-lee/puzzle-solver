import { Maze } from "@/models/Maze";
import { Queue } from "@/models/Queue";

// helper arrays for going up, right, down, left
const rChange: number[] = [-1, 0, 1, 0]; 
const cChange: number[] = [0, 1, 0, -1]; 

// create boolean array of set size to track visited positions
function createVisitedArray(rows: number, cols: number): boolean[][] {
    return Array.from({ length: rows }, () => Array.from({ length: cols }, () => false)); 
}

function checkValidNext(rowPos: number, colPos: number, numRows: number, numCols: number, grid: number[][], visited: boolean[][]): boolean {
    return 0 <= rowPos && rowPos < numRows && 0 <= colPos && colPos < numCols && grid[rowPos][colPos] == 0 && !visited[rowPos][colPos]; 
}

function dfsHelper(maze: Maze, visited: boolean[][], rowPos: number, colPos: number): boolean {
    if (rowPos == maze.endPos[0] && colPos == maze.endPos[1]) {
        maze.isSolvable = true; 
        return true; 
    }
    
    let solvable: boolean = false; 
    for (let i = 0; i < 4 && !solvable; ++i) {
        const newRow = rowPos + rChange[i]; 
        const newCol = colPos + cChange[i]; 
        if (checkValidNext(newRow, newCol, maze.size[0], maze.size[1], maze.layout, visited)) {
            visited[newRow][newCol] = true; 
            solvable = dfsHelper(maze, visited, newRow, newCol); 
        }
    } 

    return solvable; 
}

function solveMazeDFS(maze: Maze): boolean {
    const visited: boolean[][] = createVisitedArray(maze.size[0], maze.size[1]); 
    visited[maze.startPos[0]][maze.startPos[1]] = true; 

    const solvable = dfsHelper(maze, visited, maze.startPos[0], maze.startPos[1]); 
    maze.isSolvable = solvable; 

    return solvable;
}

function solveMazeBFS(maze: Maze): boolean {
    const visited: boolean[][] = createVisitedArray(maze.size[0], maze.size[1]); 
    visited[maze.startPos[0]][maze.startPos[1]] = true; 

    let solvable: boolean = false; 
    const queue: Queue<[number, number]> = new Queue(); 
    queue.push([maze.startPos[0], maze.startPos[1]]); 
    visited[maze.startPos[0]][maze.startPos[1]] = true; 

    while (!solvable && queue.size() > 0) {
        const [rowPos, colPos] = queue.pop(); 

        if (rowPos == maze.endPos[0] && colPos == maze.endPos[1]) solvable = true; 

        for (let i = 0; i < 4; ++i) {
            const newRow = rowPos + rChange[i]; 
            const newCol = colPos + cChange[i]; 
            if (checkValidNext(newRow, newCol, maze.size[0], maze.size[1], maze.layout, visited)) {
                visited[newRow][newCol] = true;  
                queue.push([newRow, newCol]); 
            }
        }
    }
    
    return solvable; 
}

function solveMazeDjikstras(maze: Maze): boolean {
    return false; 
}

function solveMazeAStar(maze: Maze): boolean {
    return false; 
}