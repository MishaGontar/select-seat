export type Sector = {
    id: number;
    name: string;
    transform: {
        x: number;
        y: number;
    };
    location: {
        x: number;
        y: number;
    };

    places: Place[];
};

export interface Place {
    row: number;
    count: number;
    x_start: number;
    sold: boolean;
}

export enum SECTORS {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5
}

export const SECTORS_ROW_Y: number[] = [
    3766, // 1
    3659, // 2
    3552, // 3
    3440, // 4
    3330, // 5
    3221, // 6
    3114, // 7
    3002, // 8
    2895, // 9
    2785, // 10
    2675, // 11
    2560, // 12
    2450, // 13
    2345, // 14
    2235  // 15
];

export const sectorData = new Map<number, Sector>([
    [SECTORS.ONE, {
        id: 1,
        name: '1',
        transform: {
            x: 18615,
            y: 1579,
        },
        location: {
            x: 1049.9,
            y: 552,
        },

        places: [
            {row: 1, count: 47, x_start: 18695, sold: true,},
            {row: 2, count: 47, x_start: 18695, sold: true,},
            {row: 3, count: 47, x_start: 18695, sold: true,},
            {row: 4, count: 47, x_start: 18695, sold: true,},
            {row: 5, count: 47, x_start: 18695, sold: true,},
            {row: 6, count: 47, x_start: 18695, sold: false,},
            {row: 7, count: 47, x_start: 18695, sold: true,},
            {row: 8, count: 47, x_start: 18695, sold: true,},
            {row: 9, count: 47, x_start: 18695, sold: true,},
            {row: 10, count: 47, x_start: 18695, sold: true,},
            {row: 11, count: 47, x_start: 18695, sold: true,},

            {row: 12, count: 40, x_start: 18885, sold: true,},
            {row: 13, count: 40, x_start: 18885, sold: true,},
            {row: 14, count: 40, x_start: 18885, sold: true,},
            {row: 15, count: 40, x_start: 18885, sold: false,},
        ],
    }],
    [SECTORS.TWO, {
        id: 2,
        name: '2',
        transform: {
            x: 15905,
            y: 1554,
        },
        location: {
            x: 986.9,
            y: 552,
        },

        places: [
            {row: 1, count: 48, x_start: 15977, sold: true,},
            {row: 2, count: 48, x_start: 15977, sold: true,},
            {row: 3, count: 48, x_start: 15977, sold: true,},
            {row: 4, count: 48, x_start: 15977, sold: true,},
            {row: 5, count: 48, x_start: 15977, sold: true,},
            {row: 6, count: 48, x_start: 15977, sold: false,},
            {row: 7, count: 48, x_start: 15977, sold: true,},
            {row: 8, count: 48, x_start: 15977, sold: true,},
            {row: 9, count: 48, x_start: 15977, sold: true,},
            {row: 10, count: 48, x_start: 15977, sold: true,},
            {row: 11, count: 48, x_start: 15977, sold: true,},

            {row: 12, count: 43, x_start: 16077, sold: true,},
            {row: 13, count: 43, x_start: 16077, sold: true,},
            {row: 14, count: 43, x_start: 16077, sold: true,},
            {row: 15, count: 43, x_start: 16077, sold: false,},
        ],
    }],
    [SECTORS.THREE, {
        id: 3,
        name: '3',
        transform: {
            x: 13842,
            y: 1598,
        },
        location: {
            x: 716.4,
            y: 552,
        },

        places: [
            {row: 1, count: 34, x_start: 13940, sold: true,},
            {row: 2, count: 34, x_start: 13940, sold: true,},
            {row: 3, count: 34, x_start: 13940, sold: true,},
            {row: 4, count: 34, x_start: 13940, sold: true,},
            {row: 5, count: 34, x_start: 13940, sold: true,},
            {row: 6, count: 34, x_start: 13940, sold: false,},
            {row: 7, count: 34, x_start: 13940, sold: true,},
            {row: 8, count: 34, x_start: 13940, sold: true,},
            {row: 9, count: 34, x_start: 13940, sold: true,},
        ],
    }],
    [SECTORS.FOUR, {
        id: 4,
        name: '4',
        transform: {
            x: 11016,
            y: 1582,
        },
        location: {
            x: 1088.2,
            y: 552,
        },

        places: [
            {row: 1, count: 50, x_start: 11097, sold: true,},
            {row: 2, count: 50, x_start: 11097, sold: true,},
            {row: 3, count: 50, x_start: 11097, sold: true,},
            {row: 4, count: 50, x_start: 11097, sold: true,},
            {row: 5, count: 50, x_start: 11097, sold: true,},
            {row: 6, count: 50, x_start: 11097, sold: false,},
            {row: 7, count: 50, x_start: 11097, sold: true,},
            {row: 8, count: 50, x_start: 11097, sold: true,},
            {row: 9, count: 50, x_start: 11097, sold: true,},
            {row: 10, count: 50, x_start: 11097, sold: true,},
            {row: 11, count: 50, x_start: 11097, sold: true,},

            {row: 12, count: 42, x_start: 11297, sold: true,},
            {row: 13, count: 42, x_start: 11297, sold: true,},
            {row: 14, count: 42, x_start: 11297, sold: true,},
            {row: 15, count: 42, x_start: 11297, sold: false,},
        ],
    }],
    [SECTORS.FIVE, {
        id: 5,
        name: '5',
        transform: {
            x: 8219,
            y: 1567,
        },
        location: {
            x: 1114.9,
            y: 552,
        },

        places: [
            {row: 1, count: 51, x_start: 8310, sold: true,},
            {row: 2, count: 51, x_start: 8310, sold: true,},
            {row: 3, count: 51, x_start: 8310, sold: true,},
            {row: 4, count: 51, x_start: 8310, sold: true,},
            {row: 5, count: 51, x_start: 8310, sold: true,},
            {row: 6, count: 51, x_start: 8310, sold: false,},
            {row: 7, count: 51, x_start: 8310, sold: true,},
            {row: 8, count: 51, x_start: 8310, sold: true,},
            {row: 9, count: 51, x_start: 8310, sold: true,},
            {row: 10, count: 51, x_start: 8310, sold: true,},
            {row: 11, count: 51, x_start: 8310, sold: true,},
            {row: 12, count: 51, x_start: 8310, sold: true,},

            {row: 13, count: 43, x_start: 8500, sold: true,},
            {row: 14, count: 43, x_start: 8500, sold: true,},
            {row: 15, count: 43, x_start: 8500, sold: false,},
        ],
    }],
]);