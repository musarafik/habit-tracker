import Habit from "../models/habit";

class Repo { 
    private habits: Habit[];

    constructor() {
        this.habits = [];
    }

    getHabits(): Habit[] {
        return this.habits;
    }

    getHabitById(id: number): Habit | null { 
        const habit = this.habits.find((habit) => habit.id === id);

        if(habit != undefined) { 
            return habit
        }
        else { 
            return null;
        }
    }

    addHabit(habit: Habit): boolean { 
        const existingHabit = this.habits.find((currHabit) => currHabit.id === habit.id);
        let didAddHabit: boolean = false;

        if(existingHabit === undefined) {
            this.habits.push(habit)
            didAddHabit = true;
        }

        return didAddHabit;
    }
}