/*------------------------------------------------------------------
* app/log.ts
* Copyright 2020 (c) Stage One Software.
*-----------------------------------------------------------------*/

/** Static methods that maintain a debugging log. */
export class Log {
    
    private static contents: string[] = [];
    
    /** Flag to display debugging information on the console. */
    private static tracing = false;
    
    /** Adds an entry to the log. */
    public static add(s: string) {
        Log.contents.push(Log.getTime() + ' ' + s);
        // if (this.tracing) { console.log(s); }
    }
    
    /** Returns a copy of the log. */
    public static get(): string[] {
        return [...Log.contents];
    }
    
    /** Returns the current time in the format hh:mm:ss. */
    private static getTime(): string {
        let d = new Date();
        return Log.digits(d.getHours()) + ':' + Log.digits(d.getMinutes()) + ':' + Log.digits(d.getSeconds());
    }
    
    /** Returns `n` formatted as a string with at least two digits. */
    private static digits(n: number): string {
        return n < 10 ? '0' + n : n.toString();
    }

}