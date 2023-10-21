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
        ]
    }
}