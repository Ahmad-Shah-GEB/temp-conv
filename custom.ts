
/**
 * Custom blocks
 */
//% weight=110 color=#188036 icon="♨"
namespace converter {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 0
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function F_to_C(value: number): number {
        return (value - 32) / 1.8;

    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 0
     */
    //% block
    export function C_to_F(value: number): number {
        return (value * 1.8) + 32;
    }
}
