export const entry: string;
export const target: string;
export namespace output {
    const path: string;
    const filename: string;
    const library: string;
    const libraryTarget: string;
    const globalObject: string;
}
export namespace module {
    const rules: ({
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
            options: {
                presets: string[];
            };
        };
    } | {
        test: RegExp;
        use: string;
        exclude: RegExp;
    })[];
}
export namespace resolve {
    const extensions: string[];
}
export const mode: string;
