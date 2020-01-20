/*------------------------------------------------------------------
* taskpane/app/log.ts
* Copyright 2020 (c) Stage One Software.
*-----------------------------------------------------------------*/

/** Singleton class that maintains a debugging log. */
export class Log {

    /** Constructs the singleton instance of this class. */
    private constructor() { }

    /** Returns the singleton instance of this class. */
    public static getSingleton(): Log { 
        if (!this.singleton) { this.singleton = new Log(); } 
        return this.singleton;
    }
    
    /** The singleton instance of this class. */
    private static singleton: Log;

    private contents: string[] = [];
    
    /** Flag to display debugging information on the console. */
    private static tracing = false;
    
    /** Adds an entry to the log. */
    public add(s: string) {
        this.contents.push(this.getTime() + ' ' + s);
        // if (this.tracing) { console.log(s); }
    }
    
    /** Returns a copy of the log. */
    public get(): string[] {
        return [...this.contents];
    }
    
    /** Returns the current time in the format hh:mm:ss. */
    private getTime(): string {
        let d = new Date();
        return this.digits(d.getHours()) + ':' + this.digits(d.getMinutes()) + ':' + this.digits(d.getSeconds());
    }
    
    /** Returns `n` formatted as a string with at least two digits. */
    private digits(n: number): string {
        return n < 10 ? '0' + n : n.toString();
    }

}