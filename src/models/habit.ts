import Frequency from "../frequency";

interface Habit { 
    id: number,
    name: string,
    completed: boolean,
    streak: number,
    frequency: Frequency
}

export default Habit;