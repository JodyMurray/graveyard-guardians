/**
 * Assign sprites to different symbols (numbers and letters)
 * @returns an object of mapped symbols / sprites
 */
export default function generateMappings(){
    return {
        width: 64,
        height: 64,
        1: () => [
            sprite('top-left-corner'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        2: () => [
            sprite('top-middle'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        3: () => [
            sprite('top-right-corner'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        4: () => [
            sprite('middle-left'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        5: () => [
            sprite('middle-middle'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        6: () => [
            sprite('middle-right'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        7: () => [
            sprite('top-right'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        8: () => [
            sprite('top-right-end'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        9: () => [
            sprite('bottom-middle'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        A: () => [
            sprite('top-left-end'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        B: () => [
            sprite('top-left'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        C: () => [
            sprite('bottom-left'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        D: () => [
            sprite('bottom-right'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        E: () => [
            sprite('float-left-corner'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        F: () => [
            sprite('float-middle'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        G: () => [
            sprite('float-right'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        H: () => [
            sprite('skull-bone'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        I: () => [
            sprite('skull'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        J: () => [
            sprite('three-bones'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        K: () => [
            sprite('two-bone'),
            area(),
            scale(0.5),
            solid(),
            "ground"
        ],
        L: () => [
            sprite('arrow-right'),
            scale(0.5),
            pos(0, 20)
        ],
        M: () => [
            sprite('bush-1'),
            scale(0.5),
            pos(0, 25)
        ],
        N: () => [
            sprite('bush-2'),
            scale(0.5),
            pos(0, 35)
        ],
        O: () => [
            sprite('crate'),
            scale(0.5),
            pos(0, 12)
        ],
        P: () => [
            sprite('dead-bush'),
            scale(1),
            pos(0, -10)
        ],
        Q: () => [
            sprite('sign'),
            scale(0.5),
            pos(0, 19)
        ],
        R: () => [
            sprite('tombstone-1'),
            scale(0.8),
            pos(25, 20)
        ],
        S: () => [
            sprite('skeleton'),
            scale(0.5),
            pos(0, 40)
        ],
        T: () => [
            sprite('tombstone-2'),
            scale(0.7),
            pos(0, 15)
        ],
        U: () => [
            sprite('tree'),
            scale(0.5),
            pos(0,10)
        ],
    };
}